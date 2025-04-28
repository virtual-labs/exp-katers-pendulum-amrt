if(navigator.serviceWorker) {
	navigator
		.serviceWorker
		.register('./.././Katers_Pendulum/service_worker_Katers_Pendulum.js')
		.then(function(r) {
			console.log('NW  App now available offline');
		})
		.catch(function(e) {
			console.log('NW App NOT available offline');
			console.log(e);
		});
} else {
	console.log('Service workers are not supported');
}
