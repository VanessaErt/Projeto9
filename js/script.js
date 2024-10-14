function changeImage() {
    var imagem = document.getElementById('minha-imagem');
    imagem.src = 'assets/imagem-2.png';
}

function restoreImage() {
    var imagem = document.getElementById('minha-imagem');
    imagem.src = 'assets/imagem-1.png';
}

// Função para expandir ou contrair o texto de cada parágrafo individualmente
function expandText(action, paragraphIndex) {
    var paragraphs = document.querySelectorAll('.home-content p');
    var targetParagraph = paragraphs[paragraphIndex];

    if (!targetParagraph) return; 

    var currentFontSize = parseFloat(window.getComputedStyle(targetParagraph, null).getPropertyValue('font-size'));

    if (action === '+') {
        // Aumenta o tamanho da fonte
        targetParagraph.style.fontSize = (currentFontSize + 2) + 'px';
    } else if (action === '-') {
        // Reduz o tamanho da fonte (com limite mínimo de 12px)
        if (currentFontSize > 12) {
            targetParagraph.style.fontSize = (currentFontSize - 2) + 'px';
        }
    }
}

