var app={};

function allowDrop(ev) {
  ev.preventDefault();
  app.dragging = true;
  $("#drop_zone").addClass("dragging");
}

function dragout(ev) {
  console.log('drag out');
  app.dragging=false;
  $("#drop_zone").removeClass("dragging");

}

function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  app.dragging=false;
  console.log('ev is', ev);
  processFile(ev.dataTransfer.files[0])
}

var processFile = function(f) {
  if (!f) {
    return alert('Cannot read file meta data');
  }
  console.log ("the file is" , f);
  app.lastModified = f.lastModified;
  app.name = f.name.substr(0,32);
  app.size = f.size;
  app.type = f.type.substr(0,32);
  var reader = new FileReader();
  reader.onload = function(event) {
    console.log('onload!',event);
    console.log(typeof event.target.result);
    sha256(event.target.result).then(function(d){
      console.log("digest is", d);
      app.hash = d;
      console.log("hash is " + app.hash);
      var url = 'pay.html?name='+encodeURIComponent(app.name);
      url += '&lastModified='+encodeURIComponent(app.lastModified);
      url += '&size='+encodeURIComponent(app.size);
      url += '&type='+encodeURIComponent(app.type);
      url += '&hash='+encodeURIComponent(app.hash);
      window.location = url
    });
  };
  reader.readAsText(f);
}

var onFileSelect = function(f) {
  var file = f.files[0];  
  if (file) {
    processFile(file)
  }
}

function reveal() {
  $("#drop_zone").show();
  $("#notarise_now").hide();
}

function verify_file(ev) {
  ev.preventDefault();
  var f = ev.dataTransfer.files[0];
  process_verify_file(f);
}

function verify_file_select(f) {
  var file = f.files[0];  
  if (file) {
    process_verify_file(file)
  }
}

function process_verify_file(f) {
  $('#verified').hide()
  $('#unverified').hide();
  console.log("Verifying");
  console.log ("the file is" , f);
  var reader = new FileReader();
  reader.onload = function(event) {
    //console.log('onload!',event);
    sha256(event.target.result).then(function(d){
      droppedHash = d
      console.log("new hash is ",droppedHash);
      console.log("old hash is ", contract.hash);
       if (droppedHash == contract.hash) {
         $('#verified').show();
       } else {
         $('#unverified').show();
       }
    });  
  };
  reader.readAsText(f);
}
