function (context, args){
	let t = args.t
	let s = {}  			
	let q = t.call(s)
	
	function e(lk) {
		let pass = ["unlock","open","release"]
		for (let a=0; a < 3; a += 1){
			s[lk] = pass[a]
			q = t.call(s)
			if (q.indexOf("command") === -1){
				break
			}
		}
		
		for (let a=0; a<10; a+=1) {
			s["digit"] = a
			q = t.call(s)
			if (q.indexOf("digit") === -1){
				break
			}
		}
		
		for (let a=1; a<26; a+=1){
			let pa = [2,3,5,7,11,13,15,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
			s["ez_prime"] = pa[a]
			q = t.call(s)
			if (q.indexOf("prime") === -1){
				break
			}
		}
		return
	}
	
	function c(cn) {
		let cr = ["purple","blue","cyan","green","lime","yellow","orange","red"]
		for (let a=0; a<8; a+=1) {
			s[cn] = cr[a]
			q = t.call(s)
			if (q.indexOf("color name") === -1){
				break
			}
		}
		s["color_digit"] = s[cn].length
		
		if (q.indexOf("complement") > -1){
			let a = cr.indexOf(s[cn]) + 4
			s[cn + "_complement"] = cr[a % 8]
			q = t.call(s)
		} else if (q.indexOf("triad") > -1){
			let a = cr.indexOf(s[cn])
			s[cn + "_triad_1"] = cr[(a + 3) % 8]
			s[cn + "_triad_2"] = cr[(a + 5) % 8]
		}
		return
	}
	
	while (q.indexOf("ERROR") > -1){
		let v = ["EZ_21","EZ_35","EZ_40"]
		let f = ["c001","c002","c003"]
		for (let x of v){
			if (q.indexOf(x) > -1){
				e(x)
			}
		}
		for (let x of f){
			if (q.indexOf(x) > -1){
				c(x)
			}
		}
	}
	return q
}