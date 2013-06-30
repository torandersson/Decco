# Decco - Why?

I tend to use console.log when I write javascript, I know it's bad practice, but sometimes i need to understand the flow. So until recently i used to open my js files and insert console.log("here",arguments) to the functions in my objects. 

But not anymore, I made decco.js a simple function decorator in javascript that register itself on objects,functions

## Only two functions

Decco only contains 2 functions, After and Before.

##Before

Executes when we enter a function.  

# Example

```javascript  
	var decco = new Decco();
    
    var objectToDecorate = {
    	add : function(a,b){ 
        	return a+b 
        }
    } 

    var args = [];
    var funcName = "";
    decco.Before(objectToDecorate,function(val,name){
   		                    console.log("arguments",val);
                            console.log("function name",name);
                        });
      
    module.add(1,2);
```
Outputs in cosole:
arguments [1,2]
function name add


