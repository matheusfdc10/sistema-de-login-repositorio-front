import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const createSession = async (email, password) => {
    return api.post('/sessions', { email, password})
}

export const createUser = async (name, email, password) => {
    return api.post('/user', {
        name,
        email,
        password
    })
}

export const getRepositories = async (userId, query) => {
    let url = `/user/${userId}/repositories/`

    if (query !== '') {
        url += `?q=${query}`
    }

    return api.get(url)
}

export const createRepository = async (userId, repositoryUrl) => { 
    const repositoryName = getRepositoryName(repositoryUrl)
    const url = `/user/${userId}/repositories/`
    
    return api.post(url, {
        name: repositoryName,
        url: repositoryUrl
    })
}

export const updateRepository = async (userId, id, repositoryUrl) => {
    const repositoryName = getRepositoryName(repositoryUrl)
    const url = `/user/${userId}/repositories/${id}`

    return api.put(url, {
        name: repositoryName,
        url: repositoryUrl
    })
}

export const destroyRepository = async (userId, id) => {
    const url = `/user/${userId}/repositories/${id}`
    return api.delete(url)
}

const getRepositoryName = (url) => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/

    const match = url.match(regex)
    if (match == null) return ''

    if(match[2]){
        const values = match[2].split('/')
        return `${values[1]}/${values[2]}`
    }
}