var demo = new Vue({

	el: '#main',

	data: {

		services: [
			{
				name: "Web Development",
				price: 300,
				active: false
			},
			{
				name: "Design",
				price: 400,
				active: false
			},
			{
				name: "Integration",
				price: 250,
				active: false
			},
			{
				name: "Training",
				price: 220,
				active: false
			}
		]

	},

	methods: {

		total: function() {

			 var total = 0;

			 this.services.forEach(function(s) {
			 	if (s.active) {
			 		total += s.price;
			 	}
			 });

			 return total;

		},

		toggleActive: function(s) {
			s.active = !s.active;
		}

	}

});
