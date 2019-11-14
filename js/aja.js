$(document).ready(function() {



    $('#example').DataTable( {
        "ajax": "https://api.myjson.com/bins/a5ake",
        "columns": [{
            "data": "img",
            "render": function(data) {
                return '<img src="' + data + '" >';
            }

            },
            { "data": "type" },
            { "data": "title" },
            { "data": "posted" },
            { "data": "salary" },
            { "data": "company" },
            { "data": "loc" }
        ],
        
    } );

    
} ());


