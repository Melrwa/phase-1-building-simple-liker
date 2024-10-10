// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
const modal = document.getElementById('modal');
modal.classList.add('hidden');

// Select all heart elements
const hearts = document.querySelectorAll('.like-glyph');

// Iterate over each heart and add a click event listener
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (heart.innerText === EMPTY_HEART) {
          // Change the heart to full heart and add .activated-heart class
          heart.innerText = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          // Change back to empty heart and remove .activated-heart class
          heart.innerText = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch((error) => {
        // Show the error modal by removing the .hidden class
        modal.classList.remove('hidden');
        document.getElementById('modal-message').innerText = error;

        // Hide the modal after 3 seconds
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  });
});






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
