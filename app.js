{
  let Btn = document.querySelector('#btn');
  let Card = document.querySelector('.card');
  let Thank = document.querySelector('.thanks');
  let Result = document.querySelector('#result');
  let Rate = document.querySelectorAll('#rating');


  Btn.addEventListener("click", function() {
    Card.style.display = "none",
    Thank.style.display = "flex"
  });

  Rating = Rate.forEach(x => {
    x.addEventListener("click", function() {
      x.style.backgroundColor = "hsl(25, 97%, 53%)";
      x = x.innerHTML
      Result.innerHTML = `You selected ${x} out of 5`
    });
  });

  




  

}