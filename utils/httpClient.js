import axios from "axios"

const API = "https://team5.com.ar/api/v1"
// const API = "http://localhost:3000/api/v1"

const localCookie = (userId, username, role) => {
  localStorage.setItem('userId', userId)
  localStorage.setItem('username', username)
  localStorage.setItem('role', role)
}

const deleteCookies = () => {
  localStorage.removeItem('userId')
  localStorage.removeItem('username')
  localStorage.removeItem('role')
}


export const get = async (url, param = '') => {
  let finalUrl = `${API}${url}`
  if (param !== '') {
    finalUrl = `${API}${url}/?${param}`
  }
  const response = await fetch(finalUrl,{
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
      },
  })
  const data = await response.json()
  return data
}

export const login = async (username, password) => {
  try {
    const axiosInstance = axios.create({
      withCredentials: true
    })
    const response = await axiosInstance.post(`${API}/users/login`, {
      username,
      password
    }, { headers: {
        'Content-Type': 'application/json'
      }}
    )
    if (response.data.status === "success") {
      // Grabo los cookies información del usuario
      const role = response.data.data.user.role
      const userId = response.data.data.user.id

      localCookie(userId, username, role)
    } else {
      console.log(response.data)
    }
    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${API}/users/logout`, {}, { headers: {
        'Content-Type': 'application/json'
      }}
    )
    if (response.data.status === "success") {
      deleteCookies()
      window.location.href = "/login"
    } else {
      console.log(response.data)
    }

    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
};

export const signup = async (username, password, fullName=null, address=null, successUrl=null) => {
  try {
    const axiosInstance = axios.create({
      withCredentials: true
    })
    const response = await axiosInstance.post(`${API}/users/signup`, {
      username,
      password,
      fullName,
      address
    }, { headers: {
        'Content-Type': 'application/json'
      }}
    )
    if (response.data.status === "success") {
      // Grabo los cookies información del usuario
      const role = response.data.data.user.role || "user"
      const userId = response.data.data.user.id

      localCookie(userId, username, role)

      if (successUrl) {
        window.location.href = successUrl
      }
    } else {
      console.log(response.data)
    }
    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
};