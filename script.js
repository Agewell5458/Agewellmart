const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click', () => {
      nav.classList.add('active');  
    })
}

const close = document.getElementById('close');
if(close){
    close.addEventListener('click', () => {
      nav.classList.remove('active');  
    })
}
document.querySelectorAll(".add-to-cart-btn").forEach(button => {
  button.addEventListener("click", function() {
      let message = document.getElementById("cartMessage");
      message.classList.remove("hidden");

      // Hide the message after 3 seconds
      setTimeout(() => {
          message.classList.add("hidden");
      }, 3000);
  });
});
const audio = new Audio();
audio.src="./medicine.mp3";