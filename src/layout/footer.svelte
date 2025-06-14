<script lang="ts">
    import { LOGO_IMAGE } from '../lib/constants';

    const icons = [
        { href: "https://facebook.com", svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'><path d='M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8zm1.5 8H7v5H5V8H3V6h2V5c0-1.1.9-2 2-2h2v2H8c-.55 0-1 .45-1 1v1h2l-1 2z'/></svg>" },
        { href: "https://twitter.com", svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'><path d='M5.026 15c6.038 0 9.34-5 9.34-9.34 0-.142 0-.283-.01-.423A6.693 6.693 0 0016 3.542a6.56 6.56 0 01-1.889.517A3.293 3.293 0 0015.556 2a6.57 6.57 0 01-2.084.797A3.281 3.281 0 007.875 5.5c0 .257.03.507.086.748A9.325 9.325 0 011.11 1.67a3.283 3.283 0 001.016 4.375A3.27 3.27 0 01.64 5.9v.04a3.283 3.283 0 002.634 3.215 3.28 3.28 0 01-1.48.056 3.283 3.283 0 003.065 2.28A6.577 6.577 0 010 13.29a9.305 9.305 0 005.026 1.476'/></svg>" },
        { href: "https://instagram.com", svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'><path d='M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8zm0 14.5c-3.58 0-6.5-2.92-6.5-6.5S4.42 1.5 8 1.5 14.5 4.42 14.5 8 11.58 14.5 8 14.5zm3.5-8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/></svg>" },
    ];
</script>

<footer class="bg-black text-white py-8">
    <div class="container mx-auto px-4 md:flex md:justify-between">
        <div class="mb-6 md:mb-0 flex flex-col gap-2">
            <img
                alt="A Band"
                class="logo w-24 h-auto object-contain mb-2 mx-auto"
                src={LOGO_IMAGE}
            />
            <span>
                Official communications, booking & orders: <strong>
                    <a href="mailto:contact@aband.com" class="underline hover:text-gray-300">Contact us</a>
                </strong>
            </span>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase">Follow us</h2>
                <div class="flex">
                    {#each icons as icon}
                        <a
                            href={icon.href}
                            rel="noreferrer"
                            target="_blank"
                            class="mr-2 p-2 rounded-full hover:bg-white hover:text-black transition-colors"
                            aria-label="Social Icon"
                        >
                            {@html icon.svg}
                        </a>
                    {/each}
                </div>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase">Legal</h2>
                <ul>
                    <li class="mb-4">
                        <a href="/privacy" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li class="mb-4">
                        <a href="/impressum" class="hover:underline">Impressum</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
