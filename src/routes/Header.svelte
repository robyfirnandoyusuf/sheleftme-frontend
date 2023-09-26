<script>
import {
    page
} from "$app/stores";
import logo from "$lib/images/svelte-logo.svg";
import github from "$lib/images/github.svg";
</script>

<header class="header header-center">
    <div class="header-main">
        <div class="container">
            <div class="open-menuMobile">☰</div>
            <div class="utility-nav">
                <!-- <div class="alay-widget wg-social-mini d-inline-block">
                    <ul class="socials-mini list-inline">
                        <li><a href="http://facebook.com/" class="swin-transition"><i
                            class="swin-transition fa fa-facebook"></i></a></li>
                        <li><a href="http://twitter.com/" class="swin-transition"><i
                            class="swin-transition fa fa-twitter"></i></a></li>
                        <li><a href="http://skype.com/" class="swin-transition"><i
                            class="swin-transition fa fa-skype"></i></a></li>
                        <li><a href="http://pinterest.com/" class="swin-transition"><i
                            class="swin-transition fa fa-pinterest"></i></a></li>
                    </ul>
                </div><span id="trigger-overlay" class="trigger-search-bar"><i class="fa fa-search"></i></span> -->
            </div>
            <!-- main menu-->
            <nav class="main-nav-wrapper">
                <div class="main-nav">
                    <ul id="main-nav" class="nav nav-pills">
						<li class="menu-item nav-item {$page.route.id == '/' ? 'current-menu-item' : ''}"><a href="/" class="main-text nav-link">Home</a></li>
                        <li class="menu-item nav-item {$page.route.id == '/about' ? 'current-menu-item' : ''}"><a href="/about" class="main-text nav-link">About</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <!-- header logo-->
    <div class="header-logo"><a href="#/" class="logo"><img src="/images/sheleftme-logo2.png"
        alt="Alay" class="logo-sticky logo-black"><img src="/assets/images/logo-white.png" alt="Alay"
        class="logo-sticky logo-white"></a>
    <p class="logo-text">Share Your Quotes </p>
    <span class="font-weight-bold">
        Dokumentasi atas tersiksanya batin karena permintaan hati yang terlalu berat untuk di penuhi
    </span>
    </div>
    <div class="header-mobile">
        <div class="toggle-header-mobile">×</div>
        <nav class="main-nav-mobile">
            <ul>
                <li class="menu-item nav-item {$page.route.id == '/' ? 'current-menu-item' : ''}"><a href="/" class="main-text nav-link">Home</a></li>
                <li class="menu-item nav-item {$page.route.id == '/about' ? 'current-menu-item' : ''}"><a href="/about" class="main-text nav-link">About</a></li>
            </ul>
        </nav>
    </div>
    <div class="header-mobile-backdrop"></div>
</header>
