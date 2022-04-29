function internHTML(name, id, school, email) {
  return `          <!-- Intern team item-->
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="../assets/icons8-graduation-cap-100.png"
                alt="gear icon representing web development"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">${name}</h5>
              <p class="text-uppercase text-muted">Intern</p>
              <p class="small text-uppercase text-muted mb-0">ID: ${id}</p>
              <p class="small text-uppercase text-muted">
                School: ${school}
              </p>
              <ul class="social list-inline mb-0 mt-3">
                <li class="list-inline-item">
                  <!-- Email -->
                  <a href="mailto:${email}" class="icon"
                    ><i class="fa fa-envelope"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- End-->
`;
}

module.exports = internHTML;
