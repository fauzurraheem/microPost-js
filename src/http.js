// EasyHTTP library
// library for making http requests

// @version 3.0.0
// @author fauzurraheem
// @license who cares



class EasyHTTP{
    //Get request
    async get(url){
       const response = await fetch(url);
       const resData = await response.json();
       return resData;
    }

    //Post request 
     async post (url, data) {
        const response = await fetch( url, {
            method:'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)

        })
        const resData = await response.json();
        return resData;
    }


    //PUT REQUEST
    async put (url, data) {
        const response = await fetch( url, {
            method:'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)

        })
        const resData = await response.json();
        return resData;
    }

    //DELETE REQUEST
     async delete (url) {
        const response = await fetch( url, {
            method:'DELETE',
            headers: {
                'Content-type' : 'application/json'
            }

        })
        const resData = await response.json();
        return resData;
    }
}

export const http = new EasyHTTP();