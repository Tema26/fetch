async function getResponse() {
    let response = await fetch('http://jsonplaceholder.typicode.com/comments');
    let data = await response.json();
    data = data.filter((e) => {
       return (/\.biz/igm).test(e.email)
    })
    for (let item of data) {
        const newElems = `
        <section class="comments__email_post">
        <article class="comment_id">
           id: ${item.id}
        </article> 
        <article class="comment_name">
            Name: ${item.name}
        </article>
        <article class="comment_email">
            User email: ${item.email}
        </article>   
        <article class="comment_body">
            Text: "${item.body}"
        </article>       
         `
        list.innerHTML += newElems;
        localStorage.setItem('username', 'admin')
    }

}

let btn1 = document.getElementById('btn_login');
let btn2 = document.getElementById('btn_logout');
let list = document.querySelector('.comments__email');

btn1.onclick = getResponse;
btn2.onclick = () => {
    list.innerHTML = '';
    localStorage.clear()
};
 



