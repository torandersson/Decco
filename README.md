# Decco - Why?

I tend to use console.log when I write javascript, I know it's bad practice, but sometimes i need to understand the flow. So until recently i used to open my js files and insert console.log("here",arguments) to the functions in my objects. 

But not anymore, I made decco.js a simple function decorator in javascript that register itself on objects,functions

## Only two functions

Decco only contains 2 functions, After and Before.

##Before

Before registers a function that executes when we enter the deccorated function. Before takes 3 arguments. The object that contains the functions we want to decorate, the callback to be executed when we enter the decorated function. And the last arguments is the options object. Available options. decorate wich is an array that contains names of the functions we want to decorate. If the options is left out all functions are decorated. 

### Example

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


