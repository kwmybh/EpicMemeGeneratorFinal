let img = document.getElementsByTagName('img');
let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
      e.preventDefault();
      let meme = document.createElement("div");
      let topText = document.createElement("div");
      let bottomText = document.createElement("div");
      let img = document.createElement("img");
      
      let btn = document.createElement("button");
      btn.setAttribute("type","button");
      
      img.src = document.getElementById('picurl').value;
      topText.classList.add("top-text");
      topText.innerHTML = document.getElementById('top-text').value;
      
      bottomText.classList.add("bottom-text");
      bottomText.innerHTML = document.getElementById('bottom-text').value;
      
      btn.innerHTML = "REMOVE";
      
      meme.classList.add("meme");
      meme.appendChild(topText);
      meme.appendChild(bottomText);
      meme.appendChild(img);
      meme.appendChild(btn);
      
      let memeLocation = document.getElementById('location');
      memeLocation.appendChild(meme);

      document.getElementById('picurl').value = "";
      document.getElementById('top-text').value = "";
      document.getElementById('bottom-text').value = "";

      btn.addEventListener('click', function(e) {
          meme.remove();
      })
});