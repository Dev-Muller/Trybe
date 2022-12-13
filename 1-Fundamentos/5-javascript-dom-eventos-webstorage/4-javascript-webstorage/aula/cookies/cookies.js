document.cookie = 'email=isabella@email.com';

document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';

const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com

document.cookie = 'email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'