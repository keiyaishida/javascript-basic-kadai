const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

 setTimeout(() => {

 const newtext = document.getElementById('text').textContent; 

 document.getElementById('text').textContent = 'ボタンをクリックしました';

},2000);

});