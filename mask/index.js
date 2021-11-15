import debounce from '../utils/debounce'

export default function mask ({ main, elm, state, dependencies }) {
	
	const { masks } = dependencies 
	const fn = masks[ elm.dataset.mask ]
	
	main( _ => [
		events
	])

	const events = ({ on }) => {
		on('input', debounce(onchange, 10))
		on('blur', debounce(onchange, 10))
		on('change', onchange)
	} 

	const onchange = (e) => {

		const { name, value:value_ } = e.target
		const { parent } = state.get()
		const newvalue = fn(value_)
		
		e.target.value = newvalue

		if( parent && parent.form ) {
			const { form } = parent
			const value = newvalue
			state.set({ ...parent, form: { [name]: { ...form[name], value } } })
		}		  
	}
}