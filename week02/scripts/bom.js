const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');
let count = 0;

button.addEventListener('click', () => {

if (count < 10) { 
    const limitMessage = document.querySelector('.limit-message');
    if (limitMessage) {
        limitMessage.remove();
    }
    
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        count++;
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            count--;
            input.focus();
        })
        li.append(deleteButton);
        list.appendChild(li);
        input.value = '';
        input.focus();
        console.log(count);
    }
}

else {
    const existingMessage = document.querySelector('.limit-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const limitMessage = document.createElement('p');
    limitMessage.textContent = 'You have reached the limit of 10 favorite chapters.';
    limitMessage.className = 'limit-message';

    list.after(limitMessage);

    input.value = '';
    input.focus();
}
})


