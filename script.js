const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//       alert('Click');
// };

// btn.onclick = function() {
//    alert('Second click');
// };

// let i = 0;
const deleteElement = (e) => {
   console.log(e.target); 
   console.log(e.type);  

};

btns.forEach(btn => {
      btn.addEventListener('click', deleteElement, {once: true});
});


const link = document.querySelector('a');

link.addEventListener('click', function(event) {
      event.preventDefault();

      console.log(event.target);
});


