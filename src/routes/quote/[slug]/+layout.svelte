<script>
import { scriptsLoaded } from '../../../stores/store'

function markScriptsAsLoaded() {
    alert(1)
    scriptsLoaded.set(true);
}
</script>
<svelte:head>
    <meta charset="UTF-8">
    <title>Quote</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Handlee|Montserrat'>
        <link rel="stylesheet" href="/assets-detail/style.css">
        <!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/just-animate/2.4.0/just-animate-all.js' on:load="{()=>markScriptsAsLoaded()}"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/just-animate/2.4.0/just-animate-tools.js'></script> -->
        <script src='https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.1/web-animations.min.js'></script>
        <!-- <script  src="/assets-detail/script.js"></script> -->
        
</svelte:head>

<div class="app">
    <slot />
</div>
