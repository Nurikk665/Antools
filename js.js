let lastOpenedFormId = null;
    let popup = (formId) => {
        let formbox = document.getElementById(formId);
        if (lastOpenedFormId && lastOpenedFormId !== formId) {
            let lastOpenedForm = document.getElementById(lastOpenedFormId);
            lastOpenedForm.classList.remove('active');
        }
        formbox.classList.toggle('active');
        lastOpenedFormId = formbox.classList.contains('active') ? formId : null;
    }

    let burger = document.querySelector('.burger')
    let burgerBtn = document.querySelector('.burger__btn')
    
    
    let toggleBurger = ()=>{
        burger.classList.toggle('actives')
        burgerBtn.classList.toggle('actives')
    }