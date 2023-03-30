const url_arr = document.URL.split('/');
const route = url_arr[url_arr.length - 1];
const routeName = route.split('.');

document.getElementById(routeName[0])?.classList.add('active-menu-item');
