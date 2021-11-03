
export default function form ({ main, elm:form, state, trigger, emit, dependencies }) {
    
    const { validations } = dependencies
    
    main( _ => [
        events,
        exposing,
        addFields  
    ]) 

    const events = ({ on }) => {
        on('input', '[data-validation]', debounce(onchange, 10))
        on('blur', '[data-validation]', onchange)
        on('change', '[data-validation]', onchange)
        on('submit', onsubmit)
    }

    const exposing = ({ expose }) => {
        expose({ setFields, validate })
    }

    const addFields = () => {
        const fields = {}
        Array
            .from(form.elements)
            .filter( field => field.name )
            .forEach( element => addItem(element, fields) )
        return fields
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
        const fields = addFields()
        for( let name in fields ) {
            fields[name].touched = true
        }
        doValidation(fields)
    }
    
    const onchange = (event) => {
        const element = event.target
        const fields = addFields()
        if( !(element.name in fields ) ) {
            addItem(element, fields)
        }
        fields[element.name].touched = true
        doValidation( fields )
    }

    const doValidation = ( fields ) => {
        const errors = {}
        for( let name in fields ) {
            const {rules} = fields[name]
            for( let rule in rules ) {
                const { element } = fields[name]
                fields[name].value = element.type == 'checkbox'
                    ? (element.checked? element.value : '') 
                    :   form[element.name].value
                const {isValid, message = `No message defined for rule [${rule}] `} = validations[rule]({ element, value: element.value, fields, options: rules[rule] })
                if( !isValid ) {
                    errors[name] = message
                }
            }
        }
        if( Object.keys(errors).length ) {
            state.set({ errors, isValid: false, form: fields })
        }else {
            state.set({ errors : {}, isValid: true, form: fields })
        }
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
    form  : {}
}

const addItem = ( element, fields ) => {
    fields[ element.name ] = { 
        element, 
        rules  : (new Function(`return ${element.dataset.validation}`))(),
        isValid: true,
        errors :{},
        value  :element.value,
        touched: false
    }
}

const debounce = (func, timeout = 300) => {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout( _ => func.apply(null, args), timeout )
    }
}