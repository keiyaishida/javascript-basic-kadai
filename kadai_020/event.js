const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

 const newtext = document.getElementById('text').textContent; 

 document.getElementById('text').textContent = 'ボタンをクリックしました';
});