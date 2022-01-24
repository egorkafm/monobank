
export const getData = async (URL) => {
  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
    })

    return response.json()
  } catch (error) {
    return error
  }
}