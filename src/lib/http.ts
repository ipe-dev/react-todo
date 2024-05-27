export const get = async<T> (url: string, options: RequestInit={}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
       throw new Error("get処理失敗") 
    }
    const data:T = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}