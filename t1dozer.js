function (context, args){
	var targ = args.t
	var sol = {blah:"blooey"}  			
	var loc = targ.call(sol)
	var pass = ["unlock","open","release"]
	var primearray = [2,3,5,7,11,13,15,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
	var colors = ["purple","blue","cyan","green","lime","yellow","orange","red"]
	
	function ezlockbreaker(lockname) {
		var pass = ["unlock","open","release"]
		for (let a=0; a < pass.length; a += 1){
			sol[lockname] = pass[a]
			loc = targ.call(sol)
			if (loc.indexOf("command") === -1){
				break
			} 
		}
	while (loc.indexOf("ERROR") > -1){
		if (loc.indexOf("EZ_21") > -1){
			let a = 0
			do {
				sol.ez_21 = pass[a]
				loc = targ.call(sol)
				a++
			} while (loc.indexOf("command") > -1)
		}
		if (loc.indexOf("EZ_35") > -1){
			let a = 0
			do {
				sol.ez_35 = pass[a]
				loc = targ.call(sol)
				a++
			} while (loc.indexOf("command") > -1)
		}
		if (loc.indexOf("EZ_40") > -1){
			let a = 0
			do {
				sol.ez_40 = pass[a]
				loc = targ.call(sol)
				a++
			} while (loc.indexOf("command") > -1)
		}
		if (loc.indexOf("digit") > -1){
			let a = 0
			do {
				sol.digit = a
				loc = targ.call(sol)
				a++
			} while (loc.indexOf("digit") > -1)
		}
		if (loc.indexOf("prime") > -1){
			let a = 0
			do {
				sol.ez_prime = primearray[a]
				loc = targ.call(sol)
				a++
			} while (loc.indexOf("correct prime") > -1)
		}
		if (loc.indexOf("c001") > -1){
			let a = 0
			do {
				sol.c001 = colors[a]
				loc = targ.call(sol)
				a++
			} while (loc.indexOf("color name") > -1)
		}
		if (loc.indexOf("color_digit") > -1){
			let a = sol.c001.length
			do {
				sol.color_digit = a
				loc = targ.call(sol)
				a++
			} while (loc.indexOf("checksum") > -1)
		}
		if (loc.indexOf("c002") > -1){
			let a = 0
			do {
				sol.c002 = colors[a]
				loc = targ.call(sol)
				a++
			} while (loc.indexOf("color name") > -1)
		}
		if (loc.indexOf("c003") > -1){
			let a = 0
			do {
				sol.c003 = colors[a]
				loc = targ.call(sol)
				a++
			} while (loc.indexOf("color name") > -1)
		}
		if (loc.indexOf("c002_complement") > -1){
			let b = colors.indexOf(sol.c002) + 4
			sol.c002_complement = colors[b % colors.length]
			loc = targ.call(sol)
		}
		if (loc.indexOf("c003_triad_1") > -1){
			let b = colors.indexOf(sol.c003) + 3
			sol.c003_triad_1 = colors[b % colors.length]
			loc = targ.call(sol)
		}
		if (loc.indexOf("c003_triad_2") > -1){
			let b = colors.indexOf(sol.c003) + 5
			sol.c003_triad_2 = colors[b % colors.length]
			loc = targ.call(sol)
		}
	}
	return loc
}