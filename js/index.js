$(document).ready(function(){
  
  $('#search_botton').click(function(){
    var search_botton= $('#search_botton').val();
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search_botton + "&format=json&callback=?";
    
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data){
        //console.log(data);
        //clear the result
        $('#output').html(" ");
        
        for(var i=0; i < data[1].length;i++){
        $('#output').prepend("<li><a href="+data[3][i]+" target=" + "blank" + "><h1>" +data[1][i]+"</h1></a><p>"+data[2][i]+"</p></li>");
      }
        
        $('#search_botton').val('');
      },
      error:function(errorMessage){
        alert("Error");
    }
   
      });  
    
    });
    $('#search_botton').keypress(function(e){
       if (e.which==13){
      $('#search_botton').click();
    }
    });
   
  });