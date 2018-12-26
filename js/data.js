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
            { field: "link", title: "URL"}
         ],
    })
});
$(document).ready(function() {
    $("#searchInput").on("keyup", function() {
      const value = $(this).val().toLowerCase();
      $("#table tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });