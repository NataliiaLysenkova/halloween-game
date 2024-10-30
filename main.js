        const btnPlay = document.querySelector('.btn.play');
        const container = document.querySelector('.container');

        // Масив зображень для випадкового вибору
        const trickImages = [
            'img/ghost-holding-pumpkin-with-sweets.webp',
            'img/cute-ghost-and-pumpkin.png',
            'img/spider.webp'
        ];

        //Trick Page
        function createTrickContent() {
            // Очищуємо контейнер
            container.innerHTML = '';

            const trickBanner = document.createElement('div');
            trickBanner.classList.add('trick-banner');
            const trickBannerContent = document.createElement('div');
            trickBannerContent.classList.add('trick-banner-content');
            const trickHeading1 = document.createElement('h1');
            trickHeading1.classList.add('trick-heading');
            trickHeading1.textContent = `Let's`;
            const trickBtn = document.createElement('button');
            trickBtn.classList.add('trick-btn');
            trickBtn.textContent = `Play`;
            const trickHeading2 = document.createElement('h1');
            trickHeading2.classList.add('trick-heading');
            trickHeading2.textContent = `again!`;
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add ('img-wrapper');
            const trickImage = document.createElement('img');
            trickImage.classList.add('trick-image');

            // Додаємо фонове зображення через стиль
            trickBanner.style.backgroundImage = 'url("img/ghost.webp")';
            trickBanner.style.maxWidth = '500px';
            trickBanner.style.minHeight = '100vh';
            trickBanner.style.backgroundSize = 'cover';
            trickBanner.style.backgroundRepeat = 'no-repeat';
            trickBanner.style.backgroundPosition = 'top center';
            trickBanner.style.display = 'flex';
            trickBanner.style.flexDirection = 'column';
            trickBanner.style.justifyContent = 'space-between';

            // Стилі для trickBannerContent
            trickBannerContent.style.padding = '20px 16px 10px';
            trickBannerContent.style.display = 'flex';
            trickBannerContent.style.justifyContent = 'space-around';

            // Стилі для заголовків
            trickHeading1.style.color = 'rgb(205, 222, 236)';
            trickHeading2.style.color = 'rgb(205, 222, 236)';

            // Стилі для кнопки
            trickBtn.style.fontFamily = '"Mystery Quest", system-ui';
            trickBtn.style.width = 'max-content';
            trickBtn.style.padding = '2rem';
            trickBtn.style.borderRadius = '50%';
            trickBtn.style.border = 'none';
            trickBtn.style.animation = 'move 2s linear infinite';
            trickBtn.style.backgroundImage = 'url("img/moon.avif")';
            trickBtn.style.backgroundSize = 'cover';
            trickBtn.style.backgroundPosition = 'center';
            trickBtn.style.backgroundRepeat = 'no-repeat';
            trickBtn.style.fontSize = '2rem';
            trickBtn.style.color = 'rgb(6, 68, 118)';
            trickBtn.style.cursor = 'pointer';

            // Стилі для imgWrapper
            imgWrapper.style.width = '40%';
            imgWrapper.style.alignSelf = 'center';

            // Стилі для trickImage
            const randomImage = trickImages[Math.floor(Math.random() * trickImages.length)];  // Випадковий вибір зображення для trickImage
            trickImage.src = randomImage;
            trickImage.style.width = '100%';

            // Додаємо елементи до контейнера
            container.appendChild(trickBanner);
            trickBanner.appendChild(trickBannerContent);
            trickBannerContent.appendChild(trickHeading1);
            trickBannerContent.appendChild(trickBtn);
            trickBannerContent.appendChild(trickHeading2);
            trickBanner.appendChild(imgWrapper);
            imgWrapper.appendChild(trickImage);

            // Додаємо обробник події для кнопки
            trickBtn.addEventListener('click', () => location.reload());

           // Викликаємо applyMediaStyles після додавання елемента до DOM
            applyTrickBannerStyles(trickBanner);
        }

            //Treat Page

        function createTreatContent() {
            // Очищуємо контейнер
            container.innerHTML = '';

            const treatBanner = document.createElement('div');
            treatBanner.classList.add('treat-banner');
            const treatHeading1 = document.createElement('h1');
            treatHeading1.classList.add('treat-heading');
            treatHeading1.textContent = `Congratulations!`;
            const treatHeading2 = document.createElement('h1');
            treatHeading2.classList.add('treat-heading');
            treatHeading2.textContent = `click on your treat`;
            const arrowDown = document.createElement('span');
            arrowDown.classList.add('pointer');  
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('img-wrapper');
            const treatPrize = document.createElement('img');
            treatPrize.classList.add('treat-prize');
            const treatBtn = document.createElement('button');
            treatBtn.classList.add('treat-btn');
            treatBtn.textContent = `Play`;
            const hintText = document.createElement('h2');
            hintText.classList.add('treat-hint-text');
            hintText.textContent = 'to get more sweets!';

            // Додаємо фонове зображення через стиль
            treatBanner.style.backgroundImage = 'url("img/halloween-border.png")'; // Змінити на ваше зображення
            treatBanner.style.maxWidth = '500px';
            treatBanner.style.minHeight = '100vh';
            treatBanner.style.backgroundSize = 'cover';
            treatBanner.style.backgroundRepeat = 'no-repeat';
            treatBanner.style.backgroundPosition = 'top center';
            treatBanner.style.display = 'grid';
            treatBanner.style.gridTemplateColumns = '1fr';
            treatBanner.style.gridTemplateRows = '20% 10% 10% 40% 10% 10%';
            treatBanner.style.justifyItems = 'center';
            treatBanner.style.alignItems = 'center';

            // Стилі для заголовків
            treatHeading1.style.color = 'rgb(245, 135, 38)';
            treatHeading1.style.animation = 'flash 1s ease infinite alternate';
            treatHeading1.style.marginBottom = '0';
            treatHeading2.style.color = 'rgb(0, 0, 0)';
            treatHeading2.style.margin = '0';
            
            // Стилі для стрілки
            arrowDown.style.display = 'block';
            arrowDown.style.width = '3rem';
            arrowDown.style.height = '3rem';
            arrowDown.style.backgroundImage = 'url("img/blue-arrow-down.png")';
            arrowDown.style.backgroundSize = 'contain';
            arrowDown.style.backgroundPosition = 'center';
            arrowDown.style.backgroundRepeat = 'no-repeat';
            arrowDown.style.animation = 'bounce 2s ease infinite';

             // Стилі для imgWrapper
             imgWrapper.style.width = '50%';
             imgWrapper.style.alignSelf = 'center';
 
             // Стилі для treatPrize
             treatPrize.src = 'img/treat.png'; 
             treatPrize.style.width = '100%';
             treatPrize.style.cursor = 'pointer';

            // Додаємо обробник події для анімації конфеті
            treatPrize.addEventListener('click', () => {
            // Викликаємо конфеті
            confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
            });

            // Ефект зменшення при натисканні
            treatPrize.style.transform = 'scale(0.95)';
            setTimeout(() => {
                treatPrize.style.transform = 'scale(1)';
            }, 100);
            });

            // Стилі для кнопки
            treatBtn.style.fontFamily = '"Mystery Quest", system-ui';
            treatBtn.style.width = 'max-content';
            treatBtn.style.height = 'fit-content';
            treatBtn.style.padding = '0.5rem 2rem';
            treatBtn.style.border = '1px solid rgb(255, 255, 255)';
            treatBtn.style.borderRadius = '50%';
            treatBtn.style.animation = 'gelatine 3s linear infinite';
            treatBtn.style.backgroundImage = 'url("img/candy.png")';
            treatBtn.style.backgroundSize = 'contain';
            treatBtn.style.backgroundPosition = 'center';
            treatBtn.style.backgroundRepeat = 'no-repeat';
            treatBtn.style.fontSize = '2rem';
            treatBtn.style.color = 'rgb(0, 0, 0)';
            treatBtn.style.cursor = 'pointer';

            // Стилі для hintText
            hintText.style.color = 'rgb(167, 90, 220)';
           
            // Додаємо елементи до контейнера
            container.appendChild(treatBanner);
            treatBanner.appendChild(treatHeading1);
            treatBanner.appendChild(treatHeading2);
            treatBanner.appendChild(arrowDown);
            treatBanner.appendChild(imgWrapper);
            imgWrapper.appendChild(treatPrize);
            treatBanner.appendChild(treatBtn);
            treatBanner.appendChild(hintText);

            // Додаємо обробник події для кнопки
            treatBtn.addEventListener('click', () => location.reload());

            // Викликаємо applyMediaStyles після додавання елемента до DOM
            applyTreatBannerStyles(treatBanner, arrowDown);

        }

        // Функція для створення нового фону
        function createNewBg() {
            // Випадковий вибір між "trick" і "treat"
            if (Math.random() > 0.5) {
                createTrickContent();
            } else {
                createTreatContent();
            }
        }

        // Додаємо обробник події для кнопки
        btnPlay.addEventListener('click', createNewBg);

        // Додаємо функцію для застосування медіа-запитів
        function applyTrickBannerStyles(trickBanner) {
            const mediaQuerySmall = window.matchMedia('(max-width: 575px)');
            const mediaQueryMedium = window.matchMedia('(max-width: 768px)');
            const mediaQueryLarge = window.matchMedia('(max-width: 1200px)');
        
            function handleTrickMediaChange() {
                if (mediaQuerySmall.matches) {
                    trickBanner.style.width = '100vw';
                } else if (mediaQueryMedium.matches) {
                    trickBanner.style.width = '500px';
                } else if (mediaQueryLarge.matches) {
                    trickBanner.style.width = '500px';
                } else {
                    trickBanner.style.width = '500px';
                }
            }
        
            handleTrickMediaChange();
            mediaQuerySmall.addEventListener('change', handleTrickMediaChange);
            mediaQueryMedium.addEventListener('change', handleTrickMediaChange);
            mediaQueryLarge.addEventListener('change', handleTrickMediaChange);
        }
        
        function applyTreatBannerStyles(treatBanner, arrowDown) {
            const mediaQuerySmall = window.matchMedia('(max-width: 575px)');
            const mediaQueryMedium = window.matchMedia('(max-width: 768px)');
            const mediaQueryLarge = window.matchMedia('(max-width: 1200px)');
        
            function handleTreatMediaChange() {
                if (mediaQuerySmall.matches) {
                    treatBanner.style.width = '100vw';
                    treatBanner.style.gridTemplateRows = '20% 10% 8% 30% 10% 10%';
                    if (arrowDown) {
                        arrowDown.style.width = '2rem';
                        arrowDown.style.height = '2rem';
                    }
                } 
                else if (mediaQueryMedium.matches) {
                    treatBanner.style.width = '500px';
                    treatBanner.style.gridTemplateRows = '20% 10% 10% 35% 10% 10%';
                    if (arrowDown) {
                        arrowDown.style.width = '2rem';
                        arrowDown.style.height = '2rem';
                    }
                } 
                else if (mediaQueryLarge.matches) {
                    treatBanner.style.width = '500px';
                    treatBanner.style.gridTemplateRows = '20% 10% 10% 35% 10% 10%';
                    if (arrowDown) {
                        arrowDown.style.width = '3rem';
                        arrowDown.style.height = '3rem';
                    }
                } 
                else {
                    treatBanner.style.width = '500px';
                    treatBanner.style.gridTemplateRows = '20% 10% 10% 40% 10% 10%';
                    if (arrowDown) {
                        arrowDown.style.width = '3rem';
                        arrowDown.style.height = '3rem';
                    }
                }
            }
        
            handleTreatMediaChange();
            mediaQuerySmall.addEventListener('change', handleTreatMediaChange);
            mediaQueryMedium.addEventListener('change', handleTreatMediaChange);
            mediaQueryLarge.addEventListener('change', handleTreatMediaChange);
        }
        
