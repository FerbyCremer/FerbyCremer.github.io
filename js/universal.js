window.onload = function(){
	var header = document.getElementById('header');
	header.innerHTML = '\
		<h1 class="text-light"><a href="index.html" class="text-light">Ferby Cremer</a></h1>\
		<ul class="navbar-nav ml-auto">\
	      <li class="nav-item">\
	        <a class="nav-link" href="index.html">Home</a>\
	      </li>\
        <li class="nav-item">\
          <a class="nav-link" href="art_portfolio.html">Art Portfolio</a>\
        </li>\
	      <li class="nav-item">\
	        <a class="nav-link" href="research.html">Research</a>\
	      </li>\
	      <li class="nav-item">\
	        <a class="nav-link" href="code_projects.html">Coding</a>\
	      </li>\
	      <li class="nav-item">\
	        <a class="nav-link" target="_blank" href="files/CV.pdf">CV</a>\
	      </li>\
          <li class="nav-item">\
	        <a class="nav-link" href="fun.html">Hobbies</a>\
	      </li>\
          <li class="nav-item">\
            <a class="nav-link" href="#connect">Connect</a>\
	      </li>\
	    </ul>'

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
