describe('decco.js', function(){
    describe('Decco', function(){
        it('After', function(){
            
            var decco = new Decco();

            var module = {
                add : function(a,b){ 
                    return a+b 
                },

                subtract : function(a,b){ 
                    return a-b 
                }
            } 

            var result = "";
            var funcName = "";
            decco.After(module,function(args,name,val){
                                                result = val;
                                                funcName=name;
                                            });
      
            module.add(1,2);

            expect(result).to.equal(3);
            expect(funcName).to.equal("add");
    
        });

        it('Before', function(){
            
            var decco = new Decco();

            var module = {
                add : function(a,b){ 
                    return a+b 
                },

                subtract : function(a,b){ 
                    return a-b 
                }
            } 

            var args = [];
            var funcName = "";
            decco.Before(module,function(val,name){

                                                args = val;
                                                funcName=name;
                                            });
      
            module.add(1,2);

            expect(args).to.include(1);
            expect(args).to.include(2);
            
            expect(funcName).to.equal("add");
        });

        it('Attach to named function', function(){
            
            var decco = new Decco();

            var module = {
                add : function(a,b){ 
                    return a+b 
                },

                subtract : function(a,b){ 
                    return a-b 
                }
            } 

            var args = [];
            var funcName = "";
            
            var options = {
                decorate: ["add"],
            };


            decco.Before(module,function(val,name){

                                                args = val;
                                                funcName = name;
                                            },options);
      
            module.add(1,2);

            expect(args).to.include(1);
            expect(args).to.include(2);
            
            expect(funcName).to.equal("add");

            args = [];
            funcName = "";

            module.subtract(1,2);
            expect(args.length).to.equal(0);
            expect(funcName).to.equal("");
        });

    })

})
