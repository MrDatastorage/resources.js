$.getJSON("../data/resources.json", function (jsonFromFile) {
    const json = jsonFromFile;
	$('#table').bootstrapTable({
        data: json,
        columns: [
            { field: "title", title: "Title",  sortable: true, classes: true, uniqueId: true},
            { field: "description", title: "Description", id: 'description'},
            { field: "type", title: "Type"},
            { field: "github", title: "On Github", classes:'github'},
            { field: "npm", title: "On NPM", classes:'npm'},
         ],
    })
});
$(document).ready(function(){
    function replace_content(content)
    {
    var exp_match = /(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var element_content=content.replace(exp_match, "<a href='$1'>$1</a>");
    var new_exp_match =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
    var new_content=element_content.replace(new_exp_match, '$1<a target="_blank" href="http://$2">$2</a>');
    return new_content;
    }
    var content = $('#table').html();
    $('#table').html(replace_content(content));
 });
$(document).ready(function() {
    $("#searchInput").on("keyup", function() {
      const value = $(this).val().toLowerCase();
      $("#table tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });