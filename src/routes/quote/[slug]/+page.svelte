<script>
import {
    onMount
} from "svelte";
import {
    page
} from "$app/stores";
import {
    PUBLIC_BE_HOST
} from '$env/static/public';
import {
    loadScript
} from '../../../utils/document';
import html2canvas from 'html2canvas';

let data = {};

async function fetchData() {
    try {
        const response = await fetch(`${PUBLIC_BE_HOST}/api/quotes/${ $page.params.slug }`);
        const jsonData = await response.json();
        data = jsonData;
        document.title = data.username + "'s Quote";
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function captureScreenshot() {
    const elementToCapture = document.getElementById('wrapper'); // You can specify the element you want to capture

    html2canvas(elementToCapture).then(function(canvas) {
        const screenshotDataURL = canvas.toDataURL('image/png');

        // You can now save or display the screenshotDataURL
        // For example, you can create an image element to display the screenshot
        const screenshotImage = new Image();
        screenshotImage.src = screenshotDataURL;

        // Optionally, you can save the image as a file using the "download" attribute
        const downloadLink = document.createElement('a');
        downloadLink.href = screenshotDataURL;
        downloadLink.download = 'screenshot.png';
        downloadLink.click();
    });
}

async function fetchDataAndAnimate() {
    await fetchData();
    animateElements();
}

async function animateElements() {
    var quote = just.splitText(".quote").words;
    var attribution = just.splitText("small").characters;

    wrapWords(quote);

    var t1 = just.timeline();

    t1.set({
        targets: quote,
        web: {
            opacity: 0,
        },
    });

    t1.set({
        targets: attribution,
        web: {
            opacity: 0
        },
    });

    t1.animate({
        targets: quote,
        stagger: 300,
        delay: 200,
        easing: "ease-out",
        duration: 600,
        web: {
            opacity: [0, 1],
            y: ["200%", 0],
        },
    });

    t1.animate({
        targets: attribution,
        duration: 700,
        stagger: 20,
        easing: "ease-out",
        web: {
            opacity: [0, 1],
            y: ["200%", 0],
        },
    });

    t1.animate({
        targets: ".note",
        delay: 500,
        duration: 600,
        easing: "linear",
        web: {
            opacity: [0, 1]
        },
    });

    t1.play();

    t1.once("finish", function() {
        // t1.reverse();
    });

    function wrapWords(words) {
        return words.map(function(w) {
            var parent = w.parentNode;
            var wrapper = document.createElement("span");
            wrapper.classList.add("word-wrapper");
            parent.insertBefore(wrapper, w);
            parent.removeChild(w);
            wrapper.appendChild(w);
            return w;
        });
    }
}

onMount(async () => {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/just-animate/2.4.0/just-animate-all.js');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/just-animate/2.4.0/just-animate-tools.js');

    fetchDataAndAnimate()

});
</script>

<style>
a {
    color: white !important;
    font-size: 12px;
}

a:visited {
    color: white !important;
    font-size: 12px;
}
</style>

{#if data.username}
<div id="wrapper">
    <div>
        <blockquote>
            <span class="quote">{data.quote}</span>
            <small>
                <!-- <img src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4686.jpg?w=2000" width="100px"> -->
                – {data.account_name}
            </small>
        </blockquote>

        <a href="/"> Back to quotes list</a>
        <!-- <button on:click={captureScreenshot}>Capture Screenshot</button> -->
    </div>
</div>
{:else}
<p>Loading...</p>
{/if}
