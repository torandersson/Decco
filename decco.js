function Decco () {
	
}

Decco.prototype = {
	
	After: function(module,callback,options) {
		
		var options = options || {};

		this.TypeIterrator(module,function(func,funcName) { 
	            	return function() {
	                	var args = Array.prototype.slice.call(arguments),
	                    	val = func.apply(this,args);
	                    callback(args,funcName,val);	
	                  	return val;
	              	}
	            },options);
	},

	Before: function(module,callback,options) {
		
		var options = options || {};
		
		this.TypeIterrator(module,function(func,funcName) { 
	            	return function() {
	                	var args = Array.prototype.slice.call(arguments);
						callback(args,funcName);                    	
	                    var val = func.apply(this,args);
	                  	return val;
	              	}
	    		},options);

	},

	TypeIterrator: function(module,func,options) {
		if(options.decorate) {
			for (var j = options.decorate.length - 1; j >= 0; j--) {
				var prop = options.decorate[j]; 
				if(module[prop] && typeof module[prop] == "function") {
		        
		            module[prop] = func(module[prop],prop);
		        };
			};				
		}
		else {
			for(var i in module) {
	    		if(typeof module[i] == "function") {
	            	module[i] = func(module[i],i);
	        	}
	    	}
		}
	}
}
