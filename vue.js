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
			console.log(`this id: ${this.current}, target id: ${event.target.value}`);
			this.current = event.target.value;
		},
		nextPage: function () {
			this.current = (this.current + 1) % this.count;
			console.log(`go to next Page. page id: ${this.current}`);
		},
	},
	watch: {
		current: function () {
			clearTimeout(this.timer);
			this.timer = setTimeout(this.nextPage, 5000);
		}
	}
});