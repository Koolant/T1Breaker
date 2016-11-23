function(context, args){
var c=["open","release","unlock"]
var llen = "!LOCK_UNLOCKED".length
var ret = ""
var success = false

	for(var k=0; k<3; k++){
		if (success === true){
			break;
			}
		for(var s=0; s<10; s++){
			ret = args.target.call({EZ_21 : c[k], EZ_35 : c[k], digit : s})
			if(ret.substr(0, llen) === "!LOCK_UNLOCKED"){
				success = true
				break
			}
		}
	}
	return {ok:success, msg:ret}
	}
