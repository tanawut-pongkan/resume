const isBrowser = typeof window !== 'undefined'

export function readSetting<T>(key: string, fallback: T): T {
  if (!isBrowser) return fallback
  try {
    const stored = window.localStorage.getItem(key)
    return stored ? (JSON.parse(stored) as T) : fallback
  } catch (error) {
    console.warn('Failed to read setting from storage', error)
    return fallback
  }
}

export function writeSetting<T>(key: string, value: T) {
  if (!isBrowser) return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.warn('Failed to persist setting to storage', error)
  }
}
