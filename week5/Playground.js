


(() => {
	let a = 1;
	let b = 2;
	let c   = null;
	c = b;
	b = a;
	a = c;
	document.writeln([a, b, c]);
	document.writeln("ha");
})();
