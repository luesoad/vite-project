<script lang="ts">
  import { LOGO_IMAGE } from '../lib/constants';
  import { icons, legalLinks, contact } from '../data/footer';
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <img alt="Neon Skyline Synthwave Project" class="footer-logo" src={LOGO_IMAGE} />
      <span class="footer-contact">
        Official communications, booking & orders:
        <strong>
          <a href={`mailto:${contact.email}`} class="footer-contact-link">{contact.label}</a>
        </strong>
      </span>
    </div>
    <div class="footer-links">
      <div class="footer-section">
        <h2 class="footer-title">Follow us</h2>
        <div class="footer-icons">
          {#each icons as icon}
            <a
              href={icon.href}
              rel="noreferrer"
              target="_blank"
              class="footer-icon-link"
              aria-label={icon.label}
            >
              <img src={icon.svg} alt={icon.label} class="footer-icon-img" />
            </a>
          {/each}
        </div>
      </div>
      <div class="footer-section">
        <h2 class="footer-title">Legal</h2>
        <ul class="footer-legal-list">
          {#each legalLinks as link}
            <li>
              <a href={link.href} class="footer-legal-link">{link.label}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</footer>