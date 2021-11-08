

export default function debounce( func, timeout = 300 ) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout( _ => func.apply(null, args), timeout )
    }
}