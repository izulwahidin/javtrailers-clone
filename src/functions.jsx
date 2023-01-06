
export const siteTitle = 'JAV.RIP';
export const BASEAPI = 'https://w-api-mu.vercel.app/api/jt';
export const currentURL = new URL(window.location);

export const image2cdn = (url) => {
    if(!url) return;
    return `https://i2.wp.com/` + url.replace(/^http(?:s|):\/\//,'');
}

export const releaseDate = (date) => {
    if(!date || date.match(/[a-z]/)) return null;
    return date.split('T')[0];
}

export const getParams = (val) => {
    const url = new URL(window.location);
    return url.searchParams.get(val) ?? 1;
}

export const getEndpoint = () => {
    const url = new URL(window.location);
    return url.href.replace(url.origin,'');
}

export const getNextPrevPage = (current,max) => {
    const p = currentURL.pathname === '/' ? '/videos' : currentURL.pathname;

    if(currentURL.pathname.match(/^(?:\/|\/videos(?:|\/))$/)){

        return {
            prev: current<=2 ? "/" : p+'?page='+(current-1),
            next: current>=max ? "#" : p+'?page='+(current+1),
        }
    }

    return {
        prev: current<=2 ? p : p+'?page='+(current-1),
        next: current>=max ? "#" : p+'?page='+(current+1),
    }
}

export const slug2string = (slug) => {
    let words = slug.split('-');
  
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
}

const funcs = {
    siteTitle,
    BASEAPI,
    currentURL,
    image2cdn,
    releaseDate,
    getParams,
    getEndpoint,
    getNextPrevPage,
    slug2string,
}
export default funcs