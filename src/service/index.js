const ServiceApi = {
  API_KEY: 'b4a2ddcffbf736c3e738a03f5fcc609c',

  getItems (page = 0) {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_KEY}&language=ru-RU&page=${page || 1}`)
  }
}

export default ServiceApi;