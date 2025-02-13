const backenddomain = "http://localhost:8080"

const summaryapi = {
    signup: {
        url: `${backenddomain}/api/signup`,
        method: "post"
    },

    signin: {

        url: `${backenddomain}/api/signin`,
        method: "post"
    },

    current_user: {

        url: `${backenddomain}/api/user-details`,
        method: "get"
    },

    logout: {

        url: `${backenddomain}/api/userlogout`,
        method: "get"
    },

    alluser: {
        url: `${backenddomain}/api/all-users`,
        method: "get"
    },

    updateUser: {

        url: `${backenddomain}/api/update-user`,
        method: "post"

    },

    uploadProduct: {

        url: `${backenddomain}/api/upload-product`,
        method: 'post'

    },
    allProduct: {

        url: `${backenddomain}/api/get-product`,
        method: 'get'

    },
    updateProduct: {


        url: `${backenddomain}/api/update-product`,
        method: 'post'

    },
    categoryProduct: {

        url: `${backenddomain}/api/get-categoryporduct`,
        method: 'get'

    },
    categorywiseproduct: {

        url: `${backenddomain}/api/category-product`,
        method: 'post'

    },
    productDetails: {
        url: `${backenddomain}/api/product-details`,
        method: 'post'
    }
}
export default summaryapi