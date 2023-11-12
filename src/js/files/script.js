// // Підключення функціоналу "Чертоги Фрілансера"
// import { isMobile } from "./functions.js";
// // Підключення списку активних модулів
// import { flsModules } from "./modules.js";

// // ! Имитируем базу данных для блока .blog__items на сервере
// // ! В нашем случае она находится в файле src/files/blogItems.json

// const blogItems = document.querySelector('.blog__items');
// let data;
// let startItem = 0;
// let endItem = 3;

// if (blogItems) {
// 	loadBlogItems();
// 	console.log('123')
// }

// // async function loadBlogItems() {
// // 	const response = await fetch("files/blog.json", { // по взрослому здесь указывается адрес нашего сайта
// // 		method: "GET"
// // 	});
// // 	if (response.ok) {
// // 		const responseResult = await response.json();
// // 		data = responseResult;
// // 		initBlog(data, startItem, endItem);
// // 	} else {
// // 		alert("Error");
// // 	}
// // }

// function initBlog(data, startItem, endItem) {
// 	const dataPart = data.items.slice(startItem, endItem);
// 	// console.log(dataPart);
// 	dataPart.forEach(item => {
// 		buildBlogItem(item);
// 	});
// 	viewMore();
// }

// function buildBlogItem(item) {
// 	let blogItemTemplate = ``;

// 	blogItemTemplate += `<article data-id="${item.id}" class="blog__item item-blog">`;

// 	item.image ? blogItemTemplate +=
// 		`<a href="${item.url}" class="item-blog__image-ibg">
//          <img src="${item.image}" alt="Image">
//       </a>`
// 		: null;

// 	blogItemTemplate +=
// 		`<h4 class="item-blog__title">
//       <a href="${item.url}" class="item-blog__link-title">${item.title}</a>
//    </h4>`;

// 	item.text ? blogItemTemplate +=
// 		`<div class="item-blog__text text">
//       ${item.text}
//    </div>`
// 		: null;

// 	// if (item.tags) {
// 	// 	blogItemTemplate += `<div class="item-blog__tags">`;

// 	// 	for (const tag in item.tags) {
// 	// 		blogItemTemplate += `<a href="${item.tags[tag]}" class="item-blog__tag">${tag}</a>`;
// 	// 	}
// 	// 	blogItemTemplate += `</div>`;
// 	// }

// 	blogItemTemplate += `</article>`;

// 	blogItems.insertAdjacentHTML('beforeend', blogItemTemplate);
// }

// document.addEventListener('click', documentActions);

// function viewMore() {
// 	const dataItemLenght = data.items.length;
// 	const currentItems = document.querySelectorAll('.item-blog').length;
// 	const viewMore = document.querySelector('.blog__view-more');
// 	currentItems < dataItemLenght ? viewMore.hidden = false : viewMore.hidden = true;
// }

// function documentActions(e) {
// 	console.log('123')
// 	const targetElement = e.target;
// 	if (targetElement.closest('.blog__view-more')) {

// 		startItem = document.querySelectorAll('.item-blog').length;
// 		endItem = startItem + 2;

// 		initBlog(data, startItem, endItem)
// 		e.preventDefault();
// 	}
// }

// //========================================================================================================================================================
// // Add class when page loaded
// window.addEventListener('load', () => {
// 	document.documentElement.classList.add('loaded');
// });