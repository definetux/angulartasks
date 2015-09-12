(function() {
	angular
	.module('task1')
	.controller('MainController', MainController);

MainController.$inject = [];

function MainController() {
	var vm = this;
	vm.showText = showText;

	activate();

	function activate() {
		vm.input = vm.output = '';
	}

	function showText() {
		if (_isNumber(vm.input)) {
			vm.output = vm.input * 10;
		} else {
			vm.output = vm.input === '' ? vm.input : 'Hello';
		}
	}

	function _isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
}
})();