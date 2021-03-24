// export const HOST = 'http://localhost:8080/';
// export const HOST = 'https://online-quiz-webservice.herokuapp.com/';

const resolveHost = () => {
    let host;
    if (window.location.hostname === 'localhost') {
        host = 'http://localhost:8080/';
    } else {
        host = 'https://online-quiz-webservice.herokuapp.com/'
    }
    return host
};

export const HOST = resolveHost();

