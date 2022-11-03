const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light" id="navbar-nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="\public\ourservice.html" target="_blank">Our Service</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="\public\whyus.html" target="_blank">Why Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="\public\testi.html" target="_blank">Testimonial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="\public\faq.html" target="_blank">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-success" aria-current="page" href="\public\register.html" target="_blank">Register</a>
          </li>             
        </ul> 
      </div>
    </div>
  </nav>
)
}
export default Nav;

