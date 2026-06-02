setInterval(() => {
    const date = new Date();
    const heures = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const secondes = date.getSeconds().toString().padStart(2, '0');
    console.log(`${heures}:${minutes}:${secondes}`);
    }, 1000);