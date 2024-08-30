class apiUrl {
    baseUrl()
    {
        var baseUrl = 'https://localhost:7056/api/'
        return baseUrl;
    }

    buscaArtigosUrl()
    {
        var getUrl = this.baseUrl.baseUrl + '/Artigo/'
        return getUrl;
    }

    buscaArtigoIdUrl()
    {
        var getUrl = this.baseUrl.baseUrl + '/Artigo/' + 
    }
}