campo.addEventListener('input', () => {
    const texto = campo.value.toLowerCase();
    console.log("Texto da pesquisa:", texto);  // Adicione isso para depuração
    lista.innerHTML = '';
  
    const filtrados = animatronics.filter(anim =>
      anim.nome.toLowerCase().includes(texto)
    );
  
    if (filtrados.length === 0) {
      const item = document.createElement('li');
      item.textContent = 'Nenhum animatronic encontrado.';
      item.classList.add('sem-resultado');
      lista.appendChild(item);
      return;
    }
  
    filtrados.forEach(anim => {
      const item = document.createElement('li');
      item.textContent = anim.nome;
      item.classList.add('resultado-item');
  
      item.addEventListener('click', () => {
        window.location.href = anim.pagina;
      });
  
      lista.appendChild(item);
    });
});




  
  
