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