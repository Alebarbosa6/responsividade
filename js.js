		function botao(num) {
			var salvo = document.calc.visor.value;
			document.calc.visor.value = salvo + num;
		}
		function resultado() {
			var salvo = eval(document.calc.visor.value);
			document.calc.visor.value = salvo;
		}
	