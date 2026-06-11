// DOM Elements Selection
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const searchInput = document.getElementById('search-input');
const blogCards = document.querySelectorAll('.blog-card');
const subscribeForm = document.getElementById('subscribe-form');
const subscriberEmail = document.getElementById('subscriber-email');

// 1. DARK MODE FUNCTIONALITY
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeIcon.style.color = '#f59e0b'; // Sun amber color
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeIcon.style.color = ''; 
    }
});

// 2. FRONTEND REAL-TIME SEARCH (No Backend Needed)
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    blogCards.forEach(card => {
        const title = card.querySelector('.post-title').textContent.toLowerCase();
        // Agar title query match karta hai toh card dikhao, nahi toh chupao
        if (title.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// 3. SUBSCRIBE FORM UI ACTION
subscribeForm.addEventListener('submit', () => {
    alert(`Thank you for subscribing with: ${subscriberEmail.value}! (Frontend validation complete)`);
    subscriberEmail.value = '';
});



document.addEventListener("DOMContentLoaded", () => {
    const loadMoreBtn = document.getElementById("load-more-btn");
    const blogGrid = document.getElementById("blog-grid");

    if (loadMoreBtn && blogGrid) {
        loadMoreBtn.addEventListener("click", () => {
            // Click karte hi button par loading spinner dikhao
            loadMoreBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Loading...`;
            loadMoreBtn.style.pointerEvents = "none"; // Baar-baar click block karne ke liye

            setTimeout(() => {
                // Yeh naye blog cards hain jo click karne par jurenge (Aap links aur images change kar sakte ho)
                const newPostsHTML = `
                    <a href="blogs/hidden-gems.html" class="card-link" style="animation: fadeIn 0.6s ease forwards;">
                        <article class="blog-card" style="background-image: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80');">
                            <div class="card-content">
                                <span class="card-tag">Adventure</span>
                                <h3 class="post-title">Solo Travel Guide: Pack Light & Travel Far</h3>
                                <p>Learn the secrets of minimal packing and how to navigate solo trips efficiently...</p>
                            </div>
                        </article>
                    </a>

                    <a href="blogs/biography.html" class="card-link" style="animation: fadeIn 0.6s ease forwards;">
                        <article class="blog-card" style="background-image: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80');">
                            <div class="card-content">
                                <span class="card-tag">Lifestyle</span>
                                <h3 class="post-title">Weekend Escapes: Quick Trips for Busy People</h3>
                                <p>Transform your short weekends into unforgettable cultural refreshers with these locations...</p>
                            </div>
                        </article>
                    </a>

<!-- ye maine naya add kiya hai  -->
                    <a href="blogs/hidden-gems.html" class="card-link" style="animation: fadeIn 0.6s ease forwards;">
                        <article class="blog-card"
                            style="background-image: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80');">
                            <div class="card-content">
                                <span class="card-tag">Adventure</span>
                                <h3 class="post-title">Testing ke lie hai bass😂</h3>
                                <p>Learn the secrets of minimal packing and how to navigate solo trips efficiently...
                                </p>
                            </div>
                        </article>
                    </a>



                `;

                // Grid ke andar naye cards insert karo
                blogGrid.insertAdjacentHTML("beforeend", newPostsHTML);

                // Saare cards load hone ke baad Load More button ko clean tarike se gayab kar do
                loadMoreBtn.parentElement.style.display = "none";

            }, 1000); // 1 second ka realistic loading delay
        });
    }
});