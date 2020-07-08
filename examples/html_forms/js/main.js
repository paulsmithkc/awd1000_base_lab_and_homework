$(() => {
  $('.needs-validation').submit((e) => {
    if (e.target.checkValidity() === false) {
      e.preventDefault();
    }
    $(e.target).addClass('was-validated');
  });
});
