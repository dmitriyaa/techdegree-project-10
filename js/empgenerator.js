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
            employeeList += '<li class="list__item person modal_' + i + '">' +
            '<img class="image--avatar" src="' + employee.picture.medium + '">' +
            '<div class="person__about">' +
                '<span class="person__info person__info--name">' + employee.name.first + ' ' + employee.name.last + '</span>' +
                '<span class="person__info person__info--email">' + employee.email + '</span>' +
                '<span class="person__info person__info--city">' + employee.location.city + '</span>' +
             '</div>' +
             '<div class="modal" id="modal_' + i + '">' +
                '<div class="modal__content">' +
                   '<span class="close">&times;</span>' +
                   '<img class="image--avatar" src="' +employee.picture.large + '">' +
                   '<div class="person__about">' +
                      '<span class="person__info person__info--name">' + employee.name.first + ' ' + employee.name.last + '</span>' +
                      '<span class="person__info person__info--email">' + employee.email + '</span>' +
                      '<span class="person__info person__info--city">' + employee.location.city + '</span>' +
                      '<span class="separator"></span>' +
                      '<span class="person__info person__info--phone">phone: +' + employee.phone + '</span>' +
                      '<span class="person__info person__info--address">' + employee.location.street + ', ' + employee.location.state + ' ' + employee.location.postcode + '</span>' +
                      '<span class="person__info person__info--birthday">Birthday: ' + employee.dob.substring(0, 10).replace(/-/g, "/", -1) + '</span>' +
                   '</div>' +
                '</div>' +
             '</div>' +
            '</li>';
         });
         $('#list').html(employeeList);

         // Functionality: closing modules when user clicks somewhere outside of content or on x button
         var modal = document.querySelectorAll('.modal');
         var span = document.querySelectorAll(".close");

         window.onclick = function(event) {
            for (var i = 0; i < modal.length; i++) {
               if (modal[i] == event.target) {
                  modal[i].style.display = "none";
               }
            }

            for (var i = 0; i < span.length; i++) {
               if (span[i] == event.target) {
                  span[i].parentNode.parentNode.style.display = "none";
               }
            }
         }

         // Functionality: open modules
         $.each(employees.results, function(i, employee) {
            let btn_text = ".modal_" + i;
            let modal_text = "#modal_" + i;
            let btn = document.querySelector(btn_text);
            let modal = document.querySelector(modal_text);

            btn.addEventListener('click', () => {
               modal.style.display = 'block';
            });
         });
      }
   );
});
