$(function() {
	var colors = [
		[0, 0, 0],
		[143, 0, 20],
		[124, 0, 0],
		[90, 0, 0]
	];
	var step = 0;
	var colorIndices = [0,1,2,3];
	var gradientSpeed = 0.004;

	function updateGradient() {
		var c0_0 = colors[colorIndices[0]];
		var c0_1 = colors[colorIndices[1]];
		var c1_0 = colors[colorIndices[2]];
		var c1_1 = colors[colorIndices[3]];

		var istep = 1 - step;
		var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
		var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
		var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
		var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

		var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
		var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
		var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
		var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

		$('#gradient').css({
			background: "-webkit-radial-gradient(80% 10%, circle, "+color1+", transparent)," +
						"-webkit-radial-gradient(80% 50%, circle, "+color2+", transparent)"
		});

		step += gradientSpeed;
		if ( step >= 1 )
		{
			step %= 1;
			colorIndices[0] = colorIndices[1];
			colorIndices[2] = colorIndices[3];

			colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
			colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
		}
	} setInterval(updateGradient,10);
});



