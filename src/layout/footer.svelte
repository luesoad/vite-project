<script>
    import {Footer, FooterIcon, FooterLink, FooterLinkGroup, Img} from "flowbite-svelte";
    import logo from '../assets/fallen-tyrant-black-metal-band.jpeg';
</script>

<Footer class="bg-black text-white" footerType="socialmedia">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <Img
                alt="Fallen Tyrant Black Metal Band"
                class="logo"
                name="Fallen Tyrant Black Metal Band"
                src={logo}
            />
            Official communications, booking & orders: <strong>
                <a href="javascript:window.location.href=atob('bWFpbHRvOm1pdGhyYXNfc19pQGdteC5kZQ==')">Contact us</a>
            </strong>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase">Follow us</h2>
                <div class="flex">
                    <FooterIcon class="mr-2 hover:bg-white"
                        href="https://www.youtube.com/channel/UCWNXZHr9il0v_RSERHCqthw" rel="noreferrer"
                        target="_blank">
                        <!-- ...SVG... -->
                    </FooterIcon>
                    <FooterIcon class="mr-2"
                        href="https://open.spotify.com/artist/2NZqLDI9lvRFXDEoRXkpe5" rel="noreferrer"
                        target="_blank">
                        <!-- ...SVG... -->
                    </FooterIcon>
                    <FooterIcon class="footer__icon mr-2"
                        href="https://www.instagram.com/fallentyrantblackmetal/?hl=de" rel="noreferrer"
                        target="_blank">
                        <!-- ...SVG... -->
                    </FooterIcon>
                    <FooterIcon href="https://de-de.facebook.com/fallen.tyrant/"
                        rel="noreferrer" target="_blank">
                        <!-- ...SVG... -->
                    </FooterIcon>
                </div>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase">Legal</h2>
                <FooterLinkGroup>
                    <FooterLink href="/privacy" liClass="mb-4">Privacy Policy</FooterLink>
                    <FooterLink href="/impressum" liClass="mb-4">Impressum</FooterLink>
                </FooterLinkGroup>
            </div>
        </div>
    </div>
</Footer>
