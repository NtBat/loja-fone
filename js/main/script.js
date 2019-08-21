{
  const $heart = document.querySelector(".-heart");

  $heart.addEventListener("click", handleClick);

  function handleClick() {
    $heart.classList.toggle("-active");
  }
}

{
  const $cart = document.querySelector(".button-store.-second");
  const $qtdCart = document.querySelector(".qtd-cart");
  let $valueCart = 10;

  $cart.addEventListener("click", handleCart);

  function handleCart() {
    $valueCart++;
    $qtdCart.textContent = `(${$valueCart})`;
  }
}

{
  const $stars = document.querySelectorAll(".star-list");

  $stars.forEach(function ($star, key) {
    $star.addEventListener("click", handleStar);
  });

  function handleStar() {
    this.classList.toggle("-active");
  }
}