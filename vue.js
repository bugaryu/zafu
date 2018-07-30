new Vue({
	el: '#pagenate',
	data: {
		id: 0,
		onStyle: { 
			'background-color': '#C65248'
		},
		offStyle: {
			'background-color': '#B5B4B5'
		}
	},
	methods: {
		change(event) {
			console.log(`this id: ${this.id}`);
			console.log(`target: ${event.target.value}`);
			this.id = event.target.value;
		},
		setStyle(id) {
			if (this.id == id) {
				return this.onStyle;	
			} else {
				return this.offStyle;
			}
		}
	}
});

