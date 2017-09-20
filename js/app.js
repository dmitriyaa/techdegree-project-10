$(document).ready(function() {
   $.getJSON(
      'https://randomuser.me/api/',
      {
         results: 12,
         nat: ['us', 'gb'],
      },
      function(employees) {
         var employeeList = '';
         $.each(employees.results, function(i, employee) {
            employeeList += '<li class="list__item person">' +
            '<img class="image--avatar" src="' + employee.picture.medium + '">' +
            '<div class="person__about">' +
             '<span class="person__info person__info--name">' + employee.name.first + ' ' + employee.name.last + '</span>' +
             '<span class="person__info person__info--email">' + employee.email + '</span>' +
             '<span class="person__info person__info--city">' + employee.location.city + '</span>' +
            '</li>';
         });
         $('#list').html(employeeList);
      }
   );
});
