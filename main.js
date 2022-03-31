"use strict";

const dressgrid = document.querySelector("#dress");
const makeupgrid = document.querySelector("#makeup");

const dressshop = [
  {
    data: [
      "벨라스포사",
      99,
      "드레스1벌, 턱시도1벌 \n 헤어&메이크업(신랑,신부)",
      "신상드레스+서비스, 피팅비 지원 서비스",
    ],
    phone: "0507-1401-5312",
    address: "충남 천안시 서북구 백석로 207",
    worktime: "10:00~19:00 화 휴무",
    page: "http://blog.naver.com/oj0508",
    instagram: "",
  },
  {
    data: [
      "쥬디",
      104,
      "드레스1벌, 턱시도1벌 \n 헤어&메이크업(신랑,신부)",
      "신상드레스+서비스, 피팅비 지원 서비스",
    ],
    phone: "041-574-5841",
    address: "충남 천안시 서북구 미라14길 4",
    worktime: "",
    page: "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%A5%AC%EB%94%94%EC%9B%A8%EB%94%A9&oquery=%EC%A5%AC%EB%94%94&tqi=hCRSBdprvhGssAfoKNZssssss5l-161853",
    instagram: "",
  },
  {
    data: [
      "뮤즈앤코",
      113,
      "드레스1벌, 턱시도1벌 \n 헤어&메이크업(신랑,신부)",
      "신상드레스+서비스, 피팅비 지원 서비스",
    ],
    phone: "0507-1346-2842",
    address: "충남 천안시 동남구 쌍용대로 179 1층 뮤즈앤코",
    worktime: "09:30~19:00 월화 휴무",
    page: "http://ninemusestudio.com/musenco",
    instagram: "https://www.instagram.com/muse_n_co/",
  },
  {
    data: [
      "JM",
      115,
      "드레스1벌, 턱시도1벌 \n 헤어&메이크업(신랑,신부)",
      "피팅비 지원 서비스",
    ],
    phone: "0507-1412-5673",
    address: "충남 천안시 동남구 청수12로 34",
    worktime: "11:00~21:00 휴무X",
    page: "https://www.facebook.com/jisung.kim.3910",
    instagram: "https://www.instagram.com/jm.dress/",
  },

  {
    data: [
      "브리예",
      140,
      "드레스1벌, 턱시도1벌 \n 헤어&메이크업(신랑,신부)",
      "신상드레스+서비스, 피팅비 지원 서비스",
    ],
    phone: "",
    address: "충남 천안시 서북구 성정중4길 39-3",
    worktime: "",
    page: "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%B8%8C%EB%A6%AC%EC%98%88",
    instagram: "",
  },
  {
    data: [
      "르네블랑",
      120,
      "드레스1벌, 턱시도1벌 \n 헤어&메이크업(신랑,신부)",
      "신상드레스+서비스, 피팅비 지원 서비스",
    ],
    phone: "041-909-0113",
    address: "충남 천안시 서북구 불당32길 7 1층",
    worktime: "10:00~19:00 휴무X",
    page: "https://blog.naver.com/NBlogTop.naver?isHttpsRedirect=true&blogId=ameliewedd",
    instagram: "https://www.instagram.com/leneblanc/",
  },
  {
    data: [
      "마샬브라이드",
      120,
      "드레스1벌, 턱시도1벌 \n 헤어&메이크업(신랑,신부)",
      "피팅비 지원 서비스",
    ],
    phone: "0507-1465-8691",
    address: "충남 천안시 서북구 불당29길 19",
    worktime: "10:00~18:00 휴무X",
    page: "https://marshallbride.creatorlink.net/",
    instagram:
      "https://www.instagram.com/accounts/login/?next=/marshallbride_cheonan/",
  },
  {
    data: [
      "아델라브라이드",
      130,
      "드레스1벌, 턱시도1벌 \n 헤어&메이크업(신랑,신부)",
      "피팅비 지원 서비스",
    ],
    phone: "043-715-6030",
    address: "충북 청주시 흥덕구 대농로 70 2층 203호",
    worktime: "09:30~18:30 12:00~13:00휴게시간 화 휴무",
    page: "https://blog.naver.com/promakeup11",
    instagram:
      "https://www.instagram.com/accounts/login/?next=/adelabride_official/",
  },
  {
    data: [
      "마벨르로베",
      120,
      "드레스1벌, 턱시도1벌 \n 헤어&메이크업(신랑,신부)",
      "피팅비 지원 서비스",
    ],
    phone: "0507-1493-7902",
    address: "충북 청주시 상당구 남사로 97-1 1층 마벨르로베",
    worktime: "10:30~18:00 월화 휴무",
    page: "https://blog.naver.com/NBlogTop.naver?isHttpsRedirect=true&blogId=aka0319",
    instagram: "",
  },
  {
    data: [
      "하우스오브에이미",
      245,
      "드레스1벌, 턱시도1벌 \n 헤어&메이크업(신랑,신부)",
      "",
    ],
    phone: "0507-1377-8576",
    address: "서울 강남구 선릉로152길 25 위빌딩 2,3층",
    worktime: "10:00~20:00 일월 휴무",
    page: "http://houseofamy.com/",
    instagram:
      "https://www.instagram.com/accounts/login/?next=/houseofamy_official/",
  },
];
const makeupshop = [
  {
    data: [
      "손수",
      "손수는 투명메이크업으로 유명합니다. 손수만 원장님 부원장님 지정시 추가비가 발생이들어갑니다. 현재 지정예약은 받지않고 있습니다.ㅠㅠ",
    ],
    phone: "0507-1308-4886",
    address: "충북 청주시 흥덕구 강서로 111",
    worktime: "05:00~19:00 휴무X",
    page: "https://blog.naver.com/NBlogTop.naver?isHttpsRedirect=true&blogId=doadoa77",
    instagram:
      "https://www.instagram.com/accounts/login/?next=/sonsoo.makeup_official/",
  },
  {
    data: ["바이윤", "바이윤은 헤어로 유명하구요~"],
    phone: "010-3186-1527",
    address: "충북 청주시 서원구 용호로 66",
    worktime: "09:00~20:00(상담) 월화 휴무",
    page: "https://blog.naver.com/yoon-1213/221527238848",
    instagram: "https://www.instagram.com/_by__yoon/",
  },
  {
    data: [
      "라보떼",
      "라보떼는 교수님께서 직접 메이크업을 해주시기때문에 신부님께서 만족도가 높습니다.^^",
    ],
    phone: "043-231-7757",
    address: "충북 청주시 서원구 장전로12번길 12 2F",
    worktime: "06:00~18:00 화 휴무",
    page: "https://www.instagram.com/la_beaute_beauty_house/",
    instagram: "https://www.instagram.com/la_beaute_beauty_house/",
  },
];
const shops = dressshop;
for (let m = 0; m < makeupshop.length; m++) {
  shops.push(makeupshop[m]);
}
console.log(shops);

