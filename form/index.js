import debounce from '../utils/debounce'

export default function form ({ main, elm:form, state, trigger, emit, dependencies }) {
    
    const { validations } = dependencies
    const SELECTOR = 'input, select, textarea'
    
    main( _ => [
        events,
        exposing,
        start
    ]) 

    const events = ({ on }) => {
        on('input', SELECTOR, debounce(oninput, 10))
        on('blur', SELECTOR, onchange)
        on('change', SELECTOR, onchange)
        on('submit', onsubmit)
    }

    const exposing = ({ expose }) => {
        expose({ setFields, validate })
    }

    const start = () => {
        const fields = getFields()
        const { errors } = validator(fields)
        state.set({ form:fields, errors })
    }

    const getFields = () => {
        return Array
            .from(form.elements)
            .filter( field => field.name )
            .reduce( (acc, element) => {
                acc[element.name] = Field( element, form )
                return acc
            }, {})   
    }

    const setFields = ( data ) => {
        for( let name in data ) {
            if( form[name].type == 'checkbox' ) {
                form[name].checked = Boolean(data[name])
            }else {
                form[name].value = data[name]
            }            
            trigger('change', `[name=${name}]`)
        }
    }

    const validate = () => {
        const {form:fields} = state.get()
        for( let name in fields ) {
            fields[name].touched = true
        }
        const { errors } = validator(fields)
        state.set({ form:fields, errors })
    }
    
    const oninput = (event) => {
        
        const element = event.target
        const name = element.name
        const { form:fields } = state.get()
        
        if( !(name in fields) ) {
            fields[element.name] = Field( element, form )
        }
        
        const { errors } = validator({ [name] : fields[name] })
        const currErrors = state.get().errors

        if( !errors[name] ) {
            const isValid = !Boolean(Object.keys(currErrors).length)
            delete currErrors[name]
            state.set({ errors:currErrors, form:fields, isValid })
        }else {
            const isValid = !Boolean(Object.keys(errors).length)
            state.set({ errors: { ...currErrors, ...errors }, form:fields, isValid })
        }
    }

    const onchange = (event) => {
        
        const element = event.target
        const name = element.name
        const { form:fields } = state.get()
        
        if( !(name in fields) ) {
            fields[element.name] = Field( element, form )
        }

        const { errors } = validator(fields)

        fields[name].touched = true
        const isValid = !Boolean(Object.keys(errors).length)
        state.set({ errors, form:fields, isValid })
    }

    const validator = (fields) => {
        
        const errors = {}
        
        for( let name in fields ) {
            
            const {rules} = fields[name]
            
            if( rules ) {
                for( let rule in rules ) {
                
                    const { element } = fields[name]
                    
                    fields[name].value = element.type == 'checkbox'
                        ? (element.checked? element.value : '') 
                        :   form[element.name].value
                        const { isValid,  message = `No message defined for rule [${rule}] `} = validations[rule]({ 
                            element, 
                            fields,
                            value: element.value,
                            options: rules[rule]
                        })
    
                    if( !isValid ) {
                        errors[name] = message
                    }
                }
            }else {
                const { element } = fields[name]
                fields[name].value = element.type == 'checkbox'
                    ? (element.checked? element.value : '') 
                    :   form[element.name].value
            }   
        }

        return { errors }
    }

    const onsubmit = (e) => {
        
        const { isValid, errors } = state.get()
        const formData = new FormData(form)
        const data = {}

        for(let [key, value] of formData.entries()) {
            data[key] = value 
        }

        if( isValid ) {
            emit('form:submit', { formData, data })
        }else {
            emit('form:submit:invalid', { formData, data, errors })
        }

        e.preventDefault()
    }
}

export const model = {
    isValid : false,
    errors  : {},
    form    : {}
}

const Field = ( element, form ) => ({
    element,
    rules  : (new Function(`return ${element.dataset.validation}`))(),
    value  : element.type == 'checkbox' ? (element.checked? element.value : '') : form[element.name].value,
    touched: false
})