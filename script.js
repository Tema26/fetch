async function getResponse() {
    let response = await fetch('http://jsonplaceholder.typicode.com/comments');
    let data = await response.json();
    data = data.filter((e) => {
       return (/\.biz/igm).test(e.email)
    })
    let list = document.querySelector('.comments__email');
    for (key in data) {
        const newElems = `
        <li class="comments__email_post">
        <div class="comment_id">
           id: ${data[key].id}
        </div> 
        <div class="comment_name">
            Name: ${data[key].name}
        </div>
        <div class="comment_email">
            User email: ${data[key].email}
        </div>   
        <div class="comment_body">
            Text: "${data[key].body}"
        </div>       
         `
        list.innerHTML += newElems;
    }

}

getResponse();

