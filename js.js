const labels = document.querySelectorAll('.form-section label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay:${index * 45}ms">${letter}</span>`)
    .join('')
})