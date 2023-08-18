var tttoast__container;

tttoast__container = document.createElement('div');
tttoast__container.id = 'tttoast__container';
tttoast__container.classList.add('tttoast__container');
document.body.append(tttoast__container);

function tttoast__show(message) {
  var toastElem, timeout;

  toastElem = document.createElement('div');
  toastElem.classList.add('tttoast__toast', 'tttoast__toast-hidden');

  var toastMessage = document.createElement('span');
  toastMessage.classList.add('tttoast__toast-message-text');
  toastMessage.textContent = message;
  toastElem.append(toastMessage);
  
  var toastClose = document.createElement('button');
  toastClose.classList.add('tttoast__close-btn');
  toastClose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="18" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
  toastClose.addEventListener('click', removeToast);
  toastElem.append(toastClose);

  tttoast__container.append(toastElem);

  setTimeout(() => {
    toastElem.classList.remove('tttoast__toast-hidden');
  }, 1);

  setTimeout(removeToast, 3000);

  function removeToast() {
    clearTimeout(timeout);
    toastElem.classList.add('tttoast__toast-hidden');
    setTimeout(() => { if (toastElem) { toastElem.remove(); } }, 500);
  }
}
