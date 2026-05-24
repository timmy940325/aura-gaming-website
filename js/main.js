// 使用 DOMContentLoaded 確保在操作 DOM 前，HTML 已完全載入
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 導覽列滾動效果 ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // --- 2. 手機版選單切換 ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 3. 購物車點擊互動 ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            // 模擬加入購物車
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-5 right-5 bg-cyan-500 text-black px-6 py-3 rounded-lg shadow-lg z-[100] animate-bounce';
            notification.innerText = '✅ 商品已加入購物車！';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        });
    });

    // --- 4. 滾動淡入動畫 ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 動畫執行一次後即停止觀察
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    const sectionsToAnimate = document.querySelectorAll('.fade-in-section');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});
