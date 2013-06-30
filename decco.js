function Decco () {
	
}

Decco.prototype = {
	
	After: function(module,callback) {
		this.TypeIterrator(module,function(func,funcName) { 
	            	return function() {
	                	var args = Array.prototype.slice.call(arguments),
	                    	val = func.apply(this,args);
	                    callback(args,funcName,val);	
	                  	return val;
	              	}
	            });
	},

	Before: function(module,callback) {
		this.TypeIterrator(module,function(func,funcName) { 
	            	return function() {
	                	var args = Array.prototype.slice.call(arguments);
						callback(args,funcName);                    	
	                    var val = func.apply(this,args);
	                  	return val;
	              	}
	    		});

	},

	TypeIterrator: function(module,func) {
		for(var i in module) {
	    	if(typeof module[i] == "function") {
	        	var funcStr = module[i].toString();
	            module[i] = func(module[i],i);
	        }
	    }
	}
}
