import { http } from "./http";
import {ui}  from "./ui";

//get posts on dom load
document.addEventListener("DOMContentLoaded", getPosts);

//add post
document.querySelector('.post-submit').addEventListener("click", submitPost);

//listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

//listen for Edit
document.querySelector('#posts').addEventListener('click', enableEditState);

//listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit)

function getPosts(){
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPost(data))
    .catch(err => console.log(err));
}

function submitPost(){
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  const data = {
    title,
    body
  }

  
  if (title === '' || body === ''){
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  }else{

    //check if
    if(id === ''){
      
      //CREate post
      http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post added', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      .catch(err => console.log(err));
      
    } else{
      //update
      http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
        ui.showAlert('post updated', 'alert alert-success');
        ui.changeFormState('add');
        getPosts();
      })
      .catch(err => console.log(err));
       
    }
   
  }
}

//Delete post
function deletePost(e){
  if(e.target.parentElement.classList.contains('delete')){
    const id = e.target.parentElement.dataset.id;
    if(confirm('Are you sure')){
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Removed', 'alert alert-success');
          ui.changeFormState('add');
          ui.clearFields();
          ui.clearIdInput();
          getPosts();
        })
        .catch(err => console.log(err))
    }
  }
  e.preventDefault();
}

//Edit state
function enableEditState(e){
  if(e.target.parentElement.classList.contains('edit')){
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    }

    //Fill the form with current post
    ui.fillForm(data);

  }

  e.preventDefault();
}

// cancel Edit State
function cancelEdit(e){
  if(e.target.classList.contains('post-cancel')){
    ui.changeFormState('add');
  }
  e.preventDefault();
}
