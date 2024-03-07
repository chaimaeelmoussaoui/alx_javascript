function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    document.cookie = `firstname=${firstname}; expires=Fri, 31 Dec 9999 23:59:59 UTC; path=/`;
    document.cookie = `email=${email}; expires=Fri, 31 Dec 9999 23:59:59 UTC; path=/`;
}

function showCookies() {
    const cookies = document.getElementById('cookies');
    const firstnameCookie = getCookie('firstname');
    const emailCookie = getCookie('email');

    cookies.innerHTML = `Cookies: firstname=${firstnameCookie}, email=${emailCookie}`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}