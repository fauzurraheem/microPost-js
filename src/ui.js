class UI {
  constructor(){
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput= document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forSubmit = 'and';
    this.postCancel = document.querySelector('.post-cancel');
    

  }

  showPost(posts){
    this.postCancel.style.display = 'none';

   let output = '';
    posts.forEach(function(post){
      output += `
        <div class="card mb-3">
          <div class= "card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i></a>
            <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i></a>
          </div>
        </div>
      `;
    });
    this.post.innerHTML = output;
  }
  
  showAlert(message, className){
    this.clearAlert();

    //create div
    const div = document.createElement('div');
    //add class
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const continer = document.querySelector('.postsContainer');
    //get post
    const post = document.querySelector('#posts');
    continer.insertBefore(div, post);

    //timeout
    setTimeout(()  => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert(){
   const currentAlert = document.querySelector('.alert');
   if(currentAlert){
    currentAlert.remove();
   } 
  }

  clearFields(){
    this.bodyInput.value = '';
    this.titleInput.value = ''; 
  }

  fillForm(data){
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }


  //Clear Id hidden Value
  clearIdInput(){
    this.idInput.value = '';
  }




  changeFormState(type) {
    if(type === 'edit') {
      this.postSubmit.textContent= 'update';
      this.postSubmit.className= 'post-submit btn btn-warning btn-block';

      this.postCancel.style.display = 'block';



    //   //Create Element
    //   const button= document.createElement('button');
    //   // add class name
    //  button.className = 'post-cancel btn btn-light btn-block';
    //   button.appendChild(document.createTextNode('Cancel Edit'));

    //   //get parent
    //   const cardForm = document.querySelector('.card-form');
    //   const formEnd = document.querySelector('.form-end');

    //   cardForm.insertBefore(button, formEnd);



    } else{
      this.postSubmit.textContent= 'Post it';
      this.postSubmit.className= 'post-submit btn btn-primary btn-block';
      //remove cancel button if there
      if(document.querySelector('.post-cancel')){
        document.querySelector('.post-cancel').remove();
      }
      // Clear ID from hidden field
      this.clearIdInput();
      // Clear text
      this.clearFields();

    }
  }



}


export const ui = new UI();