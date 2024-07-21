var pubArea = document.getElementById('pubArea');

Promise.all([d3.csv("./files/pubs.csv")]).then(
  function(json){
  json = json[0]
  console.log(json)
  innerHTML = ""
  paraStart = "<p>"
  year = 1000;
  counter = 0;
  for(var i=0; i<json.length; i++){

    json[i].Authors = json[i].Authors.replace('William Benda', '<b>William Benda</b>')
    json[i].Authors = json[i].Authors.replace('Brett Benda', '<b>Brett Benda</b>')
    json[i].VenueType = (json[i].VenueType=="") ? "Misc.":json[i].VenueType;
    
    if(year!=json[i].Section){
     innerHTML += "<h3 class=\"text-dark\">" + json[i].Section +"</h3>"
      year =json[i].Section
      counter = 0;
    }

    counter = counter+1;

    //pub type marker
    innerHTML += "<span class=\"small text-dark align-text-top "+json[i].VenueType.toLowerCase() + "\"><b>["+ counter + "] [" +json[i].VenueType+ "] </b></span>"
    
    innerHTML += paraStart
    
    //authors
    if(json[i].Authors!="")
      innerHTML += "<span class=\"medium text-dark align-text-top\">" +json[i].Authors+". </span>"

    //title with link to PDF
    if(json[i].PDFName!="" & json[i].HidePDF=="0")
    	innerHTML += "<b>"+"<a href=\"./files/" + json[i].PDFName +"\">"+json[i].Title+". </a></b>"
    else{
    	innerHTML += "<b>"+json[i].Title+". </b>"
    }
    //Venue name + abbreviation if there is one
    innerHTML += "<span class=\"medium text-dark align-text-top\">" +json[i].VenueName
    if(json[i].Abbreviation != ""){
      innerHTML+=" (" + json[i].Abbreviation + ")" 
    } 
    innerHTML += ". pages " + json[i].Pages
    innerHTML +="</span>. " 

    

    //Links and Videos
    if(json[i].Link!="")
      innerHTML += "<a class=\"small\" href=\"" + json[i].Link +"\">(Link) </a>"
    if(json[i].Video!="")
      innerHTML += "<a class=\"small\" href=\"" + json[i].Video +"\">(Video) </a>"
    //abstract toggle
    if(json[i].Abstract != ""){
      innerHTML += "<a class=\"small\" data-toggle=\"collapse\" href=\"#t" + i + "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"t" + i + "\">\
            (View Abstract)\
          </a>"

      innerHTML += "<div class=\"collapse\" id=\"t" + i + "\">\
        <div class=\"card card-body\">"+
          json[i].Abstract+
        "</div>\
      </div>"
    }

    innerHTML += "</p>"
  }
  pubArea.innerHTML = innerHTML
})