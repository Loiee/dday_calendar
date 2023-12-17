// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "Thinking warmly of you and your family at this time." },
  { "number": 2, "message": "May the miracle of Christmas fill your heart with warmth and love." },
  { "number": 3, "message": "Wishing You a Holiday filled with Warmth, Love and Joy." },
  { "number": 4, "message": "Wishing you a wonderful Christmas filled with joy and laughter." },
  { "number": 5, "message": "May the Light of Christmas fill your life!" },
  { "number": 6, "message": "I am so thankful for having a friend like you." },
  { "number": 7, "message": "Fill your home with joy." },
  { "number": 8, "message": "Hope your stocking is stuffed full of joy this year." },
  { "number": 9, "message": "Peace, joy, and love to you and your family." },
  { "number": 10, "message": "Wishing you peace and blessings this Christmas." },
  { "number": 11, "message": "Happy Christmas and all the best to you in the year to come!" },
  { "number": 12, "message": "Wishing you unlimited joy and infinite fun at Christmas and always!" },
  { "number": 13, "message": "May your fun be large and bills be small this year." },
  { "number": 14, "message": "Hope you spend a peaceful time with your family at Christmas and always." },
  { "number": 15, "message": "May this Christmas be the best holiday ever." },
  { "number": 16, "message": "Merry Christmas with lots of love." },
  { "number": 17, "message": "I hope all of your Christmas wishes come true." },
  { "number": 18, "message": "I hope your holiday season is full of peace joy and happiness." },
  { "number": 19, "message": "Wishing you warmth and good cheer." },
  { "number": 20, "message": "Have a warm Christmas with your family!" },
  { "number": 21, "message": "Have a peaceful Christmas filled with abundant blessings!" },
  { "number": 22, "message": "Wishing you good tidings." },
  { "number": 23, "message": "I hope all your goals and dreams will be fulfilled in the New Year." },
  { "number": 24, "message": "Missing you and hope to see you in the new year." }
];
