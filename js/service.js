$(document).ready(init);

function init(){


    (function(H){

        var app = {

            'dom' : {
                'handle' : $('.handle').html(),
                '$output' : $('.output'),
                
                 
        
            },
        
            'start' : function(){
                this.ajaxengine("GET", "https://api.myjson.com/bins/et5gt", app.user_template);

            },


            'ajaxengine' : function(method, url , callback){
                $.ajax({
                    'type' : method,
                    'url' : url,
                    'success' : callback
                    
                });
        
            },
        
            'user_template' : function(data){
                var temp = H.compile(app.dom.handle);
                app.dom.$output.html(temp(data));
            },

        
         };
        
         app.start();

    }(Handlebars));




    





}