
export const categories = [
  { id: 'greetings', name: 'คำทักทาย', icon: '👋' },
  { id: 'family', name: 'ครอบครัว', icon: '👨‍👩‍👧‍👦' },
  { id: 'animals', name: 'สัตว์', icon: '🐾' },
  { id: 'work', name: 'การทำงาน', icon: '💼' },
  { id: 'numbers', name: 'เลข', icon: '🔢' },
  { id: 'food', name: 'อาหาร', icon: '🍱' },
  { id: 'seasons', name: 'ฤดูกาล', icon: '🌸' },
  { id: 'colors', name: 'สี', icon: '🎨' },
  { id: 'vehicles', name: 'ยานพาหนะ', icon: '🚗' },
  { id: 'weather', name: 'อากาศ', icon: '⛅' }
];

export const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];

export const vocabularyDatabase = {
  greetings: {
    N5: [
      { id: 1, japanese: 'こんにちは', hiragana: 'こんにちは', romaji: 'konnichiwa', thai: 'สวัสดี (กลางวัน)', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' },
      { id: 2, japanese: 'おはよう', hiragana: 'おはよう', romaji: 'ohayou', thai: 'สวัสดี (เช้า)', image: 'https://images.unsplash.com/photo-1475275166152-a908c5a47050' },
      { id: 3, japanese: 'こんばんは', hiragana: 'こんばんは', romaji: 'konbanwa', thai: 'สวัสดี (เย็น)', image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee' },
      { id: 4, japanese: 'さようなら', hiragana: 'さようなら', romaji: 'sayounara', thai: 'ลาก่อน', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba' },
      { id: 5, japanese: 'ありがとう', hiragana: 'ありがとう', romaji: 'arigatou', thai: 'ขอบคุณ', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c' },
      { id: 6, japanese: 'すみません', hiragana: 'すみません', romaji: 'sumimasen', thai: 'ขอโทษ', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3' },
      { id: 7, japanese: 'ごめんなさい', hiragana: 'ごめんなさい', romaji: 'gomennasai', thai: 'ขอโทษ (เป็นทางการ)', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
      { id: 8, japanese: 'いただきます', hiragana: 'いただきます', romaji: 'itadakimasu', thai: 'ขอบคุณสำหรับอาหาร (ก่อนกิน)', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351' },
      { id: 9, japanese: 'ごちそうさま', hiragana: 'ごちそうさま', romaji: 'gochisousama', thai: 'ขอบคุณสำหรับอาหาร (หลังกิน)', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624' },
      { id: 10, japanese: 'おやすみ', hiragana: 'おやすみ', romaji: 'oyasumi', thai: 'ราตรีสวัสดิ์', image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee' }
    ],
    N4: [
      { id: 11, japanese: 'はじめまして', hiragana: 'はじめまして', romaji: 'hajimemashite', thai: 'ยินดีที่ได้รู้จัก', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' },
      { id: 12, japanese: 'よろしくお願いします', hiragana: 'よろしくおねがいします', romaji: 'yoroshiku onegaishimasu', thai: 'ขอความกรุณาด้วย', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c' },
      { id: 13, japanese: 'お元気ですか', hiragana: 'おげんきですか', romaji: 'ogenki desu ka', thai: 'สบายดีไหม', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
      { id: 14, japanese: 'おかえり', hiragana: 'おかえり', romaji: 'okaeri', thai: 'ยินดีต้อนรับกลับ', image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c' },
      { id: 15, japanese: 'ただいま', hiragana: 'ただいま', romaji: 'tadaima', thai: 'กลับมาแล้ว', image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c' }
    ]
  },
  animals: {
    N5: [
      { id: 200, japanese: '犬', hiragana: 'いぬ', romaji: 'inu', thai: 'สุนัข', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb' },
      { id: 201, japanese: '猫', hiragana: 'ねこ', romaji: 'neko', thai: 'แมว', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba' },
      { id: 202, japanese: '鳥', hiragana: 'とり', romaji: 'tori', thai: 'นก', image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3' },
      { id: 203, japanese: '魚', hiragana: 'さかな', romaji: 'sakana', thai: 'ปลา', image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f' },
      { id: 204, japanese: '馬', hiragana: 'うま', romaji: 'uma', thai: 'ม้า', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a' }
    ],
    N4: [
      { id: 205, japanese: '象', hiragana: 'ぞう', romaji: 'zou', thai: 'ช้าง', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44' },
      { id: 206, japanese: '虎', hiragana: 'とら', romaji: 'tora', thai: 'เสือ', image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6' },
      { id: 207, japanese: '兎', hiragana: 'うさぎ', romaji: 'usagi', thai: 'กระต่าย', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308' },
      { id: 208, japanese: '熊', hiragana: 'くま', romaji: 'kuma', thai: 'หมี', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819' },
      { id: 209, japanese: '猿', hiragana: 'さる', romaji: 'saru', thai: 'ลิง', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9' }
    ],
    N3: [
      { id: 210, japanese: '狐', hiragana: 'きつね', romaji: 'kitsune', thai: 'สุนัขจิ้งจอก', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5' },
      { id: 211, japanese: '鹿', hiragana: 'しか', romaji: 'shika', thai: 'กวาง', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5' },
      { id: 212, japanese: '狼', hiragana: 'おおかみ', romaji: 'ookami', thai: 'หมาป่า', image: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a' },
      { id: 213, japanese: '蛇', hiragana: 'へび', romaji: 'hebi', thai: 'งู', image: 'https://images.unsplash.com/photo-1531386450450-969f935bd522' },
      { id: 214, japanese: '亀', hiragana: 'かめ', romaji: 'kame', thai: 'เต่า', image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f' }
    ]
  },
  food: {
    N5: [
      { id: 300, japanese: 'ご飯', hiragana: 'ごはん', romaji: 'gohan', thai: 'ข้าว', image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6' },
      { id: 301, japanese: '水', hiragana: 'みず', romaji: 'mizu', thai: 'น้ำ', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d' },
      { id: 302, japanese: 'パン', hiragana: 'ぱん', romaji: 'pan', thai: 'ขนมปัง', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
      { id: 303, japanese: '肉', hiragana: 'にく', romaji: 'niku', thai: 'เนื้อ', image: 'https://images.unsplash.com/photo-1588347818036-b6e8b37e6d71' },
      { id: 304, japanese: '野菜', hiragana: 'やさい', romaji: 'yasai', thai: 'ผัก', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999' }
    ],
    N4: [
      { id: 305, japanese: '寿司', hiragana: 'すし', romaji: 'sushi', thai: 'ซูชิ', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351' },
      { id: 306, japanese: 'ラーメン', hiragana: 'らーめん', romaji: 'raamen', thai: 'ราเมง', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624' },
      { id: 307, japanese: '天ぷら', hiragana: 'てんぷら', romaji: 'tenpura', thai: 'เทมปุระ', image: 'https://images.unsplash.com/photo-1541996176464-eac53dbfb6c6' },
      { id: 308, japanese: 'カレー', hiragana: 'かれー', romaji: 'karee', thai: 'แกงกะหรี่', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe' },
      { id: 309, japanese: '焼き肉', hiragana: 'やきにく', romaji: 'yakiniku', thai: 'เนื้อย่าง', image: 'https://images.unsplash.com/photo-1544025162-d76694265947' }
    ]
  },
  colors: {
    N5: [
      { id: 400, japanese: '赤', hiragana: 'あか', romaji: 'aka', thai: 'สีแดง', image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1' },
      { id: 401, japanese: '青', hiragana: 'あお', romaji: 'ao', thai: 'สีน้ำเงิน', image: 'https://images.unsplash.com/photo-1557672199-6ba6df7e2e4a' },
      { id: 402, japanese: '黄色', hiragana: 'きいろ', romaji: 'kiiro', thai: 'สีเหลือง', image: 'https://images.unsplash.com/photo-1557672199-8f00e34f5ff4' },
      { id: 403, japanese: '緑', hiragana: 'みどり', romaji: 'midori', thai: 'สีเขียว', image: 'https://images.unsplash.com/photo-1557672198-cef193b0f2b7' },
      { id: 404, japanese: '白', hiragana: 'しろ', romaji: 'shiro', thai: 'สีขาว', image: 'https://images.unsplash.com/photo-1557672208-eb0e93e2ebf9' },
      { id: 405, japanese: '黒', hiragana: 'くろ', romaji: 'kuro', thai: 'สีดำ', image: 'https://images.unsplash.com/photo-1557672188-93c5113f11d5' },
      { id: 406, japanese: '茶色', hiragana: 'ちゃいろ', romaji: 'chairo', thai: 'สีน้ำตาล', image: 'https://images.unsplash.com/photo-1557672188-81e98b31e234' },
      { id: 407, japanese: 'ピンク', hiragana: 'ぴんく', romaji: 'pinku', thai: 'สีชมพู', image: 'https://images.unsplash.com/photo-1557672184-3bdb40d9c7c8' },
      { id: 408, japanese: '紫', hiragana: 'むらさき', romaji: 'murasaki', thai: 'สีม่วง', image: 'https://images.unsplash.com/photo-1557672184-3bdb40d9c7c9' },
      { id: 409, japanese: 'オレンジ', hiragana: 'おれんじ', romaji: 'orenji', thai: 'สีส้ม', image: 'https://images.unsplash.com/photo-1557672184-3bdb40d9c7db' }
    ]
  },
  numbers: {
    N5: [
      { id: 500, japanese: '一', hiragana: 'いち', romaji: 'ichi', thai: 'หนึ่ง', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64' },
      { id: 501, japanese: '二', hiragana: 'に', romaji: 'ni', thai: 'สอง', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd65' },
      { id: 502, japanese: '三', hiragana: 'さん', romaji: 'san', thai: 'สาม', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd66' },
      { id: 503, japanese: '四', hiragana: 'よん', romaji: 'yon', thai: 'สี่', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd67' },
      { id: 504, japanese: '五', hiragana: 'ご', romaji: 'go', thai: 'ห้า', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd68' },
      { id: 505, japanese: '六', hiragana: 'ろく', romaji: 'roku', thai: 'หก', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd69' },
      { id: 506, japanese: '七', hiragana: 'なな', romaji: 'nana', thai: 'เจ็ด', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd70' },
      { id: 507, japanese: '八', hiragana: 'はち', romaji: 'hachi', thai: 'แปด', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd71' },
      { id: 508, japanese: '九', hiragana: 'きゅう', romaji: 'kyuu', thai: 'เก้า', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd72' },
      { id: 509, japanese: '十', hiragana: 'じゅう', romaji: 'juu', thai: 'สิบ', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd73' }
    ],
    N4: [
      { id: 510, japanese: '百', hiragana: 'ひゃく', romaji: 'hyaku', thai: 'หนึ่งร้อย', image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353' },
      { id: 511, japanese: '千', hiragana: 'せん', romaji: 'sen', thai: 'หนึ่งพัน', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd75' },
      { id: 512, japanese: '万', hiragana: 'まん', romaji: 'man', thai: 'หนึ่งหมื่น', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd76' },
      { id: 513, japanese: '一つ', hiragana: 'ひとつ', romaji: 'hitotsu', thai: 'หนึ่งอัน', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba' },
      { id: 514, japanese: '二つ', hiragana: 'ふたつ', romaji: 'futatsu', thai: 'สองอัน', image: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907' }
    ]
  },
  family: {
    N5: [
      { id: 600, japanese: '父', hiragana: 'ちち', romaji: 'chichi', thai: 'พ่อ (พูดถึงพ่อของตน)', image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed' },
      { id: 601, japanese: '母', hiragana: 'はは', romaji: 'haha', thai: 'แม่ (พูดถึงแม่ของตน)', image: 'https://images.unsplash.com/photo-1564758866273-6c063d4a0c10' },
      { id: 602, japanese: 'お父さん', hiragana: 'おとうさん', romaji: 'otousan', thai: 'คุณพ่อ (ของคนอื่น/เรียกพ่อตัวเอง)', image: 'https://images.unsplash.com/photo-1491997374392-1b99d94ce8c1' },
      { id: 603, japanese: 'お母さん', hiragana: 'おかあさん', romaji: 'okaasan', thai: 'คุณแม่ (ของคนอื่น/เรียกแม่ตัวเอง)', image: 'https://images.unsplash.com/photo-1551484651-5d93c7b48c2c' },
      { id: 604, japanese: '兄', hiragana: 'あに', romaji: 'ani', thai: 'พี่ชาย (ของตน)', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce' },
      { id: 605, japanese: '姉', hiragana: 'あね', romaji: 'ane', thai: 'พี่สาว (ของตน)', image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b' },
      { id: 606, japanese: 'お兄さん', hiragana: 'おにいさん', romaji: 'oniisan', thai: 'คุณพี่ชาย (ของคนอื่น/เรียกตัวเอง)', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
      { id: 607, japanese: 'お姉さん', hiragana: 'おねえさん', romaji: 'oneesan', thai: 'คุณพี่สาว (ของคนอื่น/เรียกตัวเอง)', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' },
      { id: 608, japanese: '弟', hiragana: 'おとうと', romaji: 'otouto', thai: 'น้องชาย', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
      { id: 609, japanese: '妹', hiragana: 'いもうと', romaji: 'imouto', thai: 'น้องสาว', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' }
    ],
    N4: [
      { id: 610, japanese: '祖父', hiragana: 'そふ', romaji: 'sofu', thai: 'ปู่/ตา (ของตน)', image: 'https://images.unsplash.com/photo-1595278069441-2cf29f30b89d' },
      { id: 611, japanese: '祖母', hiragana: 'そぼ', romaji: 'sobo', thai: 'ย่า/ยาย (ของตน)', image: 'https://images.unsplash.com/photo-1604467707321-70d5ac45adda' },
      { id: 612, japanese: 'おじいさん', hiragana: 'おじいさん', romaji: 'ojiisan', thai: 'คุณปู่/คุณตา', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
      { id: 613, japanese: 'おばあさん', hiragana: 'おばあさん', romaji: 'obaasan', thai: 'คุณย่า/คุณยาย', image: 'https://images.unsplash.com/photo-1598146043511-7cf880c92dfa' },
      { id: 614, japanese: '叔父', hiragana: 'おじ', romaji: 'oji', thai: 'ลุง/อา (ของตน)', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a' },
      { id: 615, japanese: '叔母', hiragana: 'おば', romaji: 'oba', thai: 'ป้า/น้า (ของตน)', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
      { id: 616, japanese: 'おじさん', hiragana: 'おじさん', romaji: 'ojisan', thai: 'คุณลุง/คุณอา', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca44' },
      { id: 617, japanese: 'おばさん', hiragana: 'おばさん', romaji: 'obasan', thai: 'คุณป้า/คุณน้า', image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d' },
      { id: 618, japanese: '家族', hiragana: 'かぞく', romaji: 'kazoku', thai: 'ครอบครัว', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300' },
      { id: 619, japanese: '両親', hiragana: 'りょうしん', romaji: 'ryoushin', thai: 'พ่อแม่', image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6' }
    ],
    N3: [
      { id: 620, japanese: '夫', hiragana: 'おっと', romaji: 'otto', thai: 'สามี (ของตน)', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
      { id: 621, japanese: '妻', hiragana: 'つま', romaji: 'tsuma', thai: 'ภรรยา (ของตน)', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' },
      { id: 622, japanese: '息子', hiragana: 'むすこ', romaji: 'musuko', thai: 'ลูกชาย', image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01' },
      { id: 623, japanese: '娘', hiragana: 'むすめ', romaji: 'musume', thai: 'ลูกสาว', image: 'https://images.unsplash.com/photo-1518182170546-45670e1275a7' },
      { id: 624, japanese: '孫', hiragana: 'まご', romaji: 'mago', thai: 'หลาน', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9' }
    ]
  },
  work: {
    N5: [
      { id: 700, japanese: '仕事', hiragana: 'しごと', romaji: 'shigoto', thai: 'งาน', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174' },
      { id: 701, japanese: '会社', hiragana: 'かいしゃ', romaji: 'kaisha', thai: 'บริษัท', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c' },
      { id: 702, japanese: '学校', hiragana: 'がっこう', romaji: 'gakkou', thai: 'โรงเรียน', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1' },
      { id: 703, japanese: '医者', hiragana: 'いしゃ', romaji: 'isha', thai: 'หมอ', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2' },
      { id: 704, japanese: '先生', hiragana: 'せんせい', romaji: 'sensei', thai: 'ครู', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b' },
      { id: 705, japanese: '学生', hiragana: 'がくせい', romaji: 'gakusei', thai: 'นักเรียน', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1' },
      { id: 706, japanese: '店員', hiragana: 'てんいん', romaji: 'tenin', thai: 'พนักงานขาย', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d' },
      { id: 707, japanese: '運転手', hiragana: 'うんてんしゅ', romaji: 'untenshu', thai: 'คนขับรถ', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
      { id: 708, japanese: '料理人', hiragana: 'りょうりにん', romaji: 'ryourinin', thai: 'เชฟ', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d' },
      { id: 709, japanese: '看護師', hiragana: 'かんごし', romaji: 'kangoshi', thai: 'พยาบาล', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2' }
    ],
    N4: [
      { id: 710, japanese: '会議', hiragana: 'かいぎ', romaji: 'kaigi', thai: 'การประชุม', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978' },
      { id: 711, japanese: '会議室', hiragana: 'かいぎしつ', romaji: 'kaigishitsu', thai: 'ห้องประชุม', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c' },
      { id: 712, japanese: '給料', hiragana: 'きゅうりょう', romaji: 'kyuuryou', thai: 'เงินเดือน', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e' },
      { id: 713, japanese: '休憩', hiragana: 'きゅうけい', romaji: 'kyuukei', thai: 'พักผ่อน', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216' },
      { id: 714, japanese: '残業', hiragana: 'ざんぎょう', romaji: 'zangyou', thai: 'ทำงานล่วงเวลา', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174' }
    ]
  },
  weather: {
    N5: [
      { id: 900, japanese: '晴れ', hiragana: 'はれ', romaji: 'hare', thai: 'แดด/ท้องฟ้าแจ่มใส', image: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2' },
      { id: 901, japanese: '雨', hiragana: 'あめ', romaji: 'ame', thai: 'ฝน', image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721' },
      { id: 902, japanese: '雪', hiragana: 'ゆき', romaji: 'yuki', thai: 'หิมะ', image: 'https://images.unsplash.com/photo-1516431883659-655d41c09bf9' },
      { id: 903, japanese: '曇り', hiragana: 'くもり', romaji: 'kumori', thai: 'มีเมฆ/มืดครึ้ม', image: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9' },
      { id: 904, japanese: '風', hiragana: 'かぜ', romaji: 'kaze', thai: 'ลม', image: 'https://images.unsplash.com/photo-1606146485855-8bee5e5bad88' },
      { id: 905, japanese: '暑い', hiragana: 'あつい', romaji: 'atsui', thai: 'ร้อน', image: 'https://images.unsplash.com/photo-1504370805625-d32c54b16100' },
      { id: 906, japanese: '寒い', hiragana: 'さむい', romaji: 'samui', thai: 'หนาว', image: 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e' },
      { id: 907, japanese: '暖かい', hiragana: 'あたたかい', romaji: 'atatakai', thai: 'อบอุ่น', image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8' },
      { id: 908, japanese: '涼しい', hiragana: 'すずしい', romaji: 'suzushii', thai: 'เย็นสบาย', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
      { id: 909, japanese: '天気', hiragana: 'てんき', romaji: 'tenki', thai: 'สภาพอากาศ', image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071' }
    ],
    N4: [
      { id: 910, japanese: '台風', hiragana: 'たいふう', romaji: 'taifuu', thai: 'ไต้ฝุ่น', image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe' },
      { id: 911, japanese: '雷', hiragana: 'かみなり', romaji: 'kaminari', thai: 'ฟ้าร้อง', image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28' },
      { id: 912, japanese: '霧', hiragana: 'きり', romaji: 'kiri', thai: 'หมอก', image: 'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227' },
      { id: 913, japanese: '虹', hiragana: 'にじ', romaji: 'niji', thai: 'รุ้ง', image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c' },
      { id: 914, japanese: '湿気', hiragana: 'しっき', romaji: 'shikki', thai: 'ความชื้น', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d' }
    ]
  },
  seasons: {
    N5: [
      { id: 800, japanese: '春', hiragana: 'はる', romaji: 'haru', thai: 'ฤดูใบไม้ผลิ', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951' },
      { id: 801, japanese: '夏', hiragana: 'なつ', romaji: 'natsu', thai: 'ฤดูร้อน', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
      { id: 802, japanese: '秋', hiragana: 'あき', romaji: 'aki', thai: 'ฤดูใบไม้ร่วง', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' },
      { id: 803, japanese: '冬', hiragana: 'ふゆ', romaji: 'fuyu', thai: 'ฤดูหนาว', image: 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e' },
      { id: 804, japanese: '季節', hiragana: 'きせつ', romaji: 'kisetsu', thai: 'ฤดูกาล', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' }
    ],
    N4: [
      { id: 805, japanese: '桜', hiragana: 'さくら', romaji: 'sakura', thai: 'ดอกซากุระ', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951' },
      { id: 806, japanese: '紅葉', hiragana: 'もみじ', romaji: 'momiji', thai: 'ใบไม้เปลี่ยนสี', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' },
      { id: 807, japanese: '梅雨', hiragana: 'つゆ', romaji: 'tsuyu', thai: 'ฤดูฝน', image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721' },
      { id: 808, japanese: '花見', hiragana: 'はなみ', romaji: 'hanami', thai: 'ชมดอกไม้', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951' },
      { id: 809, japanese: '祭り', hiragana: 'まつり', romaji: 'matsuri', thai: 'เทศกาล', image: 'https://images.unsplash.com/photo-1528164344705-47542687000d' }
    ]
  },
  vehicles: {
    N5: [
      { id: 1000, japanese: '車', hiragana: 'くるま', romaji: 'kuruma', thai: 'รถยนต์', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7' },
      { id: 1001, japanese: '自転車', hiragana: 'じてんしゃ', romaji: 'jitensha', thai: 'จักรยาน', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64' },
      { id: 1002, japanese: '電車', hiragana: 'でんしゃ', romaji: 'densha', thai: 'รถไฟ', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957' },
      { id: 1003, japanese: 'バス', hiragana: 'ばす', romaji: 'basu', thai: 'รถบัส', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957' },
      { id: 1004, japanese: '飛行機', hiragana: 'ひこうき', romaji: 'hikouki', thai: 'เครื่องบิน', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05' },
      { id: 1005, japanese: '船', hiragana: 'ふね', romaji: 'fune', thai: 'เรือ', image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78' },
      { id: 1006, japanese: 'バイク', hiragana: 'ばいく', romaji: 'baiku', thai: 'รถจักรยานยนต์', image: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4' },
      { id: 1007, japanese: 'タクシー', hiragana: 'たくしー', romaji: 'takushii', thai: 'แท็กซี่', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957' }
    ],
    N4: [
      { id: 1008, japanese: '新幹線', hiragana: 'しんかんせん', romaji: 'shinkansen', thai: 'รถไฟความเร็วสูง', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957' },
      { id: 1009, japanese: '地下鉄', hiragana: 'ちかてつ', romaji: 'chikatetsu', thai: 'รถไฟใต้ดิน', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957' },
      { id: 1010, japanese: 'トラック', hiragana: 'とらっく', romaji: 'torakku', thai: 'รถบรรทุก', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7' },
      { id: 1011, japanese: 'ヘリコプター', hiragana: 'へりこぷたー', romaji: 'herikoputaa', thai: 'เฮลิคอปเตอร์', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05' },
      { id: 1012, japanese: '駅', hiragana: 'えき', romaji: 'eki', thai: 'สถานี', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957' }
    ]
  }
};

export const getVocabularyByCategory = (category, level) => {
  return vocabularyDatabase[category]?.[level] || [];
};

export const getAllVocabulary = () => {
  const allVocab = [];
  Object.keys(vocabularyDatabase).forEach(category => {
    Object.keys(vocabularyDatabase[category]).forEach(level => {
      allVocab.push(...vocabularyDatabase[category][level]);
    });
  });
  return allVocab;
};
