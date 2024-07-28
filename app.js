const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


//dinamik buton oluşturma
document.addEventListener("DOMContentLoaded",function(){
const buttonlar = document.querySelector(".btn-container");
buttonTexts=["all","Japan","Korea","China"]
buttonTexts.forEach((text,index)=>{
const button=document.createElement("button");
button.textContent=text;
button.classList.add("btn","btn-outline-dark","btn-item");
button.id=`${text}`
buttonlar.appendChild(button);
})
})


 document.addEventListener("DOMContentLoaded", function () {
     const divelements = document.querySelector(".section-center");
     menu.forEach((item, index) => {
     const divelement = document.createElement("div");
     divelement.classList.add("menu-items", "col-lg-6", "col-sm-12");
     divelement.id = `item-${index}`;

     divelement.innerHTML = `
       <img src="${item.img}" alt="${item.title}" class="photo">
       <div class="menu-info">
         <div class="menu-title">
           <h4>${item.title}</h4>
           <h4 class="price">${item.price}</h4>
        </div>
         <div class="menu-text">
           ${item.desc}
         </div>
       </div>
     `;
    
//     divelements.append(divelement);
//   });
 });


//tümü
document.addEventListener("DOMContentLoaded", function () {
  const allMenus = document.querySelector("#all");

  allMenus.addEventListener("click", function() {
  const divelements = document.querySelector(".section-center");

  // Clear previous menu items
  divelements.innerHTML = '';

  menu.forEach((item, index) => {
  
      const divelement = document.createElement("div");
      divelement.classList.add("menu-items", "col-lg-6", "col-sm-12");
      divelement.id = `item-${index}`;

      divelement.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
      `;
      
      divelements.append(divelement);
      console.log(item.id);
    
  });
});

});


//korean
document.addEventListener("DOMContentLoaded", function () {
  const koreanMenus = document.querySelector("#Korea");

koreanMenus.addEventListener("click", function() {
  const divelements = document.querySelector(".section-center");

  // Clear previous menu items
  divelements.innerHTML = '';

  menu.forEach((item, index) => {
    if(item.category === "Korea") {
      const divelement = document.createElement("div");
      divelement.classList.add("menu-items", "col-lg-6", "col-sm-12");
      divelement.id = `item-${index}`;

      divelement.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
      `;
      
      divelements.append(divelement);
      console.log(item.id);
    }
  });
});

});

//Japan

document.addEventListener("DOMContentLoaded", function () {
  const JapanMenus = document.querySelector("#Japan");

  JapanMenus.addEventListener("click", function() {
  const divelements = document.querySelector(".section-center");

  // Clear previous menu items
  divelements.innerHTML = '';

  menu.forEach((item, index) => {
    if(item.category === "Japan") {
      const divelement = document.createElement("div");
      divelement.classList.add("menu-items", "col-lg-6", "col-sm-12");
      divelement.id = `item-${index}`;

      divelement.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
      `;
      
      divelements.append(divelement);
      console.log(item.id);
    }
  });
});

});

//china


document.addEventListener("DOMContentLoaded", function () {
  const chinaMenus = document.querySelector("#China");

  chinaMenus.addEventListener("click", function() {
  const divelements = document.querySelector(".section-center");

  // Clear previous menu items
  divelements.innerHTML = '';

  menu.forEach((item, index) => {
    if(item.category === "China") {
      const divelement = document.createElement("div");
      divelement.classList.add("menu-items", "col-lg-6", "col-sm-12");
      divelement.id = `item-${index}`;

      divelement.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
      `;
      
      divelements.append(divelement);
      console.log(item.id);
    }
  });
});

});



