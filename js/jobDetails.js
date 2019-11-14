$(document).ready(init);

function init(){


    (function(H){

        var app = {

            'dom' : {
                'ahandle' : $('.ahandle').html(),
                'bhandle' : $('.bhandle').html(),
                '$base' : $('.base'),
                '$similar' : $('#similar')
                
                 
        
            },
        
            'start' : function(){
                this.ajaxengine("GET", "https://api.myjson.com/bins/1d62sd", app.user_template1);
                this.ajaxengine("GET", "https://api.myjson.com/bins/1d62sd", app.user_template2);


            },


            'ajaxengine' : function(method, url , callback){
                $.ajax({
                    'type' : method,
                    'url' : url,
                    'success' : callback
                    
                });
        
            },
        
            'user_template1' : function(data){
                var temp = H.compile(app.dom.ahandle);
                app.dom.$base.html(temp(data));
            },

            'user_template2' : function(data){
                var temp = H.compile(app.dom.bhandle);
                app.dom.$similar.html(temp(data));
            },

        
         };
        
         app.start();

    }(Handlebars));




    





}