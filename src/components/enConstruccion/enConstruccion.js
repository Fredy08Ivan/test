import React from "react";
import './assets/css/style.css'
function EnConstruccion() {
  return (
    <div>
      <header id="header">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <div class="logo">
            <h1 class="text-light">
              <a href="index.html">
                <span>En construccion</span>
              </a>
            </h1>
          </div>

          <div class="contact-link float-right">
            <a href="#contact" class="scrollto">
              Contactanos
            </a>
          </div>
        </div>
      </header>
      
      <section id="hero">
       
    <div class="hero-container">

    <br/>
        <br/>
        <br/>
        <br/>
      <h1>Ups! </h1>
      <h2>Estamos trabajando para mejorar nuestro sistema y estaremos listos para lanzarlo después</h2>
      

      <div class="countdown" data-count="2023/12/3" data-template="%d days %h:%m:%s"></div>
      <img id='gear' src='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjQiIHdpZHRoPSI4OTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8y%0D%0AMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTQ0Ny45MzggMzUwQzM1OC41MzEgMzUwIDI4NiA0MjIuNTMx%0D%0AIDI4NiA1MTJjMCA4OS4zNzUgNzIuNTMxIDE2Mi4wNjIgMTYxLjkzOCAxNjIuMDYyIDg5LjQzOCAw%0D%0AIDE2MS40MzgtNzIuNjg4IDE2MS40MzgtMTYyLjA2MkM2MDkuMzc1IDQyMi41MzEgNTM3LjM3NSAz%0D%0ANTAgNDQ3LjkzOCAzNTB6TTc3Mi42MjUgNjA1LjA2MmwtMjkuMTg4IDcwLjMxMiA1Mi4wNjIgMTAy%0D%0ALjI1IDYuODc1IDEzLjUtNzIuMTg4IDcyLjE4OEw2MTEuNzUgODA3LjM3NWwtNzAuMzEyIDI4Ljg3%0D%0ANUw1MDUuNzUgOTQ1LjVsLTQuNTYyIDE0LjVIMzk5LjE1NkwzNTUgODM2LjY4OGwtNzAuMzEyLTI5%0D%0ALTEwMi40MDQgNTEuOTM4LTEzLjUgNi43NS03Mi4xNTYtNzIuMTI1IDU1Ljg3NS0xMTguNS0yOC45%0D%0ANjktNzAuMjVMMTQuNDY5IDU2OS44NzUgMCA1NjUuMTg4VjQ2My4yMTlMMTIzLjQwNiA0MTlsMjgu%0D%0AOTY5LTcwLjE4OC01MS45MDYtMTAyLjQ2OS02Ljg0NC0xMy40MzggNzIuMDYyLTcyLjA2MiAxMTgu%0D%0ANTk0IDU1Ljg0NCA3MC4yMTktMjkuMDMxIDM1LjY1Ni0xMDkuMTg4TDM5NC43NSA2NGgxMDJsNDQu%0D%0AMTg4IDEyMy40NjkgNzAuMTI1IDI5LjAzMUw3MTMuNSAxNjQuNTMwOTk5OTk5OTk5OTVsMTMuNjI1%0D%0ALTYuODQ0IDcyLjEyNSA3Mi4wNjItNTUuODc1IDExOC40MDZMNzcyLjI1IDQxOC41bDEwOS4zNzUg%0D%0AMzUuNjU2TDg5NiA0NTguNzV2MTAxLjkzOEw3NzIuNjI1IDYwNS4wNjJ6IiAvPgo8L3N2Zz4K' />
      <form action="forms/notify.php" method="post" role="form" class="php-email-form">
        <div class="row no-gutters">
          <div class="col-md-6 form-group pr-md-1">
            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
          </div>
          <div class="col-md-6 form-group pl-md-1">
            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
          </div>
        </div>

        <div class="my-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your notification request was sent. Thank you!</div>
        </div>
        <div class="text-center"><button type="submit">Get notified!</button></div>
      </form>
    </div>
  </section>
  
    </div>
  );
}

export default EnConstruccion;
