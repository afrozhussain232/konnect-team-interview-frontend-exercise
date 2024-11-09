export const debounceFn = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | undefined

  return function(this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delay)
  }
}

// Relative Date Format, e.g. 1 minute ago, 1 hour ago, 1 day ago, 1 week ago, 1 month ago, 1 year ago
export const relativeTime = (time: string) => {
  const diff = new Date().getTime() - new Date(time).getTime()
  if (diff < 1000) return 'Just now'
  if (diff < 60000) return `${Math.floor(diff / 1000)} seconds ago`
  if (diff < 3600000) return `${Math.floor(diff / 60000)} minutes ago`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} hours ago`
  if (diff < 604800000) return `${Math.floor(diff / 86400000)} days ago`
  if (diff < 2592000000) return `${Math.floor(diff / 604800000)} weeks ago`
  if (diff < 31536000000) return `${Math.floor(diff / 2592000000)} months ago`

  return `${Math.floor(diff / 86400000)} days ago`
}
