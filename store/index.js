
export default function store ( initialState, actions ) {
    
    let topics  = []
    let updates = []
    let state   = JSON.parse(JSON.stringify(initialState))

    const api = {

        get(fn){
            return new Promise((resolve) => {
                try {
                    const data = fn(state) 
                    if( data )
                        resolve([ data, Object.assign({}, state ) ])
                }catch(err) {}
                const handler = (state) => {
                    try{ 
                        const data = fn(state) 
                        if( data ) {
                            resolve([ data, Object.assign({}, state ) ])
                            api.unsubscribe(handler)
                        }                            
                    }
                    catch(e) {}
                }
                api.subscribe(handler)
            }) 
        },

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