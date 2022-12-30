import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api-login-repository.onrender.com',
})

export const createUser = async (name, email, password, confirmPassword) => {
    return api.post('/user', {
        name,
        email,
        password,
        confirmPassword
    })
}

export const createSession = async (email, password) => {
    return api.post('/sessions', { email, password })
}

export const getUser = async () => {
    authToken()
    const url = `/user`

    return api.get(url)
}

export const confirmPassword = async (password) => {
    authToken()
    const url =  `/user/checkPassword`

    return api.post(url, {
        password
    })
}

export const newPassword = async (password, confirmPassword, tokenPassword) => {
    authToken()
    const url =  `/user/updatePassword/${tokenPassword}`

    return api.put(url, {
        password,
        confirmPassword
    })
}

export const createRepository = async (repositoryUrl) => {
    authToken()
    const repositoryName = getRepositoryName(repositoryUrl)
    const url = `/user/repositories/`
    
    return api.post(url, {
        name: repositoryName,
        url: repositoryUrl
    })
}

export const getRepositories = async (query) => {
    authToken()
    let url = `/user/repositories/`
    
    if (query !== '') {
        url += `?q=${query}`
    }
    
    return api.get(url)
}

export const updateRepository = async (id, repositoryUrl) => {
    authToken()
    const repositoryName = getRepositoryName(repositoryUrl)
    const url = `/user/repositories/${id}`

    return api.put(url, {
        name: repositoryName,
        url: repositoryUrl
    })
}

export const destroyRepository = async (id) => {
    authToken()
    const url = `/user/repositories/${id}`

    return api.delete(url)
}

const getRepositoryName = (url) => {
    // eslint-disable-next-line
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/

    const match = url.match(regex)
    if (match == null) return null

    if(match[2]){
        const values = match[2].split('/')
        return `${values[1]}/${values[2]}`
    }
}

const authToken = () => {
    const token = localStorage.getItem('token')
    api.defaults.headers.Authorization = `Bearer ${token}`
}