const ROOT_KEY = '@atlys';
const LS_KEY = {
    auth_token: ROOT_KEY + ':auth',
};

const checkAuthentication = () => {
    return !!fetch.authToken();

};

const set = {
    authToken: (data) => {
        localStorage.setItem(
            LS_KEY.auth_token,
            JSON.stringify({
                auth_token: data,
            })
        );
    }
};

const fetch = {
    authToken: () => {
        const data = localStorage.getItem(LS_KEY.auth_token);
        if (data) {
            try {
                const decoded = JSON.parse(data);
                return decoded.auth_token;
            } catch (err) {
                console.log(err);
            }
        }
    },
};

const destroy = {
    authToken: () => {
        localStorage.removeItem(LS_KEY.auth_token);
    },
    all: () => {
        localStorage.clear();
    },
};


export const storage = {
    set,
    fetch,
    destroy,
    checkAuthentication
};
