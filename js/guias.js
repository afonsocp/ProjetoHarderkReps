console.log('Script carregado');

// Verificar se já existe algum manipulador de eventos global
if (window.modalHandler) {
    console.warn('Já existe um manipulador de modal definido!');
}

// Namespace seguro para nosso código
window.modalHandler = {
    init: function() {
        console.log('Inicializando modal handler...');
        
        // Selecionar elementos
        const modal = document.getElementById('guideModal');
        const btn = document.querySelector('[data-guide="rastreio"]');
        const closeBtn = document.querySelector('.close-modal');

        if (!modal) console.error('Modal não encontrado!');
        if (!btn) console.error('Botão rastreio não encontrado!');
        if (!closeBtn) console.error('Botão fechar não encontrado!');

        // Abrir modal
        if (btn) {
            console.log('Adicionando evento de clique ao botão...');
            btn.onclick = function() {
                console.log('Botão clicado!');
                if (modal) {
                    modal.style.display = 'block';
                    console.log('Modal aberto!');
                }
            }
        }

        // Fechar modal
        if (closeBtn) {
            closeBtn.onclick = function() {
                if (modal) {
                    modal.style.display = 'none';
                    console.log('Modal fechado pelo botão X');
                }
            }
        }

        // Fechar ao clicar fora
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                console.log('Modal fechado por clique externo');
            }
        }
    }
};

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, iniciando modalHandler...');
    window.modalHandler.init();

    // Elementos
    const modal = document.getElementById('guideModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const videoContainer = modal.querySelector('.video-container');
    const textContainer = modal.querySelector('.text-container');

    // Conteúdo dos guias
    const guideContents = {
        'rastreio': {
            title: 'Rastrear seu Pacote',
            content: `
                <div class="guide-content">
                    <p>Para rastrear seu pacote é bem simples:</p>
                    <ol>
                        <li>Clique em "My int'l Parcels" no menu lateral</li>
                        <li>Em seguida, clique na setinha ao lado do frete conforme mostrado na imagem abaixo:</li>
                    </ol>
                    
                    <div class="guide-image">
                        <img src="img/rastreamento.png" alt="Como rastrear seu pacote" style="max-width: 100%; border-radius: 8px; margin: 30px 0; border: 1px solid #0084ff;">
                    </div>

                    <p>Ao clicar, você verá onde seu pacote se encontra atualmente.</p>
                    
                    <div class="additional-info">
                        <p>Você também pode usar o 17track para acompanhar seu pacote:</p>
                        <a href="https://m.17track.net/pt/track" target="_blank" class="track-link" style="color: #0084ff; text-decoration: none; display: inline-block; margin: 10px 0;">17Track - Rastreamento</a>
                    </div>

                    <div class="important-note" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <strong style="color: #ff9800;">IMPORTANTE:</strong>
                        <p>O pacote só vai atualizar no site dos correios quando <strong>CHEGAR NO BRASIL</strong>. Antes disso só vai aparecer como "objeto postado".</p>
                    </div>
                </div>
            `
        },
        'yupoo': {
            title: 'Comprar pela Yupoo',
            video: 'https://www.youtube.com/embed/v_Cls_9mfOU',
            content: `<div class="important-note" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <strong style="color: #ff9800;">IMPORTANTE:</strong>
                        <p>Caso esteja comprando um produto de marca, não coloque a marca do produto em NENHUM lugar.</p>
                    </div>`
        },
        'reddit': {
            title: 'Fórums do Reddit',
            content: `
                <div class="guide-content">
                    <div class="video-container" style="margin-bottom: 30px;">
                        <iframe src="https://www.youtube.com/embed/L6zciupt-gU" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>

                    <p>Abaixo você encontra os principais subreddits organizados por categoria. Clique nos links para acessar:</p>

                    <div class="reddit-categories">
                        <div class="reddit-category">
                            <h3><i class="fas fa-tshirt"></i> Moda Geral</h3>
                            <ul>
                                <li><a href="https://reddit.com/r/FashionReps" target="_blank">r/FashionReps</a> - Comunidade principal de réplicas</li>
                                <li><a href="https://reddit.com/r/DesignerReps" target="_blank">r/DesignerReps</a> - Foco em marcas de luxo</li>
                                <li><a href="https://reddit.com/r/LuxuryReps" target="_blank">r/LuxuryReps</a> - Itens de luxo premium</li>
                                <li><a href="https://reddit.com/r/QualityReps" target="_blank">r/QualityReps</a> - Réplicas de alta qualidade</li>
                            </ul>
                        </div>

                        <div class="reddit-category">
                            <h3><i class="fas fa-dollar-sign"></i> Economia</h3>
                            <ul>
                                <li><a href="https://reddit.com/r/1688Reps" target="_blank">r/1688Reps</a> - Fornecedores do 1688</li>
                                <li><a href="https://reddit.com/r/Repbudgetfashion" target="_blank">r/Repbudgetfashion</a> - Moda econômica</li>
                                <li><a href="https://reddit.com/r/Repbudgetsneakers" target="_blank">r/Repbudgetsneakers</a> - Tênis econômicos</li>
                                <li><a href="https://reddit.com/r/WeidianWarriors" target="_blank">r/WeidianWarriors</a> - Achados do Weidian</li>
                            </ul>
                        </div>

                        <div class="reddit-category">
                            <h3><i class="fas fa-shoe-prints"></i> Tênis</h3>
                            <ul>
                                <li><a href="https://reddit.com/r/Repweidiansneakers" target="_blank">r/Repweidiansneakers</a> - Tênis do Weidian</li>
                                <li><a href="https://reddit.com/r/KobeReps" target="_blank">r/KobeReps</a> - Tênis Kobe Bryant</li>
                            </ul>
                        </div>

                        <div class="reddit-category">
                            <h3><i class="fas fa-star"></i> Especializados</h3>
                            <ul>
                                <li><a href="https://reddit.com/r/DecorReps" target="_blank">r/DecorReps</a> - Decoração</li>
                                <li><a href="https://reddit.com/r/AirReps" target="_blank">r/AirReps</a> - AirPods e fones</li>
                                <li><a href="https://reddit.com/r/SIreps" target="_blank">r/SIreps</a> - Stone Island</li>
                                <li><a href="https://reddit.com/r/Flexicas" target="_blank">r/Flexicas</a> - Comunidade geral</li>
                            </ul>
                        </div>
                    </div>

                    <div class="reddit-tip" style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                        <strong style="color: #ff9800;"><i class="fas fa-lightbulb"></i> Dica:</strong>
                        <p>Para uma melhor experiência, use o Reddit em um computador.</p>
                    </div>
                </div>
            `
        },
        'recarga': {
            title: 'Recarga',
            video: 'https://www.youtube.com/embed/iXt0H1QNML4',
            content: `<a href="https://bytemax.exchange?ref=HARD10" target="_blank" class="track-link" style="background-color: #0084ff; color: white; text-decoration: none; display: inline-block; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin: 15px 0; box-shadow: 0 4px 15px rgba(0, 132, 255, 0.3); transition: all 0.3s ease;">Link do ByteMax</a>
                    <div class="important-note" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <strong style="color: #ff9800;">IMPORTANTE:</strong>
                        <p>Não esqueça de colocar o seu úsuario da Cssbuy corretamente na hora de recarregar.</p>
                    </div>`
        },
        'glossario': {
            title: 'Glosário',
            content: `
                <div class="guide-content">
                    <p>Aqui você encontra os principais termos utilizados no mundo das réplicas:</p>

                    <div class="glossary-terms">
                        <div class="glossary-item">
                            <h3><i class="fas fa-search"></i> QC / Quality Check</h3>
                            <p>Termo utilizado para solicitar uma análise da qualidade de um produto com base nas fotos, ou muitas vezes usado para indicar se o produto já possui fotos ou não.</p>
                        </div>

                        <div class="glossary-item">
                            <h3><i class="fas fa-check-circle" style="color: #4CAF50;"></i> GL / Green Light</h3>
                            <p>Utilizado no mundo das RP para indicar que um produto possui boa qualidade, tanto externa quanto interna. Quando alguém diz que um produto está GL, significa que é um excelente produto pelo valor pago.</p>
                        </div>

                        <div class="glossary-item">
                            <h3><i class="fas fa-times-circle" style="color: #f44336;"></i> RL / Red Light</h3>
                            <p>Ao contrário do GL, o RL indica que um produto não está bom.</p>
                        </div>

                        <div class="glossary-item">
                            <h3><i class="fas fa-certificate"></i> LC / Legit Check</h3>
                            <p>Termo utilizado por pessoas que costumam comprar produtos originais e desejam verificar se o produto é realmente autêntico, seja um tênis ou uma roupa.</p>
                        </div>

                        <div class="glossary-item">
                            <h3><i class="fas fa-link"></i> W2C / Where to Cop</h3>
                            <p>Termo usado quando um membro solicita um link de um produto.</p>
                        </div>

                        <div class="glossary-item">
                            <h3><i class="fas fa-layer-group"></i> Batch / Versão</h3>
                            <p>Utilizado para determinar o nível de qualidade do produto, onde foi produzido e qual é a sua versão. A compreensão é mais prática quando relacionamos a batch com o nível de qualidade do produto. (Muito utilizado em sneakers)</p>
                        </div>

                        <div class="glossary-item">
                            <h3><i class="fas fa-ruler"></i> TTS / True To Size</h3>
                            <p>Em alguns casos, alguns pares podem apresentar uma forma maior ou menor do que a convencional em sua construção. Isso NÃO ESTÁ relacionado às linhas de produção na China, mas sim às próprias produções de pares originais. Portanto, é possível que alguns modelos apresentem diferenças de tamanho.</p>
                        </div>

                        <div class="glossary-item">
                            <h3><i class="fas fa-piggy-bank"></i> Budget / Custo Benefício</h3>
                            <p>Dentro do mercado das RP, principalmente de tênis, o termo budget é usado para se referir a um produto de baixo custo, com qualidade média esperada. É um produto adquirido quando o consumidor não pode ou não deseja gastar muito em um par de qualidade mediana ou da melhor qualidade.</p>
                        </div>

                        <div class="glossary-item">
                            <h3><i class="fas fa-store"></i> Retail / Varejo</h3>
                            <p>Preço praticado no mercado, ou seja, o preço real do produto.</p>
                        </div>

                        <div class="glossary-item">
                            <h3><i class="fas fa-exchange-alt"></i> Resell / Revenda</h3>
                            <p>Como o próprio nome sugere, é o valor de revenda.</p>
                        </div>

                        <div class="glossary-item">
                            <h3><i class="fas fa-exclamation-triangle"></i> B Grade / Segunda Linha</h3>
                            <p>Produtos B grade ou de segunda linha normalmente são aqueles que não passam pelo controle de qualidade das fábricas. Alguns vendedores trabalham com linhas de produtos B grade, e na maioria das vezes, esses produtos tendem a possuir pequenas falhas externas, como marcas de cola, pontas soltas, excesso de material ou material defeituoso em algum ponto, entre outros.</p>
                        </div>
                    </div>
                </div>
            `
        },
        'batches': {
            title: 'Guia de Batches',
            content: `
                <div class="sneaker-batches">
                    <!-- Air Jordan 1 -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Air Jordan 1</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>LJR Batch</p>
                            <p class="price">¥450-500</p>
                        </div>
                        <div class="batch-tier mid-tier">
                            <h4>Mid Tier</h4>
                            <p>DG Batch</p>
                            <p class="price">¥300-350</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>DT Batch</p>
                            <p class="price">¥200-250</p>
                        </div>
                    </div>

                    <!-- Air Jordan 4 -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Air Jordan 4</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>GX Batch</p>
                            <p class="price">¥450-500</p>
                        </div>
                        <div class="batch-tier mid-tier">
                            <h4>Mid Tier</h4>
                            <p>KX Batch</p>
                            <p class="price">¥300-350</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>TG Batch</p>
                            <p class="price">¥200-250</p>
                        </div>
                    </div>

                    <!-- Yeezy 350 V2 -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Yeezy 350 V2</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>LW Batch</p>
                            <p class="price">¥400-450</p>
                        </div>
                        <div class="batch-tier mid-tier">
                            <h4>Mid Tier</h4>
                            <p>OG Batch</p>
                            <p class="price">¥250-300</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>DT Batch</p>
                            <p class="price">¥150-200</p>
                        </div>
                    </div>

                    <!-- Dunk Low -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Dunk Low</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>M Batch</p>
                            <p class="price">¥300-400</p>
                        </div>
                        <div class="batch-tier mid-tier">
                            <h4>Mid Tier</h4>
                            <p>VT Batch</p>
                            <p class="price">¥100-200</p>
                        </div>
                    </div>

                    <!-- Air Force 1 -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Air Force 1</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>XP Batch</p>
                            <p class="price">¥200-250</p>
                        </div>
                        <div class="batch-tier mid-tier">
                            <h4>Mid Tier</h4>
                            <p>G Batch</p>
                            <p class="price">¥100-200</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>DT Batch</p>
                            <p class="price">¥120-150</p>
                        </div>
                    </div>

                    <!-- Yeezy 700 -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Yeezy 700</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>LW Batch</p>
                            <p class="price">¥400-500</p>
                        </div>
                        <div class="batch-tier mid-tier">
                            <h4>Mid Tier</h4>
                            <p>OG Batch</p>
                            <p class="price">¥300-350</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>X Batch</p>
                            <p class="price">¥200-250</p>
                        </div>
                    </div>

                    <!-- Air Jordan 11 -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Air Jordan 11</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>LJR Batch</p>
                            <p class="price">¥450-500</p>
                        </div>
                        <div class="batch-tier mid-tier">
                            <h4>Mid Tier</h4>
                            <p>DG Batch</p>
                            <p class="price">¥300-350</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>DT Batch</p>
                            <p class="price">¥200-250</p>
                        </div>
                    </div>

                    <!-- Yeezy 500 -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Yeezy 500</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>LW Batch</p>
                            <p class="price">¥400-450</p>
                        </div>
                        <div class="batch-tier mid-tier">
                            <h4>Mid Tier</h4>
                            <p>OG Batch</p>
                            <p class="price">¥250-300</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>X Batch</p>
                            <p class="price">¥180-220</p>
                        </div>
                    </div>

                    <!-- Air Jordan 3 -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Air Jordan 3</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>GX Batch</p>
                            <p class="price">¥400-450</p>
                        </div>
                        <div class="batch-tier mid-tier">
                            <h4>Mid Tier</h4>
                            <p>DG Batch</p>
                            <p class="price">¥250-300</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>DT Batch</p>
                            <p class="price">¥180-220</p>
                        </div>
                    </div>

                    <!-- Yeezy Slide -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Yeezy Slide</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>LW Batch</p>
                            <p class="price">¥100-150</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>LW B GRADE Batch</p>
                            <p class="price">¥50-100</p>
                        </div>
                    </div>

                    <!-- Air Jordan 6 -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Air Jordan 6</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>LJR Batch</p>
                            <p class="price">¥450-500</p>
                        </div>
                        <div class="batch-tier mid-tier">
                            <h4>Mid Tier</h4>
                            <p>DG Batch</p>
                            <p class="price">¥300-350</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>DT Batch</p>
                            <p class="price">¥200-250</p>
                        </div>
                    </div>

                    <!-- Yeezy Foam Runner -->
                    <div class="sneaker-item">
                        <h3><i class="fas fa-shoe-prints"></i> Yeezy Foam Runner</h3>
                        <div class="batch-tier top-tier">
                            <h4>Top Tier</h4>
                            <p>LW Batch</p>
                            <p class="price">¥100-250</p>
                        </div>
                        <div class="batch-tier budget-tier">
                            <h4>Budget</h4>
                            <p>LW B GRADE Batch</p>
                            <p class="price">¥55-100</p>
                        </div>
                    </div>
                </div>
                <div class="important-note" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <strong style="color: #ff9800;">IMPORTANTE:</strong>
                        <p>As batches acima podem sofrer alterações com o tempo, por isso, sempre verifique o preço antes de comprar.</p>
                </div>
            `
        }
    };

    // Função para carregar o conteúdo do modal
    function loadModalContent(guide) {
        modalTitle.textContent = guide.title;
        
        // Limpar containers
        videoContainer.innerHTML = '';
        textContainer.innerHTML = '';
        
        // Adicionar vídeo se existir
        if (guide.video) {
            const iframe = document.createElement('iframe');
            iframe.src = guide.video;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            videoContainer.appendChild(iframe);
            videoContainer.style.display = 'block';
        } else {
            videoContainer.style.display = 'none';
        }
        
        // Adicionar texto
        if (guide.content) {
            textContainer.innerHTML = guide.content;
        }
    }

    // Adicionar evento de clique para todos os botões
    document.querySelectorAll('.guide-link').forEach(button => {
        button.onclick = function() {
            const guideType = this.getAttribute('data-guide');
            const guide = guideContents[guideType];
            
            if (guide) {
                loadModalContent(guide);
                modal.style.display = 'block';
            }
        }
    });

    // Fechar modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        // Parar o vídeo ao fechar o modal
        videoContainer.innerHTML = '';
    }

    // Fechar ao clicar fora
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            // Parar o vídeo ao fechar o modal
            videoContainer.innerHTML = '';
        }
    }
});