export const required = (value) => {
  if (!value?.trim()) return 'Required'
  if (value.trim().length < 5) return 'Must be at least 5 characters'
  return undefined
}