
export default function store ( initialState, actions ) {
    
    let topics  = []
    let updates = []
    let state   = JSON.parse(JSON.stringify(initialState))

    const api = {

        getState(){
            return state
        },

        subscribe( fn ) {
            if( fn.call ) {
                topics.push(fn)
            }
        },

        unsubscribe(fn) {
            topics = topics.filter( item => item != fn )
        },

        dispatch( action, payload ) {
            updates.push({ action, payload })
            return new Promise((resolve) => {
                requestAnimationFrame( _ => update({ action, payload, resolve }) )
            }) 
        },

        when( act ) {
            return new Promise((resolve) => {
                const handler = (state, { action }) => {
                    if( action == act ) {
                        resolve(Object.assign({}, state ))
                        api.unsubscribe(handler)
                    }                    
                }
                api.subscribe(handler)
            })
        }
    }

    const update = ({ action, payload, resolve }) => {
        updates.forEach( ({ action, payload }) => {
            Object.assign( state, actions[action].call(null, state, payload, api) )
        })
        if ( updates.length ) {
            topics.forEach( topic => { topic(state, { action, payload }) })
            updates = []
        } 
        resolve(state)
    }

    return api
}