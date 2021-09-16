  /* Nav Bar */

  let menuItems = document.getElementById("menuItems");

  menuItems.style.maxHeight = "0px";

  document.getElementById("dropDown").onclick = function() { menuToggle() };

  function menuToggle() {
      if (menuItems.style.maxHeight == "0px") {
          menuItems.style.maxHeight = "200px";
      } else {
          menuItems.style.maxHeight = "0px"
      }
  }

  /* Account Page */
  window.onload = function() {
          let LoginForm = document.getElementById("loginForm");
          let RegForm = document.getElementById("regForm");
          let Indicator = document.getElementById("Indicator");

          document.getElementById("Log-span").onclick = function() { login() };
          document.getElementById("Reg-span").onclick = function() { register() };

          function register() {
              RegForm.style.transform = "translateX(0px)";
              LoginForm.style.transform = "translateX(0px)";
              Indicator.style.transform = "translateX(100px)";
          }

          function login() {
              RegForm.style.transform = "translateX(300px)";
              LoginForm.style.transform = "translateX(300px)";
              Indicator.style.transform = "translateX(0px)";
          }
      }
      /* Product page*/