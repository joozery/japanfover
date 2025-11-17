# 🎨 คู่มือการใช้ 3D Models จาก Sketchfab

## วิธีที่ 1: ใช้ Sketchfab Embed (ง่ายที่สุด) ⚡

### ขั้นตอน:

1. **ค้นหา Model ที่ชอบ:**
   - ไปที่ [Sketchfab](https://sketchfab.com/)
   - ค้นหาคำที่เกี่ยวข้อง เช่น:
     - `cherry blossom japan`
     - `sakura tree`
     - `japanese temple`
     - `torii gate`
     - `japan culture`
     - `anime scene`

2. **คัดลอก Model ID:**
   - คลิกที่ model ที่ต้องการ
   - URL จะมีรูปแบบ: `https://sketchfab.com/3d-models/[model-name]-[MODEL_ID]`
   - ตัวอย่าง: `https://sketchfab.com/3d-models/cherry-blossom-ff2baf0f98944765a6b9937fa5d0850e`
   - Model ID คือ: `ff2baf0f98944765a6b9937fa5d0850e`

3. **ใช้ใน HeroSection:**

```jsx
import SketchfabEmbed from '@/components/SketchfabEmbed';

// ใน HeroSection.jsx แทนที่ ThreeHeroBackground ด้วย:
<SketchfabEmbed 
  modelId="ff2baf0f98944765a6b9937fa5d0850e" 
  title="Cherry Blossom"
  autoStart={1}
/>
```

### ✅ ข้อดี:
- ไม่ต้องดาวน์โหลดไฟล์
- ใช้งานได้ทันที
- อัพเดทอัตโนมัติจาก Sketchfab

### ❌ ข้อเสีย:
- ต้องมี internet
- ควบคุมน้อยกว่า
- มี Sketchfab branding

---

## วิธีที่ 2: ใช้ Three.js GLTFLoader (แนะนำ) 🎯

### ขั้นตอน:

#### 1. ดาวน์โหลด Model จาก Sketchfab

1. เข้าไปที่ model ที่ต้องการ
2. คลิกปุ่ม **"Download 3D Model"** (ต้อง login ก่อน)
3. เลือกรูปแบบ: **"glTF (.gltf/.glb + .bin + textures)"** หรือ **"glTF Binary (.glb)"**
   - แนะนำ `.glb` เพราะเป็นไฟล์เดียว
4. ดาวน์โหลดและแตกไฟล์

#### 2. วาง Model ในโปรเจค

```bash
# สร้างโฟลเดอร์
mkdir -p public/models

# วางไฟล์ที่ดาวน์โหลด
# public/models/cherry_blossom.glb
# หรือ
# public/models/cherry_blossom/scene.gltf
```

#### 3. ใช้ใน HeroSection:

```jsx
import Sketchfab3DBackground from '@/components/Sketchfab3DBackground';

// ใน HeroSection.jsx แทนที่ ThreeHeroBackground ด้วย:
<Sketchfab3DBackground 
  modelUrl="/models/cherry_blossom.glb"
  cameraDistance={5}
  autoRotate={true}
/>
```

### ✅ ข้อดี:
- ควบคุมได้เต็มที่ (แสง, กล้อง, animation)
- ไม่ต้องพึ่ง internet
- Performance ดีกว่า
- ไม่มี branding

### ❌ ข้อเสีย:
- ต้องดาวน์โหลดไฟล์
- ขนาดไฟล์อาจใหญ่
- ต้อง setup เอง

---

## 🎨 Model แนะนำสำหรับธีมญี่ปุ่น:

### Free Models บน Sketchfab (ค้นหาได้ง่าย):

1. **Cherry Blossom Tree** 🌸
   - ค้นหา: "cherry blossom tree"
   - เหมาะกับ: Hero Section พื้นหลัง

2. **Torii Gate** ⛩️
   - ค้นหา: "torii gate japan"
   - เหมาะกับ: พื้นหลังแบบ dramatic

3. **Japanese Temple** 🏯
   - ค้นหา: "japanese temple"
   - เหมาะกับ: พื้นหลังแบบ peaceful

4. **Sakura Petals** 🌺
   - ค้นหา: "sakura petals"
   - เหมาะกับ: animation ที่เบาสบาย

5. **Mt. Fuji Scene** 🗻
   - ค้นหา: "mount fuji japan"
   - เหมาะกับ: landscape background

---

## 📝 ตัวอย่างการใช้งานใน HeroSection.jsx

### Option A: ใช้ Sketchfab Embed (iframe)

```jsx
import SketchfabEmbed from '@/components/SketchfabEmbed';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <div className="absolute w-full h-full">
        {/* Sketchfab Embed */}
        <SketchfabEmbed 
          modelId="YOUR_MODEL_ID_HERE" 
          title="Cherry Blossom"
        />
        
        {/* Pink gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-rose-100/50 to-white/60 z-20" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-30">
          {/* Your content here */}
        </div>
      </div>
    </section>
  );
};
```

### Option B: ใช้ Three.js GLTFLoader (recommended)

```jsx
import Sketchfab3DBackground from '@/components/Sketchfab3DBackground';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <div className="absolute w-full h-full">
        {/* Three.js GLTF Loader */}
        <Sketchfab3DBackground 
          modelUrl="/models/cherry_blossom.glb"
          cameraDistance={6}
          autoRotate={true}
        />
        
        {/* Pink gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-rose-100/50 to-white/60 z-20" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-30">
          {/* Your content here */}
        </div>
      </div>
    </section>
  );
};
```

---

## 🎬 Tips สำหรับ Performance:

1. **ไฟล์ขนาดเล็ก:**
   - แนะนำ < 10MB สำหรับ web
   - ใช้ `.glb` แทน `.gltf` (compressed)
   - บีบอัดรูปภาพ texture ให้เล็กลง

2. **Optimize Loading:**
   - ใช้ Draco compression (รองรับอยู่แล้วใน component)
   - Lazy load model หลัง page load
   - แสดง loading placeholder

3. **Mobile Performance:**
   - พิจารณาใช้ model ที่ง่ายกว่าสำหรับ mobile
   - ลด polygon count
   - ปิด shadows บน mobile

---

## 🔧 Troubleshooting:

### Model ไม่แสดง:
```
✅ Check console สำหรับ error messages
✅ ตรวจสอบ path ของไฟล์ (/public/models/...)
✅ ลอง model อื่นก่อน
✅ ตรวจสอบ file permissions
```

### Model แสดงแต่เล็กเกินไป/ใหญ่เกินไป:
```jsx
// ปรับ cameraDistance
<Sketchfab3DBackground 
  cameraDistance={10} // เพิ่มขึ้นถ้าใหญ่เกิน
/>
```

### Model ไม่หมุน:
```jsx
// ตรวจสอบ autoRotate
<Sketchfab3DBackground 
  autoRotate={true} // ต้องเป็น true
/>
```

---

## 🌟 ตัวอย่าง Model IDs (Sketchfab):

```javascript
// Cherry Blossom Tree
modelId: "ff2baf0f98944765a6b9937fa5d0850e"

// Japanese Temple
modelId: "42fd5c699c8342e09b5d7a62b7e2a30d"

// Torii Gate
modelId: "e03d7f8f93004e15a57e9bfaa9d90f5a"

// Mt. Fuji
modelId: "c6b64b8c0ce74e0aa2e9c8b9aa8e4f5d"
```

*Note: ตรวจสอบ license ของแต่ละ model ก่อนใช้งาน*

---

## 📚 Resources:

- [Sketchfab](https://sketchfab.com/)
- [Three.js GLTFLoader Docs](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)
- [glTF Viewer](https://gltf-viewer.donmccurdy.com/)
- [Draco Compression](https://google.github.io/draco/)

