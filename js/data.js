$(document).ready(function(){
    $.getJSON("../data/resources.json", function (jsonFromFile) {
        const json = jsonFromFile;
        $('#table').bootstrapTable({
            data: json,
            columns: [
                { field: "title", title: "Title",  sortable: true, classes: true, uniqueId: true},
                { field: "description", title: "Description", id: 'description'},
                { field: "type", title: "Type"},
                { field: "github", title: "Github", formatter},
                { field: "npm", title: "NPM", formatter},
                { field: "link", title: "URL", formatter},

             ]
        })
        function github(value, row, index, field){
            if(value == 1){
                return '<i class="fab fa-github fa-stack-1x fa-inverse"></i>';
            }else{
                return '';
            }
        }
        function formatter(value, row, index, field) {
            if(field == 'link'){
                return '<a href="'+ value +'">'+ value +'</a>';
            }
            if(field == 'github'){
                if(value == 1){
                    return '<i class="fab fa-github"></i>';
                }else{
                    return '<i class="fas fa-times"></i>';
                }
            }
            if(field == 'npm'){
                if(value == 1){
                    return '<i class="fab fa-npm"></i>';
                }else{
                    return '<i class="fas fa-times"></i>';
                }
            }
          }
    });


    $("#searchInput").on("keyup", function() {
        const value = $(this).val().toLowerCase();
        $("#table tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
 });