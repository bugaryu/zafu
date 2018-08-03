// import Vue from 'vue';
// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);
// import { Carousel, Slide } from 'vue-carousel';

var pagenate = new Vue({
	el: '#pagenate',
	data: {
		current: 0,
		images: [ "./images/no1.png",
				  "./images/no2.png",
				  "./images/no3.png"
				],
		count: 0,
		timer: null
	},
	created: function () {
		this.timer = setTimeout(this.nextPage, 5000);
		this.count = this.images.length
	},
	methods: {
		change: function (event) {
			// console.log(`this id: ${this.current}, target id: ${event.target.value}`);
			this.current = event.target.value;
		},
		nextPage: function () {
			this.current = (this.current + 1) % this.count;
			//console.log(`go to next Page. page id: ${this.current}`);
		},
	},
	watch: {
		current: function () {
			clearTimeout(this.timer);
			this.timer = setTimeout(this.nextPage, 5000);
		}
	}
});

let item1 = { 
	image: "./images/zf_1.png",
	date: "2018.5.25",
	category: "お知らせイベント案内",
	title: "禅ボディワーク開催のご案内",
	schedule: "6 月 17 日(土)14:30~16:30",
	text: "この文章はzafuホームページのためのダミーテキストです。ここにはzafuや禅、マインドフルネスについての文章が入ります。この文章はzafuホームページのためのダミーテキストです。ここにはzafuや禅、マインドフルネ"
};
let item2 = {
	image: "./images/ssd_1.png",
	date: "2018.5.25",
	category: "お知らせイベント案内",
	title: "禅ボディワーク開催のご案内",
	schedule: "6 月 17 日(土)14:30~16:30",
	text: "この文章はzafuホームページのためのダミーテキストです。ここにはzafuや禅、マインドフルネスについての文章が入ります。この文章はzafuホームページのためのダミーテキストです。ここにはzafuや禅、マインドフルネ"
};
let item3 = {
	image: "./images/zen.png",
	date: "2018.5.25",
	category: "お知らせイベント案内",
	title: "禅ボディワーク開催のご案内",
	schedule: "6 月 17 日(土)14:30~16:30",
	text: "この文章はzafuホームページのためのダミーテキストです。ここにはzafuや禅、マインドフルネスについての文章が入ります。この文章はzafuホームページのためのダミーテキストです。ここにはzafuや禅、マインドフルネ"
};

var carousel = new Vue({
	el: '#topics-view',
	components: {
		'carousel': VueCarousel.Carousel,
		'slide': VueCarousel.Slide
	},
	data: {
		label: "next",
		items: [item1, item2, item3, item1, item2, item3]
	}
});