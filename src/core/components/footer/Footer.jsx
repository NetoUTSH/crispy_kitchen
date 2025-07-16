import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer class="footer">
  <div class="footer-content">
    <div class="footer-section location">
      <h2>Crispy Kitchen</h2>
      <h3>Location</h3>
      <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>
      <button>Directions</button>
    </div>

    <div class="footer-section hours">
      <h3>Opening Hours</h3>
      <p>Monday - Friday</p>
      <p>10:00 AM - 08:00 PM</p>
      <p>Tel: 010-02-0340</p>
    </div>

    <div class="footer-section social">
      <h3>Social</h3>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>Copyright © 2022 Crispy Kitchen Co., Ltd.</p>
  </div>
</footer>

    </>
  )
}
