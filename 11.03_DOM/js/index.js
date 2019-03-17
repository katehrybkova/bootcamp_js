let title = document.createElement('h2');
title.classList.add('red-text');
title.textContent = 'HEELLO MY FRIEND';
let div = document.querySelector('.sec')
div.append(title)

title.insertAdjacentHTML('beforebegin', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis perspiciatis, provident animi unde repellat praesentium laborum sunt reprehenderit temporibus voluptate accusamus ratione repudiandae nihil necessitatibus, error eum. Explicabo, magnam.</p>');
let image = document.createElement('img');
div.append(image)
image.src = 'http://dogipedia.ru/wp-content/uploads/2018/06/Pochemu-ot-sobaki-pahnet-psinoj-e1529255129927.jpg';
image.style.display = 'block';
image.style.margin = 'auto';
image.style.backgroundColor = 'brown'
image.style.padding = '20px';
