export const debounceFn = (fn, delay: number) => {
  let timeoutId: any
  return function(...args: any) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