function f_div_item(div_item) {
  div_item.classList.add("eachMovie");
  div_item.classList.add("movie_div_size");
  div_item.style.display = "flex";
  div_item.style.flexDirection = "column";
  div_item.style.alignItems = "center";
  div_item.style.paddingBottom = "10px";
}

function f_a_title(a_title) {
  a_title.rel = "noreferrer";
  a_title.target = "_blank";
  a_title.style.textAlign = "center";
}
const boxmaker = (array, index, balloon = true) => {
  const div_item = document.createElement("div");
  const div_title = document.createElement("div");
  const a_title = document.createElement("a");
  const item_title = document.createElement("h3");
  const returnArray = [div_item, a_title];

  f_div_item(div_item);

  item_title.innerText = `${array[index].data[0]}`;

  a_title.appendChild(item_title);
  div_title.appendChild(a_title);
  div_item.appendChild(div_title);
  if (balloon === true) {
    div_item.addEventListener("mouseenter", balloonMenuEachItem);
    div_item.addEventListener("mouseleave", removeBalloonMenuEachItem);
  }

  return returnArray;
};

function getMatchedValueByKey(array, key, title) {
  for (let index = 0; index < array.length; index++) {
    const nameNFC = title.normalize("NFC");
    const nameNFD = title.normalize("NFD");

    if (
      nameNFC === array[index]["data"][0] ||
      nameNFD === array[index]["data"][0]
    ) {
      let value_by_key_title = array[index][key];
      console.log(value_by_key_title);
      return value_by_key_title;
    }
  }
  return;
}

const balloonMenuEachItem = (event, target_element = "", title = "") => {
  const balloonMenu_div = document.createElement("div");
  const balloonMenu_div_div = document.createElement("div");
  const balloonMenu_div_specific = document.createElement("button");
  const balloonMenu_a_page = document.createElement("a");
  const balloonMenu_a_insta = document.createElement("a");

  balloonMenu_a_page.innerText = "홈페이지";
  balloonMenu_a_insta.innerText = "인스타";

  balloonMenu_div.classList.add("balloonMenu");
  balloonMenu_div_specific.classList.add("balloonMenuBtn");
  balloonMenu_div_specific.classList.add("font_basic");
  balloonMenu_a_page.classList.add("balloonMenuAnchor");
  balloonMenu_a_insta.classList.add("balloonMenuAnchor");
  let balloon_a_title;
  try {
    balloon_a_title = event.target.innerText;
  } catch {
    balloon_a_title = title;
  }

  balloonMenu_div_specific.innerText = "상세정보";

  f_a_title(balloonMenu_a_page);
  f_a_title(balloonMenu_a_insta);
  balloonMenu_a_page.href = getMatchedValueByKey(
    shops,
    "page",
    balloon_a_title
  );
  const insta = getMatchedValueByKey(shops, "instagram", balloon_a_title);
  balloonMenu_a_insta.href = insta;
  balloonMenu_div_div.appendChild(balloonMenu_div_specific);
  balloonMenu_div_div.appendChild(balloonMenu_a_page);
  console.log(balloonMenu_a_insta.href);
  if (insta !== "") {
    balloonMenu_div_div.appendChild(balloonMenu_a_insta);
  }
  balloonMenu_div.appendChild(balloonMenu_div_div);
  if (target_element === "") {
    event.target.appendChild(balloonMenu_div);
  } else {
    target_element.appendChild(balloonMenu_div);
  }

  balloonMenu_div_specific.addEventListener("click", specificContents);
};
const removeBalloonMenuEachItem = () => {
  let mouseout_item = document.querySelectorAll(".balloonMenu");
  mouseout_item = mouseout_item[mouseout_item.length - 1];
  try {
    mouseout_item.remove();
  } catch {}
};

const specificContents = () => {};

for (let i = 0; i < dressshop.length; i++) {
  const itembox = boxmaker(dressshop, i);
  dressgrid.appendChild(itembox[0]);
}
for (let i = 0; i < makeupshop.length; i++) {
  const itembox = boxmaker(makeupshop, i);
  makeupgrid.appendChild(itembox[0]);
}
