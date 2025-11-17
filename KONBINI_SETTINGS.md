# 🏪 Japanese Konbini 3D Model - คู่มือการปรับแต่ง

## ✅ สถานะปัจจุบัน

Model **Ultimate Japanese Konbini** ได้ถูกติดตั้งและใช้งานแล้วใน Hero Section! 🎉

- **ไฟล์:** `/public/ultimate_japanese_konbini.glb`
- **ขนาด:** ~ใหญ่ (มี textures และ details เยอะ)
- **Component:** `Sketchfab3DBackground`
- **ตำแหน่ง:** `src/components/home/HeroSection.jsx`

---

## 🎨 การปรับแต่งพื้นฐาน

### 1. ปรับระยะกล้อง (Camera Distance)

ถ้า model ดูเล็กหรือใหญ่เกินไป:

```jsx
<Sketchfab3DBackground 
  modelUrl="/ultimate_japanese_konbini.glb"
  cameraDistance={8}  // เปลี่ยนตัวเลขนี้
  autoRotate={true}
/>
```

**แนะนำ:**
- `cameraDistance={5}` - ใกล้มาก เห็นรายละเอียด
- `cameraDistance={8}` - ปานกลาง (ค่าเริ่มต้น) ✅
- `cameraDistance={12}` - ไกล เห็นทั้งหมด
- `cameraDistance={15}` - ไกลมาก panoramic view

### 2. เปิด/ปิดการหมุนอัตโนมัติ

```jsx
<Sketchfab3DBackground 
  modelUrl="/ultimate_japanese_konbini.glb"
  cameraDistance={8}
  autoRotate={true}  // true = หมุน, false = หยุดหมุน
/>
```

**แนะนำ:**
- `autoRotate={true}` - ให้หมุนช้าๆ (dynamic) ✅
- `autoRotate={false}` - หยุดหมุน (static view)

### 3. ปรับความเข้มของ Gradient Overlay

ถ้า model ดูมืดหรือสว่างเกินไป ปรับที่ overlay:

```jsx
{/* Pink to White gradient overlay */}
<div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-rose-100/50 to-white/60 z-20" />
```

**ปรับความโปร่งใส (opacity):**
- `/40` = 40% opacity
- `/50` = 50% opacity
- `/60` = 60% opacity

**ตัวอย่าง (overlay เข้มขึ้น):**
```jsx
<div className="absolute inset-0 bg-gradient-to-br from-pink-200/60 via-rose-100/70 to-white/80 z-20" />
```

**ตัวอย่าง (overlay จางลง):**
```jsx
<div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-rose-100/30 to-white/40 z-20" />
```

**ไม่ใช้ overlay เลย:**
```jsx
{/* <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-rose-100/50 to-white/60 z-20" /> */}
```

---

## ⚙️ การปรับแต่งขั้นสูง

### ปรับแต่งใน `Sketchfab3DBackground.jsx`:

เปิดไฟล์ `/src/components/Sketchfab3DBackground.jsx` และปรับแต่งตามต้องการ:

#### 1. ปรับสีพื้นหลัง (Scene Background)

```javascript
// บรรทัด 16
scene.background = new THREE.Color(0xfce7f3); // Pink-50
```

**สีแนะนำสำหรับธีมญี่ปุ่น:**
- `0xfce7f3` - Pink-50 (ปัจจุบัน) 🌸
- `0xfef3c7` - Amber-100 (อบอุ่น) ☀️
- `0xdbeafe` - Blue-50 (เย็นสบาย) 🌊
- `0xfcf5ff` - Purple-50 (ลึกลับ) 🎌
- `0xffffff` - White (สะอาด) ⚪
- `0x87ceeb` - Sky Blue (ท้องฟ้า) 🌤️

#### 2. ปรับความเร็วการหมุน

```javascript
// บรรทัด 167 (ใน animate function)
if (modelRef.current && autoRotate) {
  modelRef.current.rotation.y += 0.003; // เปลี่ยนตัวเลขนี้
}
```

**แนะนำ:**
- `0.001` - หมุนช้ามาก 🐢
- `0.003` - หมุนช้า (ปัจจุบัน) ✅
- `0.005` - หมุนปานกลาง
- `0.01` - หมุนเร็ว 🐇

#### 3. ปรับความสว่างของแสง (Lighting)

