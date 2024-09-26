
const ProductsData = [
    {
        img:'./img/img-card1.png',
        title: '3D Soft Curves',
        user: '😀 Esther Howard',
        price: '0.85'
    },

    {
        img: "./img/img-card2.png",
        title: 'The mystery of the black square',
        user: '🤡 Jenny Wilson',
        price: '0.24 ETH'
    },

    {
        img: "./img/img-card3.png",
        title: 'Pink Cloud 🌥',
        user: '😧 Floyd Miles',
        price: '0.3 ETH'
    },

    {
        img: "./img/img-card4.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },
]


const ProductsData2 = [
    {
        img: "./img/img-live1.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live2.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live3.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live4.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live5.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live6.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live7.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live8.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live9.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live10.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live11.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live12.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },
]


const wrapper = document.querySelector('.live__wrapper1')
const cards = ProductsData.map(card => {
    return `
         <div class="live__card">
                    <img src=${card.img} alt="" class="live-card-img">
                    <div class="live__card-box">
                        <h3>${card.title}</h3>

                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b>${card.price} ETH</b>

                            </p>
                        </div>
                    </div>
                </div>
    `
}).join('')
wrapper.innerHTML = cards






const wrapper2 = document.querySelector('.live__wrapper2')
const cards2 = ProductsData2.map(card => {
    return `
         <div class="live__card">
                    <img src=${card.img} alt="" class="live-card-img">
                    <div class="live__card-box">
                        <h3>${card.title}</h3>

                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b>${card.price} ETH</b>

                            </p>
                        </div>
                    </div>
                </div>
    `
}).join('')
wrapper2.innerHTML = cards2




const modal = document.querySelector('.modal')
const openModal = document.querySelector('#open-btn')
const closeModal = document.querySelector('.close')

openModal.onclick = () => {
    modal.classList.add('active')
}

closeModal.onclick = () => {
    modal.classList.remove('active')
}


document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();
 
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '6880452962:AAFtzPSvDWDuVRQ2KloHBt2Rv6yt4bauuUc';  // Замените на ваш токен
    const chat_id = '-4595320926';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
 
    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;
 
    const data = {
      chat_id: chat_id,
      text: message
    };
 
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Message sent!");
        location.reload()
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });


  const theme = document.querySelector('#theme')
  const body = document.querySelector('body')

  theme .onclick = () => {
    body.classList.toggle('dark')
    
  }