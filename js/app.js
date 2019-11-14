$(document).ready(init);

function init(){


    (function(H){

        var app = {

            'dom' : {
                'handle' : $('.handle').html(),
                'handletwo' : $('.handletwo').html(),
                '$joboards' : $('.joboards'),
                '$manager' : $('.manager')
                
                 
        
            },
        
            'start' : function(){
                this.ajaxengine("GET", "https://api.myjson.com/bins/137x9p", app.user_template);
                this.ajaxengine("GET", "https://api.myjson.com/bins/et5gt", app.user_templatetwo);

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
                app.dom.$joboards.html(temp(data));
            },

            'user_templatetwo' : function(data){
                var temp = H.compile(app.dom.handletwo);
                app.dom.$manager.html(temp(data));
            },

        
         };
        
         app.start();

    }(Handlebars));




    





}