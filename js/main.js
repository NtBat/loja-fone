{const t=document.querySelector(".-heart");function handleClick(){t.classList.toggle("-active")}t.addEventListener("click",handleClick)}{const t=document.querySelector(".button-store.-second"),e=document.querySelector(".qtd-cart");let n=10;function handleCart(){n++,e.textContent=`(${n})`}t.addEventListener("click",handleCart)}{function handleStar(){this.classList.toggle("-active")}document.querySelectorAll(".star-list").forEach(function(t,e){t.addEventListener("click",handleStar)})}