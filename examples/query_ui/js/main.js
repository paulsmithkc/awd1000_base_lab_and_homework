const languages = [
  'ActionScript',
  'AppleScript',
  'Asp',
  'BASIC',
  'C',
  'C++',
  'Clojure',
  'COBOL',
  'ColdFusion',
  'Erlang',
  'Fortran',
  'Groovy',
  'Haskell',
  'Java',
  'JavaScript',
  'Lisp',
  'Perl',
  'PHP',
  'Python',
  'Ruby',
  'Scala',
  'Scheme',
];

$(() => {
  $('.shake').click((e) => {
    $(e.target).effect('shake');
  });
  $('#autocomplete1').submit((e) => {
    e.preventDefault();
  });
  $('#autocomplete2').submit((e) => {
    e.preventDefault();
  });
  $('#query1').autocomplete({ source: languages, minLength: 2 });
  $('#query2').autocomplete({ source: 'http://localhost:3000/api/spellcheck/other', minLength: 2 });
  $('#datepicker2').datepicker();
  $('#slider2').slider();
});
