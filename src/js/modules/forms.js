import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          modal = document.querySelectorAll('[data-modal]');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Отправка данных',
        success: 'Спасибо, мы скоро с Вами свяжемся',
        failure: 'Что-то пошло не так'
    };


    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    form.forEach(item => {
       item.addEventListener('submit', (e) => {
           e.preventDefault();

           const statusMessage = document.createElement('div');
           statusMessage.classList.add('status');
           item.append(statusMessage);

           const formData = new FormData(item);
           if (item.getAttribute('data-calc') === "end") {
               for (let key in state) {
                   formData.append(key, state[key]);
               }
           }

           postData('assets/server.php', formData)
           .then(res => {
               console.log(res);
               statusMessage.textContent = message.success;
           }).catch(() => {
               statusMessage.textContent = message.failure;
           }).finally(() => {
               inputs.forEach(input => {
                   input.value = '';
               });
               
               setTimeout(() => {
                   statusMessage.remove();
                   modal.forEach(item => {
                       item.style.display = 'none';
                       document.body.style.overflow = '';
                   });
                   
               }, 2000);
           });
       });
   });
};

export default forms;