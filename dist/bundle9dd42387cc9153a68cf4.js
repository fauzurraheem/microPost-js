/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/http.js":
/*!*********************!*\
  !*** ./src/http.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "http": () => (/* binding */ http)
/* harmony export */ });
// EasyHTTP library
// library for making http requests

// @version 3.0.0
// @author fauzurraheem
// @license who cares



class EasyHTTP{
    //Get request
    async get(url){
       const response = await fetch(url);
       const resData = await response.json();
       return resData;
    }

    //Post request 
     async post (url, data) {
        const response = await fetch( url, {
            method:'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)

        })
        const resData = await response.json();
        return resData;
    }


    //PUT REQUEST
    async put (url, data) {
        const response = await fetch( url, {
            method:'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)

        })
        const resData = await response.json();
        return resData;
    }

    //DELETE REQUEST
     async delete (url) {
        const response = await fetch( url, {
            method:'DELETE',
            headers: {
                'Content-type' : 'application/json'
            }

        })
        const resData = await response.json();
        return resData;
    }
}

const http = new EasyHTTP();

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
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


const ui = new UI();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ "./src/http.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



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
  _http__WEBPACK_IMPORTED_MODULE_0__.http.get('http://localhost:3000/posts')
    .then(data => _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showPost(data))
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
    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showAlert('Please fill in all fields', 'alert alert-danger');
  }else{

    //check if
    if(id === ''){
      
      //CREate post
      _http__WEBPACK_IMPORTED_MODULE_0__.http.post('http://localhost:3000/posts', data)
      .then(data => {
        _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showAlert('Post added', 'alert alert-success');
        _ui__WEBPACK_IMPORTED_MODULE_1__.ui.clearFields();
        getPosts();
      })
      .catch(err => console.log(err));
      
    } else{
      //update
      _http__WEBPACK_IMPORTED_MODULE_0__.http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
        _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showAlert('post updated', 'alert alert-success');
        _ui__WEBPACK_IMPORTED_MODULE_1__.ui.changeFormState('add');
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
      _http__WEBPACK_IMPORTED_MODULE_0__.http["delete"](`http://localhost:3000/posts/${id}`)
        .then(data => {
          _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showAlert('Post Removed', 'alert alert-success');
          _ui__WEBPACK_IMPORTED_MODULE_1__.ui.changeFormState('add');
          _ui__WEBPACK_IMPORTED_MODULE_1__.ui.clearFields();
          _ui__WEBPACK_IMPORTED_MODULE_1__.ui.clearIdInput();
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
    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.fillForm(data);

  }

  e.preventDefault();
}

// cancel Edit State
function cancelEdit(e){
  if(e.target.classList.contains('post-cancel')){
    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.changeFormState('add');
  }
  e.preventDefault();
}

})();

/******/ })()
;
//# sourceMappingURL=bundle9dd42387cc9153a68cf4.js.map