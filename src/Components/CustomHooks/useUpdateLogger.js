import { useEffect } from 'react'

export default function useUpdateLogge(value) {
  useEffect(() => {
    console.log('value: ', value)
  }, [value])
}