```javascript
// บรรทัด 40-52
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
// ค่า 0.6 = ความสว่าง (0.0 - 1.0)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// ค่า 1 = ความสว่าง (0.0 - 2.0)
```

**ถ้า model มืดเกินไป:**
```javascript
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // เพิ่มเป็น 0.8
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2); // เพิ่มเป็น 1.2
```

**ถ้า model สว่างเกินไป:**
```javascript
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // ลดเป็น 0.4
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7); // ลดเป็น 0.7
```

#### 4. ปรับสีแสงสำหรับ atmosphere (Pink lights)

```javascript
// บรรทัด 54-60
const pointLight1 = new THREE.PointLight(0xec4899, 0.8, 50);
// 0xec4899 = สีชมพู, 0.8 = ความสว่าง, 50 = ระยะส่องสว่าง

const pointLight2 = new THREE.PointLight(0xfda4af, 0.8, 50);
// 0xfda4af = สีชมพูอ่อน
```

**สีแนะนำ:**
- `0xec4899` - Pink-500 (สดใส) 🌸
- `0xfda4af` - Pink-300 (อ่อน) 🌺
- `0xfbbf24` - Amber-400 (ทอง) ✨
- `0x60a5fa` - Blue-400 (เย็น) 💙
- `0xa78bfa` - Purple-400 (ลึกลับ) 💜

#### 5. ปรับความ Smooth ของกล้อง (Camera Movement)

```javascript
// บรรทัด 175-177
const time = Date.now() * 0.0001; // ความเร็วของ movement
camera.position.x = Math.sin(time * 0.5) * 0.5; // ซ้าย-ขวา
camera.position.y = 2 + Math.cos(time * 0.3) * 0.3; // ขึ้น-ลง
```

**หยุดการเคลื่อนไหวของกล้อง:**
```javascript
// คอมเมนต์บรรทัดเหล่านี้ออก
// const time = Date.now() * 0.0001;
// camera.position.x = Math.sin(time * 0.5) * 0.5;
// camera.position.y = 2 + Math.cos(time * 0.3) * 0.3;
```

---

## 🎬 การแสดงผล & Performance

### ปรับ Quality สำหรับ Performance ที่ดีขึ้น:

#### 1. ปิด Shadows (ลด lag บน mobile):

```javascript
// บรรทัด 32-35
const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  alpha: true 
});
// renderer.shadowMap.enabled = true; // คอมเมนต์บรรทัดนี้ออก
```

#### 2. ลด Pixel Ratio:

```javascript
// บรรทัด 36
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1)); // เปลี่ยนจาก 2 เป็น 1
```

#### 3. ลดคุณภาพ Shadows:

```javascript
// บรรทัด 49
directionalLight.shadow.mapSize.width = 1024; // เปลี่ยนจาก 2048
directionalLight.shadow.mapSize.height = 1024; // เปลี่ยนจาก 2048
```

---

## 🌟 Preset การตั้งค่าแนะนำ

### Preset 1: Bright & Clean (สว่าง สะอาดตา)

```jsx
// HeroSection.jsx
<Sketchfab3DBackground 
  modelUrl="/ultimate_japanese_konbini.glb"
  cameraDistance={8}
  autoRotate={true}
/>

// Overlay
<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-pink-50/30 to-white/40 z-20" />
```

```javascript
// Sketchfab3DBackground.jsx
scene.background = new THREE.Color(0xffffff); // White
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
```

### Preset 2: Warm & Cozy (อบอุ่น น่ารัก)

```jsx
// HeroSection.jsx
<Sketchfab3DBackground 
  modelUrl="/ultimate_japanese_konbini.glb"
  cameraDistance={10}
  autoRotate={true}
/>

// Overlay
<div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-orange-50/50 to-yellow-50/60 z-20" />
```

```javascript
// Sketchfab3DBackground.jsx
scene.background = new THREE.Color(0xfef3c7); // Amber
const pointLight1 = new THREE.PointLight(0xfbbf24, 1, 50); // Gold
const pointLight2 = new THREE.PointLight(0xfcd34d, 1, 50); // Yellow
```

### Preset 3: Cool & Modern (เย็นสบาย ทันสมัย)

```jsx
// HeroSection.jsx
<Sketchfab3DBackground 
  modelUrl="/ultimate_japanese_konbini.glb"
  cameraDistance={7}
  autoRotate={false}
/>

// Overlay
<div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-cyan-50/40 to-white/50 z-20" />
```

