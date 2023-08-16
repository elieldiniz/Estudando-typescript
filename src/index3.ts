interface GithubUserResponse {
    id: number
    login: string
    name: string
    bio:string
    public_repo: number
    repos_url: string
    message?: "not found"
}

interface GithubRepoResponse {
    name: string
    description: string
    fork: boolean
    stargazers_count: number
}

const users: GithubUserResponse[] = []

async function fethcUser(username:string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user: GithubUserResponse = await response.json()

    if(user.message){
        console.log('Usuario nao encontrado')
    }else{
        users.push(user)

    }
}
