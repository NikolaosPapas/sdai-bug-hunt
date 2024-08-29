
// added "document" to ".GetElementById"
document.getElementById('funFactButton').addEventListener('click', function() {
console.log ("wassup")
  let funFact = document.getElementById('funFact');
  if (funFact.style.display === 'none') {
      funFact.style.display = 'block';
  } else {
      funFact.style.display = 'none';
  }
})
