import React from "react";


export default function contacto() {
  return (
    <div className="contenedor">
      <br />
      <br />
      <h1>
        <center>
          Instituto Tecnológico Superior <br />
          De Los Ríos
        </center>
      </h1>
      <br />
      

      <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Contactanos</h2>
        </div>

        <div class="row contact-info">

          <div class="col-md-4">
            <div class="contact-address">
            <ion-icon name="logo-github"></ion-icon>
              <h3 className="text-center">Github</h3>
              <address>@danycambrano</address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
            <ion-icon name="people-outline"></ion-icon>
              <h3>Ingeniero</h3>
              <p><a href="tel:+155895548855">Dany Cambrano Arcos</a></p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-email">
            <ion-icon name="location-outline"></ion-icon>
              <h3>Ubicación</h3>
              <p><a href="mailto:info@example.com">Centro de Desarrollo Digilab</a></p>
            </div>
          </div>

          

        </div>

        <div class="form">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="col-md form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div class="col-md form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>
    </section>
    </div>
  );
}
