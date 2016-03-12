$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);

/*	var myobj2 = {Name:$("#Name").val(),Address:$("#Address").val()};
	jobj2 = JSON.stringify(myobj);
	$("#json").text(jobj2);
*/
	var url = "comment";
	$.ajax({
  	  url:url,
  	  type: "POST",
  	  data: jobj,
  	  contentType: "application/json; charset=utf-8",
  	  success: function(data,textStatus) {
      		$("#done").html(textStatus);
  	  }
	});

/*	var url2 = "address";
	$.ajax({
	  url:url2,
	  type: "POST",
	  data: jobj2,
	  contentType: "application/json; charset=utf-8",
	  success: function(data,textStatus) {
		$("#done").html(textStatus);
	  }
	});
*/  
  });

      $("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
          everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
    })
/*
      $("#getAddress").click(function() {
      $.getJSON('address', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var address in data) {
          com = data[address];
          everything += "<li>Name: " + com.Name + " -- Address: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#addresses").html(everything);
      })
    })
*/
});
