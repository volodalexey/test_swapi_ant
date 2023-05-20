export function extractItemId (url: string): string {
  const matched = url.match(/\/(\d+)\/$/)
  if (Array.isArray(matched) && matched.length > 1) {
    return matched[1]
  }
  return url
}
