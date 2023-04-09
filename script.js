const menu = [
	{
		id: 1,
		title: "Cappuccino",
		category: "Coffee",
		price: "3.50$",
		img: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg",
	 },

	 {
		id: 2,
		title: "Mocha Coffee",
		category: "Coffee",
		price: "4.99$",
		img: "https://tripletwocoffee.com/wp-content/uploads/Mocha-from-above.jpg",

	 },

	 {
		id: 3,
		title: "Americano",
		category: "Coffee",
		price: "2.99$",
		img: "https://cdn.shopify.com/s/files/1/0022/1393/7252/articles/20230113070552-caffe-americano-blog_1200x1200.webp?v=1673593629",

	 },

	 {
		id: 4,
		title: "Espresso",
		category: "Coffee",
		price: "2.99$",
		img: "https://www.acouplecooks.com/wp-content/uploads/2020/09/Latte-Art-066s.jpg",

	 },

	 {
		id: 13,
		title: "Marocchino",
		category: "Coffee",
		price: "4.50$",
		img: "https://www.homegrounds.co/wp-content/uploads/2022/05/Photo_CoffeeInGlass_Marocchino-1.jpg",

	 },

	 {
		id: 6,
		title: "Latte",
		category: "Coffee",
		price: "4.00$",
		img: "https://coffeeaffection.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg",

	 },

	 {
		id: 12,
		title: "Irish Coffee",
		category: "Coffee",
		price: "4.50$",
		img: "https://bakeitwithlove.com/wp-content/uploads/2020/03/Irish-Coffee-sq-1.jpg",

	 },

	 {
		id: 7,
		title: "Buttermilk Pancakes",
		category: "Breakfast",
		price: 15.99,
		img: "img/item-1.jpeg",

	 },

	 {
		id: 8,
		title: "Diner Double",
		category: "Breakfast",
		price: 15.99,
		img: "img/item-2.jpeg",

	 },

	 {
		id: 9,
		title: "Country Delight",
		category: "Breakfast",
		price: 15.99,
		img: "img/item-4.jpeg",

	 },

	 {
		id: 10,
		title: "Oreo Dream",
		category: "Shakes",
		price: 15.99,
		img: "img/item-6.jpeg",

	 },

	 {
		id: 11,
		title: "Godzilla Milkshake",
		category: "Shakes",
		price: 15.99,
		img: "img/item-3.jpeg",

	 },


];


const header = document.getElementById('header');
const timer = document.getElementById("timer");
const menuItems = document.getElementById("menu-items");
const buttons = document.querySelector(".filters").childNodes;
const darkmode = document.querySelector("#dark_theme");
const lightmode = document.querySelector(".light_mode");


darkmode.addEventListener("click",() => {
	document.body.classList.add("dark-theme");

	
	lightmode.classList.toggle("light_mode");
	darkmode.classList.toggle("dark_mode");

});

lightmode.addEventListener("click",() => {
	document.body.classList.toggle("dark-theme");

	lightmode.classList.toggle("light_mode");
	darkmode.classList.toggle("dark_mode");
	

});

buttons.forEach((button) => {

	button.addEventListener("click",(item) => {

		let temporary_menu = menu;

		if (button.innerText !== "All") {
			temporary_menu = menu.filter((menuItem) => {

			return menuItem.category === button.innerText
		});
	}
		displayMenu(temporary_menu);

	});

});

window.addEventListener("scroll",function() {
	header.classList.toggle("sticky",window.scrollY > 0);
});


const myInterval = setInterval( () => {
	const date = new Date("December 31, 2023 16:00:00").getTime();

	const currentTime = new Date().getTime();

	const time = date - currentTime;

	const days = Math.floor(time / (1000 * 60 * 60 * 24));
	const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((time % (1000 * 60)) / (1000));

	timer.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
}
	
	,1000);


const displayMenu = (menu) => {
	menuItems.innerHTML = '';
	const editedMenu = menu.map((item) => {

		return `<div class="menu-item"><img src=${item.img}><h3>${item.title}</h3><h4>${item.price}</h4></div>`
	});

	menuItems.innerHTML =  editedMenu.join('');

}

displayMenu(menu);


