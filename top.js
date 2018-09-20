// import Vue from 'vue';
// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);
// import { Carousel, Slide } from 'vue-carousel';
let header = new Vue({
	el: '#header',
});

let pagenate = new Vue({
	el: '#top',
	data: {
		currentPage: 0,
		images: [ "./images/top1.jpg",
				  "./images/top2.jpg",
				  "./images/top3.jpg"
				],
		links: [ "#profile",
				"#pdcWrapper",
				"#program"],
		count: 0,
		timer: null
	},
	created: function () {
		this.timer = setTimeout(this.nextPage, 5000);
		this.count = this.images.length
	},
	methods: {
		change: function (event) {
			// console.log(`this id: ${this.currentPage}, target id: ${event.target.value}`);
			this.currentPage = event.target.value;
		},
		nextPage: function () {
			this.currentPage = (this.currentPage + 1) % this.count;
			//console.log(`go to next Page. currentPage id: ${this.currentPage}`);
		},
	},
	watch: {
		currentPage: function () {
			clearTimeout(this.timer);
			this.timer = setTimeout(this.nextPage, 5000);
		}
	}
});

let item1 = { 
	link: "topics01.html",
	image: "./images/zf_1.png",
	date: "2018.9.25",
	category: "お知らせイベント案内",
	title: "坐蒲「zafuざふ」効果がテレビで紹介されました！",
	schedule: "「名医とつながる！たけしの家庭の医学」",
	text: "禅寺の住職がきれいな姿勢を保つのは坐蒲による効果が大きいとテレビで紹介！《「zafuざふ」は、坐禅時に使用するだけではありません。空気量を調整することで、テレビで紹介された「巻きタオル簡易坐蒲」に",
};
let item2 = {
	link: "https://www.facebook.com/kokoro.karada.taiso/",
	image: "./images/ssd_1.png",
	date: "2018.9.25",
	category: "お知らせイベント案内",
	title: "「禅に学ぶ　こころが安らかになり",
	schedule: "からだが緩み健康を築く　日々の瞑想会」 at 安詳寺",
	text: "毎月、東京都大田区の「日蓮宗　安詳寺」にて瞑想会を開催しております。お気軽にお立ち寄りください。瞑想をして、日々の疲れと元気を回復しストレス発散いたしましょう！詳細はこちらにて。"
};
let item3 = {
	link: "http://bosan32000.wixsite.com/sinsindo/blank",	
	image: "./images/zen.png",
	date: "2018.9.25",
	category: "お知らせイベント案内",
	title: "「禅ボディマインドマネジメント基礎」講座",
	schedule: "13.14.15クール",
	text: "2018年10月から12月にかけて3クール開講いたします。今回の秋クールは特典が多くなっております。是非この機会にご受講下さい。2018秋開講案内のお知らせの詳細はこちらにて。"
};

let item4 = {
	link: "https://www.youtube.com/watch?v=0UK87DjFI6E",	
	image: "./images/zen.png",
	date: "2018.9.25",
	category: "お知らせイベント案内",
	title: "禅マインドフルネス身心堂zafu講義の",
	schedule: "動画を公開しました",
	text: "禅ボディマインドマネジメント講座の様子の動画を公開しました。"
};

let carousel = new Vue({
	el: '#topics-view',
	components: {
		'carousel': VueCarousel.Carousel,
		'slide': VueCarousel.Slide
	},
	data: {
		navBtnLeft: "<img class=\"navigation-btn\" src=\"./images/btnLeft.png\">",
		navBtnRight: "<img class=\"navigation-btn\" src=\"./images/btnRight.png\">",
		items: [item1, item2, item3, item4]
	}
});
let footer = new Vue({
	el: "#footer"
});