
export const categories = [
  { id: 'animals', name: 'สัตว์', icon: '🐾' },
  { id: 'food', name: 'อาหาร', icon: '🍱' },
  { id: 'colors', name: 'สี', icon: '🎨' },
  { id: 'numbers', name: 'ตัวเลข', icon: '🔢' },
  { id: 'family', name: 'ครอบครัว', icon: '👨‍👩‍👧‍👦' },
  { id: 'body', name: 'ร่างกาย', icon: '🙋' },
  { id: 'weather', name: 'สภาพอากาศ', icon: '⛅' },
  { id: 'time', name: 'เวลา', icon: '⏰' }
];

export const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];

export const vocabularyDatabase = {
  animals: {
    N5: [
      { id: 1, japanese: '犬', hiragana: 'いぬ', romaji: 'inu', thai: 'สุนัข', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb' },
      { id: 2, japanese: '猫', hiragana: 'ねこ', romaji: 'neko', thai: 'แมว', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba' },
      { id: 3, japanese: '鳥', hiragana: 'とり', romaji: 'tori', thai: 'นก', image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3' },
      { id: 4, japanese: '魚', hiragana: 'さかな', romaji: 'sakana', thai: 'ปลา', image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f' },
      { id: 5, japanese: '馬', hiragana: 'うま', romaji: 'uma', thai: 'ม้า', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a' }
    ],
    N4: [
      { id: 6, japanese: '象', hiragana: 'ぞう', romaji: 'zou', thai: 'ช้าง', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44' },
      { id: 7, japanese: '虎', hiragana: 'とら', romaji: 'tora', thai: 'เสือ', image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6' },
      { id: 8, japanese: '兎', hiragana: 'うさぎ', romaji: 'usagi', thai: 'กระต่าย', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308' },
      { id: 9, japanese: '熊', hiragana: 'くま', romaji: 'kuma', thai: 'หมี', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819' },
      { id: 10, japanese: '猿', hiragana: 'さる', romaji: 'saru', thai: 'ลิง', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9' }
    ],
    N3: [
      { id: 11, japanese: '狐', hiragana: 'きつね', romaji: 'kitsune', thai: 'สุนัขจิ้งจอก', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5' },
      { id: 12, japanese: '鹿', hiragana: 'しか', romaji: 'shika', thai: 'กวาง', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5' },
      { id: 13, japanese: '狼', hiragana: 'おおかみ', romaji: 'ookami', thai: 'หมาป่า', image: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a' },
      { id: 14, japanese: '蛇', hiragana: 'へび', romaji: 'hebi', thai: 'งู', image: 'https://images.unsplash.com/photo-1531386450450-969f935bd522' },
      { id: 15, japanese: '亀', hiragana: 'かめ', romaji: 'kame', thai: 'เต่า', image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f' }
    ]
  },
  food: {
    N5: [
      { id: 16, japanese: 'ご飯', hiragana: 'ごはん', romaji: 'gohan', thai: 'ข้าว', image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6' },
      { id: 17, japanese: '水', hiragana: 'みず', romaji: 'mizu', thai: 'น้ำ', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d' },
      { id: 18, japanese: 'パン', hiragana: 'ぱん', romaji: 'pan', thai: 'ขนมปัง', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
      { id: 19, japanese: '肉', hiragana: 'にく', romaji: 'niku', thai: 'เนื้อ', image: 'https://images.unsplash.com/photo-1588347818036-b6e8b37e6d71' },
      { id: 20, japanese: '野菜', hiragana: 'やさい', romaji: 'yasai', thai: 'ผัก', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999' }
    ],
    N4: [
      { id: 21, japanese: '寿司', hiragana: 'すし', romaji: 'sushi', thai: 'ซูชิ', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351' },
      { id: 22, japanese: 'ラーメン', hiragana: 'らーめん', romaji: 'raamen', thai: 'ราเมง', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624' },
      { id: 23, japanese: '天ぷら', hiragana: 'てんぷら', romaji: 'tenpura', thai: 'เทมปุระ', image: 'https://images.unsplash.com/photo-1541996176464-eac53dbfb6c6' },
      { id: 24, japanese: 'カレー', hiragana: 'かれー', romaji: 'karee', thai: 'แกงกะหรี่', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe' },
      { id: 25, japanese: '焼き肉', hiragana: 'やきにく', romaji: 'yakiniku', thai: 'เนื้อย่าง', image: 'https://images.unsplash.com/photo-1544025162-d76694265947' }
    ]
  },
  colors: {
    N5: [
      { id: 26, japanese: '赤', hiragana: 'あか', romaji: 'aka', thai: 'สีแดง', image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1' },
      { id: 27, japanese: '青', hiragana: 'あお', romaji: 'ao', thai: 'สีน้ำเงิน', image: 'https://images.unsplash.com/photo-1557672199-6ba6df7e2e4a' },
      { id: 28, japanese: '黄色', hiragana: 'きいろ', romaji: 'kiiro', thai: 'สีเหลือง', image: 'https://images.unsplash.com/photo-1557672199-8f00e34f5ff4' },
      { id: 29, japanese: '緑', hiragana: 'みどり', romaji: 'midori', thai: 'สีเขียว', image: 'https://images.unsplash.com/photo-1557672198-cef193b0f2b7' },
      { id: 30, japanese: '白', hiragana: 'しろ', romaji: 'shiro', thai: 'สีขาว', image: 'https://images.unsplash.com/photo-1557672208-eb0e93e2ebf9' },
      { id: 31, japanese: '黒', hiragana: 'くろ', romaji: 'kuro', thai: 'สีดำ', image: 'https://images.unsplash.com/photo-1557672188-93c5113f11d5' },
      { id: 32, japanese: '茶色', hiragana: 'ちゃいろ', romaji: 'chairo', thai: 'สีน้ำตาล', image: 'https://images.unsplash.com/photo-1557672188-81e98b31e234' },
      { id: 33, japanese: 'ピンク', hiragana: 'ぴんく', romaji: 'pinku', thai: 'สีชมพู', image: 'https://images.unsplash.com/photo-1557672184-3bdb40d9c7c8' },
      { id: 34, japanese: '紫', hiragana: 'むらさき', romaji: 'murasaki', thai: 'สีม่วง', image: 'https://images.unsplash.com/photo-1557672184-3bdb40d9c7c9' },
      { id: 35, japanese: 'オレンジ', hiragana: 'おれんじ', romaji: 'orenji', thai: 'สีส้ม', image: 'https://images.unsplash.com/photo-1557672184-3bdb40d9c7db' }
    ]
  },
  numbers: {
    N5: [
      { id: 36, japanese: '一', hiragana: 'いち', romaji: 'ichi', thai: 'หนึ่ง', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64' },
      { id: 37, japanese: '二', hiragana: 'に', romaji: 'ni', thai: 'สอง', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd65' },
      { id: 38, japanese: '三', hiragana: 'さん', romaji: 'san', thai: 'สาม', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd66' },
      { id: 39, japanese: '四', hiragana: 'よん', romaji: 'yon', thai: 'สี่', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd67' },
      { id: 40, japanese: '五', hiragana: 'ご', romaji: 'go', thai: 'ห้า', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd68' },
      { id: 41, japanese: '六', hiragana: 'ろく', romaji: 'roku', thai: 'หก', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd69' },
      { id: 42, japanese: '七', hiragana: 'なな', romaji: 'nana', thai: 'เจ็ด', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd70' },
      { id: 43, japanese: '八', hiragana: 'はち', romaji: 'hachi', thai: 'แปด', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd71' },
      { id: 44, japanese: '九', hiragana: 'きゅう', romaji: 'kyuu', thai: 'เก้า', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd72' },
      { id: 45, japanese: '十', hiragana: 'じゅう', romaji: 'juu', thai: 'สิบ', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd73' }
    ],
    N4: [
      { id: 46, japanese: '百', hiragana: 'ひゃく', romaji: 'hyaku', thai: 'หนึ่งร้อย', image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353' },
      { id: 47, japanese: '千', hiragana: 'せん', romaji: 'sen', thai: 'หนึ่งพัน', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd75' },
      { id: 48, japanese: '万', hiragana: 'まん', romaji: 'man', thai: 'หนึ่งหมื่น', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd76' },
      { id: 49, japanese: '一つ', hiragana: 'ひとつ', romaji: 'hitotsu', thai: 'หนึ่งอัน', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba' },
      { id: 50, japanese: '二つ', hiragana: 'ふたつ', romaji: 'futatsu', thai: 'สองอัน', image: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907' }
    ]
  },
  family: {
    N5: [
      { id: 51, japanese: '父', hiragana: 'ちち', romaji: 'chichi', thai: 'พ่อ (พูดถึงพ่อของตน)', image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed' },
      { id: 52, japanese: '母', hiragana: 'はは', romaji: 'haha', thai: 'แม่ (พูดถึงแม่ของตน)', image: 'https://images.unsplash.com/photo-1564758866273-6c063d4a0c10' },
      { id: 53, japanese: 'お父さん', hiragana: 'おとうさん', romaji: 'otousan', thai: 'คุณพ่อ (ของคนอื่น/เรียกพ่อตัวเอง)', image: 'https://images.unsplash.com/photo-1491997374392-1b99d94ce8c1' },
      { id: 54, japanese: 'お母さん', hiragana: 'おかあさん', romaji: 'okaasan', thai: 'คุณแม่ (ของคนอื่น/เรียกแม่ตัวเอง)', image: 'https://images.unsplash.com/photo-1551484651-5d93c7b48c2c' },
      { id: 55, japanese: '兄', hiragana: 'あに', romaji: 'ani', thai: 'พี่ชาย (ของตน)', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce' },
      { id: 56, japanese: '姉', hiragana: 'あね', romaji: 'ane', thai: 'พี่สาว (ของตน)', image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b' },
      { id: 57, japanese: 'お兄さん', hiragana: 'おにいさん', romaji: 'oniisan', thai: 'คุณพี่ชาย (ของคนอื่น/เรียกตัวเอง)', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
      { id: 58, japanese: 'お姉さん', hiragana: 'おねえさん', romaji: 'oneesan', thai: 'คุณพี่สาว (ของคนอื่น/เรียกตัวเอง)', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' },
      { id: 59, japanese: '弟', hiragana: 'おとうと', romaji: 'otouto', thai: 'น้องชาย', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
      { id: 60, japanese: '妹', hiragana: 'いもうと', romaji: 'imouto', thai: 'น้องสาว', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' }
    ],
    N4: [
      { id: 61, japanese: '祖父', hiragana: 'そふ', romaji: 'sofu', thai: 'ปู่/ตา (ของตน)', image: 'https://images.unsplash.com/photo-1595278069441-2cf29f30b89d' },
      { id: 62, japanese: '祖母', hiragana: 'そぼ', romaji: 'sobo', thai: 'ย่า/ยาย (ของตน)', image: 'https://images.unsplash.com/photo-1604467707321-70d5ac45adda' },
      { id: 63, japanese: 'おじいさん', hiragana: 'おじいさん', romaji: 'ojiisan', thai: 'คุณปู่/คุณตา', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
      { id: 64, japanese: 'おばあさん', hiragana: 'おばあさん', romaji: 'obaasan', thai: 'คุณย่า/คุณยาย', image: 'https://images.unsplash.com/photo-1598146043511-7cf880c92dfa' },
      { id: 65, japanese: '叔父', hiragana: 'おじ', romaji: 'oji', thai: 'ลุง/อา (ของตน)', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a' },
      { id: 66, japanese: '叔母', hiragana: 'おば', romaji: 'oba', thai: 'ป้า/น้า (ของตน)', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
      { id: 67, japanese: 'おじさん', hiragana: 'おじさん', romaji: 'ojisan', thai: 'คุณลุง/คุณอา', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca44' },
      { id: 68, japanese: 'おばさん', hiragana: 'おばさん', romaji: 'obasan', thai: 'คุณป้า/คุณน้า', image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d' },
      { id: 69, japanese: '家族', hiragana: 'かぞく', romaji: 'kazoku', thai: 'ครอบครัว', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300' },
      { id: 70, japanese: '両親', hiragana: 'りょうしん', romaji: 'ryoushin', thai: 'พ่อแม่', image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6' }
    ],
    N3: [
      { id: 71, japanese: '夫', hiragana: 'おっと', romaji: 'otto', thai: 'สามี (ของตน)', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
      { id: 72, japanese: '妻', hiragana: 'つま', romaji: 'tsuma', thai: 'ภรรยา (ของตน)', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' },
      { id: 73, japanese: '息子', hiragana: 'むすこ', romaji: 'musuko', thai: 'ลูกชาย', image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01' },
      { id: 74, japanese: '娘', hiragana: 'むすめ', romaji: 'musume', thai: 'ลูกสาว', image: 'https://images.unsplash.com/photo-1518182170546-45670e1275a7' },
      { id: 75, japanese: '孫', hiragana: 'まご', romaji: 'mago', thai: 'หลาน', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9' }
    ]
  },
  body: {
    N5: [
      { id: 76, japanese: '頭', hiragana: 'あたま', romaji: 'atama', thai: 'หัว', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2' },
      { id: 77, japanese: '目', hiragana: 'め', romaji: 'me', thai: 'ตา', image: 'https://images.unsplash.com/photo-1576024840967-3159c1c1e77d' },
      { id: 78, japanese: '耳', hiragana: 'みみ', romaji: 'mimi', thai: 'หู', image: 'https://images.unsplash.com/photo-1591291772941-2e5c23e1c0f0' },
      { id: 79, japanese: '鼻', hiragana: 'はな', romaji: 'hana', thai: 'จมูก', image: 'https://images.unsplash.com/photo-1581591580903-26ae21e2a428' },
      { id: 80, japanese: '口', hiragana: 'くち', romaji: 'kuchi', thai: 'ปาก', image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6' },
      { id: 81, japanese: '手', hiragana: 'て', romaji: 'te', thai: 'มือ', image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41' },
      { id: 82, japanese: '足', hiragana: 'あし', romaji: 'ashi', thai: 'เท้า/ขา', image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8' },
      { id: 83, japanese: '顔', hiragana: 'かお', romaji: 'kao', thai: 'หน้า', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15' },
      { id: 84, japanese: '髪', hiragana: 'かみ', romaji: 'kami', thai: 'ผม', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702' },
      { id: 85, japanese: '歯', hiragana: 'は', romaji: 'ha', thai: 'ฟัน', image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99' }
    ],
    N4: [
      { id: 86, japanese: '指', hiragana: 'ゆび', romaji: 'yubi', thai: 'นิ้ว', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab' },
      { id: 87, japanese: '腕', hiragana: 'うで', romaji: 'ude', thai: 'แขน', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b' },
      { id: 88, japanese: '肩', hiragana: 'かた', romaji: 'kata', thai: 'ไหล่', image: 'https://images.unsplash.com/photo-1545289414-1c3cb1c06238' },
      { id: 89, japanese: '背中', hiragana: 'せなか', romaji: 'senaka', thai: 'หลัง', image: 'https://images.unsplash.com/photo-1571019613454-1c3cb1c06238' },
      { id: 90, japanese: '胸', hiragana: 'むね', romaji: 'mune', thai: 'อก', image: 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4' }
    ]
  },
  weather: {
    N5: [
      { id: 91, japanese: '晴れ', hiragana: 'はれ', romaji: 'hare', thai: 'แดด/ท้องฟ้าแจ่มใส', image: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2' },
      { id: 92, japanese: '雨', hiragana: 'あめ', romaji: 'ame', thai: 'ฝน', image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721' },
      { id: 93, japanese: '雪', hiragana: 'ゆき', romaji: 'yuki', thai: 'หิมะ', image: 'https://images.unsplash.com/photo-1516431883659-655d41c09bf9' },
      { id: 94, japanese: '曇り', hiragana: 'くもり', romaji: 'kumori', thai: 'มีเมฆ/มืดครึ้ม', image: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9' },
      { id: 95, japanese: '風', hiragana: 'かぜ', romaji: 'kaze', thai: 'ลม', image: 'https://images.unsplash.com/photo-1606146485855-8bee5e5bad88' },
      { id: 96, japanese: '暑い', hiragana: 'あつい', romaji: 'atsui', thai: 'ร้อน', image: 'https://images.unsplash.com/photo-1504370805625-d32c54b16100' },
      { id: 97, japanese: '寒い', hiragana: 'さむい', romaji: 'samui', thai: 'หนาว', image: 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e' },
      { id: 98, japanese: '暖かい', hiragana: 'あたたかい', romaji: 'atatakai', thai: 'อบอุ่น', image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8' },
      { id: 99, japanese: '涼しい', hiragana: 'すずしい', romaji: 'suzushii', thai: 'เย็นสบาย', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
      { id: 100, japanese: '天気', hiragana: 'てんき', romaji: 'tenki', thai: 'สภาพอากาศ', image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071' }
    ],
    N4: [
      { id: 101, japanese: '台風', hiragana: 'たいふう', romaji: 'taifuu', thai: 'ไต้ฝุ่น', image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe' },
      { id: 102, japanese: '雷', hiragana: 'かみなり', romaji: 'kaminari', thai: 'ฟ้าร้อง', image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28' },
      { id: 103, japanese: '霧', hiragana: 'きり', romaji: 'kiri', thai: 'หมอก', image: 'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227' },
      { id: 104, japanese: '虹', hiragana: 'にじ', romaji: 'niji', thai: 'รุ้ง', image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c' },
      { id: 105, japanese: '湿気', hiragana: 'しっき', romaji: 'shikki', thai: 'ความชื้น', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d' }
    ]
  },
  time: {
    N5: [
      { id: 106, japanese: '今日', hiragana: 'きょう', romaji: 'kyou', thai: 'วันนี้', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' },
      { id: 107, japanese: '昨日', hiragana: 'きのう', romaji: 'kinou', thai: 'เมื่อวาน', image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5' },
      { id: 108, japanese: '明日', hiragana: 'あした', romaji: 'ashita', thai: 'พรุ่งนี้', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' },
      { id: 109, japanese: '朝', hiragana: 'あさ', romaji: 'asa', thai: 'เช้า', image: 'https://images.unsplash.com/photo-1475275166152-a908c5a47050' },
      { id: 110, japanese: '昼', hiragana: 'ひる', romaji: 'hiru', thai: 'เที่ยง', image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c' },
      { id: 111, japanese: '夜', hiragana: 'よる', romaji: 'yoru', thai: 'กลางคืน', image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee' },
      { id: 112, japanese: '午前', hiragana: 'ごぜん', romaji: 'gozen', thai: 'ก่อนเที่ยง (AM)', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd' },
      { id: 113, japanese: '午後', hiragana: 'ごご', romaji: 'gogo', thai: 'หลังเที่ยง (PM)', image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869' },
      { id: 114, japanese: '今', hiragana: 'いま', romaji: 'ima', thai: 'ตอนนี้', image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f' },
      { id: 115, japanese: '時間', hiragana: 'じかん', romaji: 'jikan', thai: 'เวลา', image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5' }
    ],
    N4: [
      { id: 116, japanese: '今週', hiragana: 'こんしゅう', romaji: 'konshuu', thai: 'สัปดาห์นี้', image: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907' },
      { id: 117, japanese: '先週', hiragana: 'せんしゅう', romaji: 'senshuu', thai: 'สัปดาห์ที่แล้ว', image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc' },
      { id: 118, japanese: '来週', hiragana: 'らいしゅう', romaji: 'raishuu', thai: 'สัปดาห์หน้า', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe' },
      { id: 119, japanese: '今月', hiragana: 'こんげつ', romaji: 'kongetsu', thai: 'เดือนนี้', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643' },
      { id: 120, japanese: '今年', hiragana: 'ことし', romaji: 'kotoshi', thai: 'ปีนี้', image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9' }
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
