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
    <div class="header-logo"><a href="/" class="logo"><img src="/images/sheleftme-logo2.png"
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
                <li class="menu-item nav-item menu-item-has-children dropdown current-menu-ancestor"><a
                    href="index-2.html" class="dropdown-toggle nav-link"><i
                        class="fa fa-angle-down btn-open-dropdown"></i>Home</a>
                <ul class="dropdown-menu">
                    <li class="menu-item nav-item"><a href="home-dark.html" class="dropdown-text nav-link">Home Dark
                        Mode</a></li>
                    <li class="menu-item nav-item"><a href="index-2.html" class="dropdown-text nav-link">Home Modern
                        1</a></li>
                    <li class="menu-item nav-item"><a href="home2.html" class="dropdown-text nav-link">Home Modern
                        2</a></li>
                    <li class="menu-item nav-item"><a href="home3.html" class="dropdown-text nav-link">Home Modern
                        3</a></li>
                    <li class="menu-item nav-item"><a href="home-masonry.html" class="dropdown-text nav-link">Home
                        Masonry</a></li>
                    <li class="menu-item nav-item"><a href="home-minimalist-1.html"
                        class="dropdown-text nav-link">Home Minimalist 01</a></li>
                    <li class="menu-item nav-item"><a href="home-minimalist-2.html"
                        class="dropdown-text nav-link">Home Minimalist 02</a></li>
                    <li class="menu-item nav-item active"><a href="home-minimalist-3.html"
                        class="dropdown-text nav-link">Home Minimalist 03</a></li>
                    <li class="menu-item nav-item"><a href="home-fullwidth.html" class="dropdown-text nav-link">Home
                        Fullwidth</a></li>
                </ul>
                </li>
                <li class="menu-item nav-item"><a href="about.html" class="main-text nav-link">About</a></li>
                <li class="menu-item nav-item menu-item-has-children dropdown"><a href="#/"
                    class="dropdown-toggle nav-link"><i
                        class="fa fa-angle-down btn-open-dropdown"></i>Categories</a>
                <ul class="dropdown-menu">
                    <li class="menu-item nav-item"><a href="news-list.html"
                        class="dropdown-text nav-link">Lifestyle</a></li>
                    <li class="menu-item nav-item"><a href="news-grid-2.html"
                        class="dropdown-text nav-link">Photography</a></li>
                    <li class="menu-item nav-item"><a href="news-grid-3.html"
                        class="dropdown-text nav-link">Fashion</a></li>
                    <li class="menu-item nav-item"><a href="news-detail.html" class="dropdown-text nav-link">News
                        Detail</a></li>
                </ul>
                </li>
                <li class="menu-item nav-item"><a href="contact.html" class="main-text nav-link">Contact</a></li>
            </ul>
        </nav>
    </div>
    <div class="header-mobile-backdrop"></div>
</header>
