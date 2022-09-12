import axios from 'axios';
// const LOGIN_USER_KEY = 'LOGIN_USER_KEY';

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
baseURL = 'https://restro-cafe--backend.herokuapp.com/';
// }

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
// api.interceptors.request.use(
//     config => {
//         if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
//             config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
//         }

//         return config;
//     },
//     err => {
//         console.error(err);
//     }
// );

export default class API {
    getPosts = async params => {
        try {
            const response = await api.get('/posts/', { params });
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    addPost = async postBody => {
        const formData = new FormData();

        for (const key in postBody) {
            formData.append(key, postBody[key]);
        }

        try {
            const response = await api.post('/posts/add/', formData);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    deletePost = async id => {
        try {
            return await api.delete(`/posts/delete/${id}/`);
        } catch (error) {
            throw new Error(error);
        }
    };

    // ////////////////////////////////////
    // Item
    // ////////////////////////////////////

    getItems = async category => {
        let url = '/item';
        if (category) {
            url += '?category=' + category;
        }
        
        const item = await api
            .get(url)
            .then(response => {
                return response.data;
            })
            // console.log(respone.data)
            .catch(error => {
                throw new Error(error);
            });
        return item;
    };
    ////////////////////////////////
    // Review
    ////////////////////////////////
    getReviews = async item_id => {
        let url = '/reviews?item_id=' + item_id;
        const reviews = await api
            .get(url)
            .then(response => {
                // console.log('response', response);
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return reviews;
    };
    writeReview = async (item_id, name, body, like_count) => {
        const formData = new FormData();
        formData.append('item', item_id);
        formData.append('name', name);
        formData.append('body', body);
        formData.append('like_count', like_count);
        const savedReview = await api
            .post('/reviews/add/', formData)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedReview;
    };
}
