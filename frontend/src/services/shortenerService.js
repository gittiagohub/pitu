import baseAPI from "./api";


class ShortenerService {
    constructor() {
        this.api = baseAPI('http://localhost:3001/')
    }
    async getLink(code) {
        const result = await this.api.get('http://localhost:3001/links/' + code)
        return result.data
    }

    async getStats(code) {
        const result = await this.api.get('http://localhost:3001/links/' + code + '/stats')
        return result.data
    }

    async generate(model) {
        // const result = await this.api.post('links',model)
        const result = await this.api.post('http://localhost:3001/links',model)
       
        return result.data
    }
}

export default ShortenerService;