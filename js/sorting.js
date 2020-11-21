const priceBtn = document.querySelector(".price");
const arrowPriceImg = document.querySelector(".price img");

const ageBtn = document.querySelector(".age");
const arrowAgeImg = document.querySelector(".age img");

let togglePrice = false;

let toggleAge = false;

priceBtn.addEventListener("click", sortByPrice);
ageBtn.addEventListener("click", sortByAge);

function sortByPrice() {
   const cardBlocks = document.querySelectorAll(".cardBlock");
   const parentBlock = document.querySelector(".main__cardBlocks");

   arrowPriceImg.classList.toggle("active");

   const sortElements = new Object();

   cardBlocks.forEach((cardBlock, index) => {
      const cardBlockValue = cardBlock
         .querySelector(".cardBlock__price")
         .textContent.replace("руб.", "")
         .replace(/\s+/g, "");

      sortElements[cardBlockValue] = { element: cardBlock, index: index };
   });

   let keys = Object.keys(sortElements);

   const compareNumericDesc = (a, b) => {
      a = parseInt(a);
      b = parseInt(b);

      if (a < b) return 1;
      if (a > b) return -1;
   };

   const compareNumericAsc = (a, b) => {
      a = parseInt(a);
      b = parseInt(b);

      if (a > b) return 1;
      if (a < b) return -1;
   };

   if (togglePrice === false) {
      keys.sort(compareNumericDesc);
      togglePrice = !togglePrice;
   } else {
      keys.sort(compareNumericAsc);
      togglePrice = !togglePrice;
   }

   keys.map((key) => {
      parentBlock.insertAdjacentElement("beforeend", sortElements[key]["element"]);
   });
}

function sortByAge() {
   const cardBlocks = document.querySelectorAll(".cardBlock");
   const parentBlock = document.querySelector(".main__cardBlocks");

   arrowAgeImg.classList.toggle("active");

   const sortElements = new Object();

   cardBlocks.forEach((cardBlock, index) => {
      const cardBlockValue = cardBlock
         .querySelector(".cardBlock__column-age")
         .textContent.replace(/\s+/g, "");

      sortElements[cardBlockValue] = { element: cardBlock, index: index };
   });

   let keys = Object.keys(sortElements);

   const compareNumericDesc = (a, b) => {
      a = parseInt(a);
      b = parseInt(b);

      if (a < b) return 1;
      if (a > b) return -1;
   };

   const compareNumericAsc = (a, b) => {
      a = parseInt(a);
      b = parseInt(b);

      if (a > b) return 1;
      if (a < b) return -1;
   };

   if (toggleAge === false) {
      keys.sort(compareNumericDesc);
      toggleAge = !toggleAge;
   } else {
      keys.sort(compareNumericAsc);
      toggleAge = !toggleAge;
   }

   keys.map((key) => {
      parentBlock.insertAdjacentElement("beforeend", sortElements[key]["element"]);
   });
}
