$(document).ready(init);

function init(){


    (function(H){

        var app = {

            'dom' : {
                'lhandle' : $('.lhandle').html(),
                'rhandle' : $('.rhandle').html(),
                'handlnew' : $('.handlnew').html(),
                '$right' : $('.right'),
                '$left' : $('.left'),
                '$joboards' : $('.joboards')
                 
        
            },
        
            'start' : function(){
                this.ajaxengine("GET", "https://api.myjson.com/bins/et5gt", app.user_template);
                this.ajaxengine("GET", "https://api.myjson.com/bins/et5gt", app.user_templatetwo);
                this.ajaxengine("GET", "https://api.myjson.com/bins/137x9p", app.user_templatetree);


            },


            'ajaxengine' : function(method, url , callback){
                $.ajax({
                    'type' : method,
                    'url' : url,
                    'success' : callback
                    
                });
        
            },
        
            'user_template' : function(data){
                var temp = H.compile(app.dom.lhandle);
                app.dom.$right.html(temp(data));
            },

            'user_templatetwo' : function(data){
                var temp = H.compile(app.dom.rhandle);
                app.dom.$left.html(temp(data));
            },

            'user_templatetree' : function(data){
                var temp = H.compile(app.dom.handlnew);
                app.dom.$joboards.html(temp(data));
            },

            
        
         };
        
         app.start();

    }(Handlebars));




    





}