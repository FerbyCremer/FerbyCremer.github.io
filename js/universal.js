window.onload = function () {
  var header = document.getElementById('header');
  header.innerHTML = '\
    <div class="container-fluid">\
    <h2><a class="navbar-brand" href="index.html"><img src="..\\ferbyLogoPNG.png" alt="logo"></a></h2>\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">\
      <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="navbarResponsive">\
		<ul class="navbar-nav ml-auto">\
        <li class="nav-item">\
        <a class="nav-link" href="fun.html">Hobbies</a>\
      </li>\
	      <li class="nav-item">\
	        <a class="nav-link" href="research.html">Research</a>\
	      </li>\
        <li class="nav-item">\
          <div class="dropdown">\
            <a class="nav-link" target="_blank" href="files/CV.pdf">CV <i class="fa fa-caret-down"></i></a>\
            <div class="dropdown-content">\
              <a class="nav-link" target="_blank" href="files/Resume.pdf">Resume</a>\
            </div>\
          </div>\
        </li>\
	      <li class="nav-item">\
	        <a class="nav-link" href="code_projects.html">Coding</a>\
	      </li>\
        <li class="nav-item">\
          <a class="nav-link" href="index.html#connect">Connect</a>\
	      </li>\
	    </ul>\
        </div>\
  </div>'

  var footer = document.getElementById('footer');
  footer.innerHTML = '\
	<div class="row row-space my-auto">\
      <div class="col-sm-12">\
        <h6 class="text-center mx-auto text-purple">\
          <a class="text-purple" href="https://ufl.edu">University of Florida</a> | \
          <a class="text-purple" href="https://cise.ufl.edu">CISE</a> | \
          <a class="text-purple" href="https://www.cise.ufl.edu/research/SurfLab">SurfLab</a></h6>\
        <h6 class="text-center mx-auto text-purple">© 2023 Jennifer C. Cremer</h6>\
      </div>\
    </div>'

  console.log("loaded")
}