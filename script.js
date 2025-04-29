 document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');
    const sections = document.querySelectorAll('section');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        // Primeiro, processa todos os cards
        sections.forEach(section => {
            let hasVisibleProducts = false;
            const sectionCards = section.querySelectorAll('.product-card');

            sectionCards.forEach(card => {
                const productName = card.querySelector('.product-name').textContent.toLowerCase();
                const shouldShow = productName.includes(searchTerm);
                
                if (shouldShow) {
                    card.style.display = '';
                    card.style.opacity = '1';
                    hasVisibleProducts = true;
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        if (!productName.includes(searchInput.value.toLowerCase().trim())) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });

            // Controla a visibilidade da seção
            if (hasVisibleProducts) {
                section.style.display = '';
                section.style.opacity = '1';
            } else {
                section.style.opacity = '0';
                setTimeout(() => {
                    if (!hasVisibleProducts) {
                        section.style.display = 'none';
                    }
                }, 300);
            }
        });
    });

    // Adiciona evento para resetar quando a busca estiver vazia
    searchInput.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            sections.forEach(section => {
                section.style.display = '';
                section.style.opacity = '1';
                
                const sectionCards = section.querySelectorAll('.product-card');
                sectionCards.forEach(card => {
                    card.style.display = '';
                    card.style.opacity = '1';
                });
            });
        }
    });

    // Código novo dos favoritos
    loadFavorites();
    
    // Adiciona botão flutuante de favoritos
    const favButton = document.createElement('button');
    favButton.className = 'favorites-toggle';
    favButton.innerHTML = '<i class="fas fa-heart"></i>';
    favButton.onclick = toggleFavoritesSection;
    document.body.appendChild(favButton);
});

// Funções para gerenciar favoritos
function toggleFavorite(card) {
    const productId = card.dataset.productId;
    const favorites = getFavorites();
    const allMatchingCards = document.querySelectorAll(`[data-product-id="${productId}"]`);

    if (favorites.includes(productId)) {
        // Remove dos favoritos
        removeFavorite(productId);
        allMatchingCards.forEach(matchingCard => {
            matchingCard.querySelector('.favorite-btn').classList.remove('active');
        });
    } else {
        // Adiciona aos favoritos
        addFavorite(productId);
        allMatchingCards.forEach(matchingCard => {
            matchingCard.querySelector('.favorite-btn').classList.add('active');
        });
    }

    updateFavoritesSection();
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

function addFavorite(productId) {
    const favorites = getFavorites();
    if (!favorites.includes(productId)) {
        favorites.push(productId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function removeFavorite(productId) {
    const favorites = getFavorites();
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function loadFavorites() {
    const favorites = getFavorites();
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        if (favorites.includes(card.dataset.productId)) {
            card.querySelector('.favorite-btn').classList.add('active');
        }
    });

    updateFavoritesSection();
}

function updateFavoritesSection() {
    const favorites = getFavorites();
    const favoritesContainer = document.getElementById('favorites-container');
    
    // Remove a seção antiga se existir
    const oldSection = document.getElementById('favorites-section');
    if (oldSection) {
        oldSection.remove();
    }
    
    if (favorites.length > 0) {
        // Cria a seção de favoritos
        const favoritesSection = document.createElement('section');
        favoritesSection.id = 'favorites-section';
        favoritesSection.style.display = 'block'; // Garante que a seção esteja visível
        
        // Cria o cabeçalho
        const header = document.createElement('h2');
        header.innerHTML = '<i class="fas fa-heart"></i> Favoritos';
        favoritesSection.appendChild(header);
        
        // Cria a grade de produtos
        const favoritesGrid = document.createElement('div');
        favoritesGrid.className = 'product-grid';
        favoritesGrid.id = 'favorites-grid';
        
        // Adiciona cada produto favorito à grade
        favorites.forEach(productId => {
            const originalCard = document.querySelector(`[data-product-id="${productId}"]`);
            if (originalCard) {
                const clone = originalCard.cloneNode(true);
                // Garante que o evento de favorito funcione no clone
                const favBtn = clone.querySelector('.favorite-btn');
                favBtn.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(clone);
                };
                favoritesGrid.appendChild(clone);
            }
        });
        
        favoritesSection.appendChild(favoritesGrid);
        // Insere a seção de favoritos no início do container
        if (favoritesContainer.firstChild) {
            favoritesContainer.insertBefore(favoritesSection, favoritesContainer.firstChild);
        } else {
            favoritesContainer.appendChild(favoritesSection);
        }
    }
}

function toggleFavoritesSection() {
    const favoritesSection = document.getElementById('favorites-section');
    const favorites = getFavorites();
    
    // Só permite mostrar a seção se houver favoritos
    if (favorites.length > 0 && favoritesSection) {
        const isVisible = getComputedStyle(favoritesSection).display !== 'none';
        favoritesSection.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            favoritesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
} 