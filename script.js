const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

function mostrarAlerta() {
    // Utilize SweetAlert em vez de alert
    Swal.fire({
      title: 'Olá!',
      text: 'Sua mensagem foi enviada com Sucesso. Retornarei o contato em breve!',
      icon: 'success', // Ícone de sucesso, mas você pode personalizar
      confirmButtonText: 'OK'
    });
  }
