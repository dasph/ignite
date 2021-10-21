import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { request } from './utils'

export const App = () => {
  const [session, setSession] = useState<any | null | undefined>(null)

  useEffect(() => void (async () => {
    // request<void>('account').then(() => setSession(void 0)).catch(() => setSession(void 0))
  })(), [])

  return (
    <BrowserRouter>
    </BrowserRouter>
  )
}
