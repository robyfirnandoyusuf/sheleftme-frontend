<script>
import { onMount } from 'svelte';
import { PUBLIC_BE_HOST } from '$env/static/public';
// import { quotes } from '../stores/store';

let data = null;
let loading = true;
let totalPages = 1;
let currentPage = 1;
// let PUBLIC_BE_HOST = "http://be-sheleftme.site"
console.log('lah', PUBLIC_BE_HOST)

async function fetchData(page) {
    try {
        const response = await fetch(`${PUBLIC_BE_HOST}/api/quotes?page=${page}`);
        const jsonData = await response.json();
        data = jsonData.data; 
        // quotes.set(data);
        // console.log('xxx', jsonData)
        totalPages = jsonData.last_page;
        loading = false;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

onMount(() => {
    // alert(env.PUBLIC_BE_HOST)
    fetchData(currentPage);
});

// onDestroy(() => {
//     data = [];
// });
function changePage(newPage) {
    if (newPage !== currentPage) {
        currentPage = newPage;
        fetchData(currentPage);
    }
}

</script>
<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="section section-80">
    <div class="container">
        <div class="row mbxxl">
            <div class="col-lg-12">
                <div class="alay-sc-blog-list style-vertical">
                    <div class="row">
                        {#if data}
                            {#each data as item (item.id)}
                                <div class="col-md-4">
                                    <div class="blog-item sub-item blog-center mbl">
                                        <!-- <div class="img-wrap"><img src="https://media.istockphoto.com/id/956341550/photo/grief-divorce-couple-holding-broken-heart-unhappy-relationship-hurt-feeling-for-lover.jpg?s=612x612&w=0&k=20&c=35Emjgi6PMaN4a1v_WJwVE8M0za-JgBbPE7oTTZcbDY=" alt="Alay"></div> -->
                                        <a href="/quote/{item.id}">
                                            <div class="img-wrap"><img src="{PUBLIC_BE_HOST}/storage/profile_pictures/{item.username}/{item.username}_profile_picture.jpg" alt="Profile Picture Empty"></div>
                                        </a>

                                        <!-- <div class="cat-heading"></div> -->
                                        <a href="/quote/{item.id}" class="title">{item.quote}</a>
                                        <!-- <p class="content">{item.quote}</p> -->
                                        <div class="block-footer">
                                            <div class="meta-infor">
                                                <div class="author item"><span class="pre">By</span><a href="https://t.me/{item.username}" class="text" target="_blank">{item.account_name}</a></div><a href="news-detail.html" class="date item"> {item.created_at_formatted}</a>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        {:else}
                            <p>No data available.</p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
        <div class="row mbxxl">
            <div class="col-12">
                <!-- <div class="pagination justify-content-center">
                    <ul class="list-unstyled text-center">
                        <li class="pagi-prev"><a href="#/">Prev</a></li>
                        <li><a href="#/">1</a></li>
                        <li class="active"><a href="#/">2</a></li>
                        <li><a href="#/">3</a></li>
                        <li class="pagi-next"><a href="#/">Next</a></li>
                    </ul>
                </div> -->
                <div class="pagination justify-content-center">
                    <ul class="list-unstyled text-center">
                        {#if totalPages > 1}
                            {#if currentPage > 1}
                                <li class="pagi-prev"><a href="#/" on:click={() => changePage(currentPage - 1)}>Prev</a></li>
                            {/if}
                            {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
                                <li class="{currentPage === page ? 'active' : ''}"><a href="#/" on:click={() => changePage(page)}>{page}</a></li>
                            {/each}
                            {#if currentPage < totalPages}
                                <li class="pagi-next"><a href="#/" on:click={() => changePage(currentPage + 1)}>Next</a></li>
                            {/if}
                        {/if}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
