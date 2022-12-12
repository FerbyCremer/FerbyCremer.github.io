window.onload = function() {
    var header = document.getElementById('header');
    header.innerHTML = '\
    <div class="container-fluid">\
    <a class="navbar-light" href="index.html"><img src="images/name.png" height="90%" width="90%"></a>\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">\
      <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="navbarResponsive">\
		<ul class="navbar-nav ml-auto">\
	       <li class="nav-item">\
	         <a class="nav-link" href="index.html">Home</a>\
	      </li>\
        <li class="nav-item">\
          <a class="nav-link" href="art_portfolio-old.html">Art</a>\
        </li>\
	      <li class="nav-item">\
	        <a class="nav-link" href="research.html">Research</a>\
	      </li>\
	      <li class="nav-item">\
	        <a class="nav-link" href="https://github.com/FerbyCremer">Coding</a>\
	      </li>\
	      <li class="nav-item">\
	        <a class="nav-link" target="_blank" href="files/CV.pdf">CV</a>\
	      </li>\
          <li class="nav-item">\
	        <a class="nav-link" href="fun.html">Hobbies</a>\
	      </li>\
          <li class="nav-item">\
            <a class="nav-link" href="index.html">Connect</a>\
	      </li>\
	    </ul>\
        </div>\
  </div>'

    var footer = document.getElementById('footer');
    footer.innerHTML = '\
	<div class="row row-space my-auto">\
      <div class="col-sm-12">\
        <h6 class="text-center mx-auto text-light">\
          <a class="text-light" href="https://ufl.edu">University of Florida</a> | \
          <a class="text-light" href="https://cise.ufl.edu">CISE</a> | \
          <a class="text-light" href="https://www.cise.ufl.edu/research/SurfLab.html">SurfLab</a></h6>\
        <h6 class="text-center mx-auto text-light">© 2021 Jennifer C Cremer</h6>\
      </div>\
    </div>'

    console.log("loaded")
}