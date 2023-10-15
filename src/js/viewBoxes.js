const svgs = document.querySelectorAll('svg');

svgs.forEach(el => {
    const width = el.getAttribute('width');
    const height = el.getAttribute('height');

    el.setAttribute('viewBox', `0 0 ${width} ${height}`)
})