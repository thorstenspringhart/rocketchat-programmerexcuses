class Script {
    /**
     * @params {object} request
     */
    prepare_outgoing_request({ request }) {
        return {
            url: request.url,
            headers: request.headers,
            method: 'GET'
        };
    }

    process_outgoing_response({ request, response }) {
        let excuse = '';
        pattern = '\<a href="\/" rel="nofollow".*?\>(.*?)\<'
        excuse = response.content_raw.match(pattern)[1]
            return {
                content: {
                    text: excuse
                }
            };
    }
}
