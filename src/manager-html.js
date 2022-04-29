function managerHtml(data) {
  return `<!-- Manager team item-->
<div class="col-xl-3 col-sm-6 mb-5">
  <div class="bg-white rounded shadow-sm py-5 px-4">
    <img
      src="../assets/icons8-businessman-100.png"
      alt="gear icon representing web development"
      class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
    />
    <h5 class="mb-0">${data.name}</h5>
    <p class="text-uppercase text-muted">Manager</p>
    <p class="small text-uppercase text-muted mb-0">ID: ${data.id}</p>
    <p class="small text-uppercase text-muted">Office Number: 1</p>
    <ul class="social list-inline mb-0 mt-3">
      <li class="list-inline-item">
        <!-- Email -->
        <a href="mailto:${data.email}" class="icon"
          ><i class="fa fa-envelope"></i
        ></a>
      </li>
    </ul>
  </div>
</div>
<!-- End-->
`;
}

module.exports = managerHtml;
