export class ApiError extends Error {
  constructor (public code: number, message?: string) { super(message) }
}

export async function request <T> (method: string, init: RequestInit = {}) {
  const { headers, ...rest } = init

  const opts: RequestInit = {
    headers: {
      ...typeof init.body === 'string' && { 'Content-Type': 'application/json' },
      ...headers
    },
    ...rest
  }

  const res = await fetch(`/api/${method}`, opts)
  const { code, error, data } = await res.json()

  if (error) throw new ApiError(code, error)

  return data as T
}
