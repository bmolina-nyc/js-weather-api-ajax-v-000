function getFahrenheits(result){
  // Your code goes here
}

function getHours(result){
  // Your code goes here
}

function generateDataSet(labels, data) {
  // Your code goes here
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    datatype: 'jsonp',
    success: function(success){
      console.log(success);
    }
  });
}

