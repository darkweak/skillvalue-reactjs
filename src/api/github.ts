import axios, { AxiosPromise } from 'axios';

export interface IGithubUsers {
    total_count: number,
    incomplete_results: boolean,
    items: IGithubUser[]
}

export interface IGithubUser {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    received_events_url: string,
    type: string,
    score: number
}

export class GithubAPI {
    public getUsers(search: string): AxiosPromise {
        return axios.get(`https://api.github.com/search/users?q=${ search }`)
    }
}
