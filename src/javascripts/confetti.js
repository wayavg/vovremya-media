export function startConfetti(startX, startY) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];
    const numberOfPieces = 45; // Количество частичек при одном клике
    
    // Твоя палитра цветов
    const colors = [
        "#0B1956", "#003273", "#044B9C", "#3366C1", 
        "#5882E3", "#7CA0FF", "#A2BFFF", "#C8DFFF", 
        "#EAF4FF", "#FFFFFF", "#FFF7E4", "#F8F4EB"
    ];

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        pieces.forEach((p, i) => {
            // Движение
            p.yVel += p.gravity; // Гравитация тянет частицу вниз (увеличивает yVel)
            p.y += p.yVel;       // Применяем скорость к координате Y
            p.x += p.drift;
            
            // Плавное затухание (частички исчезают со временем)
            p.opacity -= 0.015;

            ctx.save();
            ctx.globalAlpha = p.opacity; // Применяем прозрачность
            ctx.fillStyle = p.color;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            // Удаляем частицу, если она улетела или стала прозрачной
            if (p.y > canvas.height || p.opacity <= 0 || p.x < -50) {
                pieces.splice(i, 1);
            }
        });

        if (pieces.length > 0) {
            requestAnimationFrame(update);
        }
    }

    // Создаем взрыв частиц из координат чекбокса
    for (let i = 0; i < numberOfPieces; i++) {
        pieces.push({
            x: startX,
            y: startY,
            size: Math.random() * 7 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            drift: Math.random() * -6 - 2,     // Скорость влево (от -2 до -8)
            yVel: Math.random() * -5 - 5,    // Начальный мощный прыжок ВВЕРХ (от -5 до -15)
            gravity: 0.5,  
            rotation: Math.random() * Math.PI,
            spin: Math.random() * 0.2,
            opacity: 1
        });
        
        // Придаем начальный импульс "взрыва"
        pieces[i].y += pieces[i].yVel;
    }

    update();
}
