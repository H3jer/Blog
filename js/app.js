<script>
    // Sample data for navigation items
    const navigationData = [
        { text: 'HOME', link: '/home' },
        { text: 'PORTFOLIO', link: '/about' },
        { text: 'BLOG', link: '/services' },
        { text: 'SUBSCRIBE', link: '/contact' }
    ];

    // Get the ul element
    const navigationUl = document.getElementById('navigation');

    // Method 1: Using append
    navigationData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.text;
        navigationUl.append(li);
    });

    // Method 2: Using appendChild
    navigationData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.text;
        navigationUl.appendChild(li);
    });

    // Method 3: Using innerHTML
    const listItemsHTML = navigationData.map(item => `<li>${item.text}</li>`).join('');
    navigationUl.innerHTML = listItemsHTML;
</script>