```javascript
// Sketchfab3DBackground.jsx
scene.background = new THREE.Color(0xdbeafe); // Blue
const pointLight1 = new THREE.PointLight(0x60a5fa, 0.9, 50); // Blue
const pointLight2 = new THREE.PointLight(0x93c5fd, 0.9, 50); // Light Blue
```

### Preset 4: Night Mode (กลางคืน มีอารมณ์)

```jsx
// HeroSection.jsx
<Sketchfab3DBackground 
  modelUrl="/ultimate_japanese_konbini.glb"
  cameraDistance={9}
  autoRotate={true}
/>

// Overlay
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-800/30 to-blue-900/40 z-20" />
```

```javascript
// Sketchfab3DBackground.jsx
scene.background = new THREE.Color(0x1e1b4b); // Dark Blue
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // ลดลง
const pointLight1 = new THREE.PointLight(0xa78bfa, 1.2, 50); // Purple
const pointLight2 = new THREE.PointLight(0xfbbf24, 1.2, 50); // Gold (neon)
```

---

## 🐛 Troubleshooting

### ปัญหา: Model ไม่แสดง

**แก้ไข:**
1. ตรวจสอบ console สำหรับ error messages
2. ตรวจสอบ path ว่าถูกต้อง: `/ultimate_japanese_konbini.glb`
3. ตรวจสอบว่าไฟล์อยู่ใน `/public` folder
4. Refresh browser (Ctrl+Shift+R หรือ Cmd+Shift+R)

### ปัญหา: Model โหลดช้า

**แก้ไข:**
1. ใช้ loading placeholder
2. Optimize model ใน Blender (ลด polygon count)
3. Compress textures
4. ใช้ Draco compression (รองรับอยู่แล้ว)

### ปัญหา: Model มืดเกินไป

**แก้ไข:**
1. เพิ่มค่า `ambientLight` intensity เป็น `0.8-1.0`
2. เพิ่มค่า `directionalLight` intensity เป็น `1.2-1.5`
3. ลดความเข้มของ overlay (ลด opacity)

### ปัญหา: Model สว่างเกินไป

**แก้ไข:**
1. ลดค่า `ambientLight` intensity เป็น `0.3-0.4`
2. ลดค่า `directionalLight` intensity เป็น `0.5-0.7`
3. เพิ่มความเข้มของ overlay (เพิ่ม opacity)

### ปัญหา: Performance ไม่ดี (lag)

**แก้ไข:**
1. ปิด shadows (`renderer.shadowMap.enabled = false`)
2. ลด `pixelRatio` เป็น `1`
3. ลด `shadow.mapSize` เป็น `1024`
4. ปิด `autoRotate`
5. ใช้ model ที่เล็กกว่า

---

## 📝 Quick Reference

### การเปลี่ยน Model อื่น:

```jsx
// เปลี่ยนกลับไปใช้ Cherry Blossom particles
import ThreeHeroBackground from '@/components/ThreeHeroBackground';
<ThreeHeroBackground />

// ใช้ Konbini model (ปัจจุบัน)
import Sketchfab3DBackground from '@/components/Sketchfab3DBackground';
<Sketchfab3DBackground modelUrl="/ultimate_japanese_konbini.glb" />

// ใช้ model อื่นที่ดาวน์โหลด
<Sketchfab3DBackground modelUrl="/your_other_model.glb" />
```

---

## 🎨 Tips สำหรับการใช้งาน

✅ **DO:**
- ปรับ `cameraDistance` ให้เหมาะกับ model
- ใช้ gradient overlay เพื่อเพิ่มความสวยงาม
- ทดสอบบน mobile device
- ปิด shadows ถ้าเจอปัญหา performance

❌ **DON'T:**
- ใส่ model หลายอันใน Hero Section เดียวกัน
- ใช้ model ที่มีขนาดใหญ่เกิน 50MB
- ลืม optimize สำหรับ mobile
- ใช้ lighting ที่เข้มเกินไป (ทำให้ตาแสบ)

---

## 💬 Need Help?

หากต้องการความช่วยเหลือเพิ่มเติม:
- อ่าน `SKETCHFAB_GUIDE.md` - คู่มือการใช้งาน Sketchfab
- อ่าน `RECOMMENDED_MODELS.md` - Model แนะนำอื่นๆ
- ตรวจสอบ console สำหรับ error messages

---

**สนุกกับการปรับแต่ง! 🎉🏪**

