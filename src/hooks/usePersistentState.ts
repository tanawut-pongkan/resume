import { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { readSetting, writeSetting } from '@/lib/storage'

export function usePersistentState<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => readSetting(key, defaultValue))

  useEffect(() => {
    writeSetting(key, value)
  }, [key, value])

  return [value, setValue]
}
