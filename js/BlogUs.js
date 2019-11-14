$(document).ready(init);

function init(){


    (function(H){

        var app = {

            'dom' : {
                'handle' : $('.handle').html(),
                'handletwo' : $('.handletwo').html(),
                '$coright': $('.coright'),
                '$comments' : $('.comments')
                
                 
        
            },
        
            'start' : function(){
                this.ajaxengine("GET", "https://api.myjson.com/bins/et5gt", app.user_template);
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
                app.dom.$coright.html(temp(data));
            },

            'user_templatetwo' : function(data){
                var temp = H.compile(app.dom.handletwo);
                app.dom.$comments.html(temp(data));
            },

        
         };
        
         app.start();

    }(Handlebars));




    





}