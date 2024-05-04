let lightmodeBtn = document.getElementById('lightmodeBtn')
let darkmodeBtn = document.getElementById('darkmodeBtn')

darkmodeBtn.addEventListener('click', function(){
    document.documentElement.setAttribute('data-bs-theme', 'dark')
})

lightmodeBtn.addEventListener('click', function(){
    document.documentElement.setAttribute('data-bs-theme', 'light')
})