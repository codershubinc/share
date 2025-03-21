import Cookies from 'js-cookie';

export const getSessionFromCookie = () => {

    const token = Cookies.get('session') || ''
    const allTokens = Cookies.get('session')
    console.log('all tokens => ', allTokens);
    console.log('got session => ', token);
    return token;
}