let links = document.querySelector(".main");
let hamborger = document.getElementById("hamborger");
let span = document.querySelectorAll(".hamborger span");
hamborger.addEventListener("click", function(){
    links.classList.toggle("active");
    hamborger.classList.toggle("active");
    if(span[0].style.backgroundColor === "white"){
        span[0].style.backgroundColor = "black";
        span[1].style.backgroundColor = "black";
        span[2].style.backgroundColor = "black";
    }else{
        span[0].style.backgroundColor = "white";
        span[1].style.backgroundColor = "white";
        span[2].style.backgroundColor = "white";
    }
});

// Model

// اختر كل الأزرار
const buyButtons = document.querySelectorAll('.btn-prodect');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const prodect = button.parentElement;
        const modal = prodect.querySelector('.prodect-modal');
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10); // لتفعيل التكبير
    });
});

// إغلاق المودال
const modals = document.querySelectorAll('.prodect-modal');
modals.forEach(modal => {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300); // بعد انتهاء التكبير
    });

    // اغلاق عند الضغط خارج المحتوى
    modal.addEventListener('click', e => {
        if(e.target === modal){
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    });
});
