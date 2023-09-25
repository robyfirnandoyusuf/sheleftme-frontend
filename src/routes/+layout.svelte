<script>
    import {
        page
    } from "$app/stores";
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
    // console.log('xx', $page.route.id)
    // let isQuote = false

    // if ($page.route.id.includes('/quote/[slug]')) {
    //     isQuote = true;
    // }
</script>

<svelte:head>
    {#if $page.route.id.includes('/quote/[slug]')}
        <span/>
    {:else}
        <link href="/assets/vendors/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/assets/vendors/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="/assets/vendors/slick/slick.min.css">
        <link rel="stylesheet" href="/assets/vendors/slick/slick-theme.min.css">
        <link rel="stylesheet" href="/assets/vendors/animate.min.css">
        <link rel="stylesheet" href="/assets/vendors/magnific-popup/magnific-popup.css">
        <link rel="stylesheet" href="/assets/vendors/bootstrap-datepicker/css/bootstrap-datepicker.min.css">
        <link rel="stylesheet" href="/assets/vendors/fullscreen-overlay/css/style5.css">
        <link rel="stylesheet" href="/assets/vendors/lightbox/css/lightbox.min.css">
        <script src="/assets/vendors/modernizr.custom.js"></script>
        <link rel="stylesheet" href="/assets/fonts/font-icon/style.css">
        <link rel="stylesheet" type="text/css" href="/assets/css/layout.css">
        <link rel="stylesheet" type="text/css" href="/assets/css/elements.css">
        <link rel="stylesheet" type="text/css" href="/assets/css/shortcode.css">
        <link rel="stylesheet" type="text/css" href="/assets/css/widget.css">
        <link rel="stylesheet" type="text/css" href="/assets/css/extra.css">
        <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css">
        <link href="https://fonts.googleapis.com/css?family=Overpass:300,400,600,800,900" rel="stylesheet">
        <link rel="icon" href="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f494.png">

        <script src="/assets/vendors/jquery-1.10.2.min.js"></script>
        <!-- Bootstrap Dependence-->
        <script src="/assets/vendors/popper.min.js"></script>
        <!-- Bootstrap JavaScript-->
        <script src="/assets/vendors/bootstrap/js/bootstrap.min.js"></script>
        <!-- Vendors-->
        <script src="/assets/vendors/slick/slick.min.js"></script>
        <script src="/assets/vendors/masonry/masonry.pkgd.min.js"></script>
        <script src="/assets/vendors/imagesloaded/imagesloaded.pkgd.min.js"></script>
        <script src="/assets/vendors/jquery-countTo/jquery.countTo.min.js"></script>
        <script src="/assets/vendors/jquery-appear/jquery.appear.min.js"></script>
        <script src="/assets/vendors/parallax/parallax.min.js"></script>
        <script src="/assets/vendors/gmaps/gmaps.min.js"></script>
        <script src="/assets/vendors/audiojs/audio.min.js"></script>
        <script src="/assets/vendors/wowjs/wow.min.js"></script>
        <script src="/assets/vendors/skrollr.min.js"></script>
        <script src="/assets/vendors/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
        <script src="/assets/vendors/magnific-popup/jquery.magnific-popup.min.js"></script>
        <script src="/assets/vendors/classie.js"></script>
        <script src="/assets/vendors/fullscreen-overlay/js/style5.js"></script>
        <script src="/assets/vendors/lightbox/js/lightbox.min.js"></script>
        <!-- Own script-->
        <script src="/assets/js/main.js"></script>
        <script src="/assets/js/shortcode.js"></script>
    {/if}
</svelte:head>
<div class="app">
    {#if $page.route.id.includes('/quote/[slug]')}
        <slot />
    {:else}
        <Header />
        <slot />
        <!-- <main>
            <slot />
        </main> -->

        <!-- <footer>
            <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
        </footer> -->
        <Footer/>
    {/if}
</div>
