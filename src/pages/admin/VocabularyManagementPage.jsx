
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Search, 
  Plus,
  Edit,
  Trash2,
  BookOpen,
  Image as ImageIcon,
  Tag,
  Filter,
  Save,
  X,
  Upload,
  Music,
  Trash,
  Grid,
  List,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import AdminLayout from '@/components/admin/AdminLayout';
import { vocabularyDatabase, categories, levels } from '@/data/vocabularyData';

const VocabularyManagementPage = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  
  // Dialog states
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingWord, setEditingWord] = useState(null);
  const [formData, setFormData] = useState({
    japanese: '',
    hiragana: '',
    romaji: '',
    thai: '',
    category: 'greetings',
    level: 'N5',
    image: '',
    audio: ''
  });
  
  const [imagePreview, setImagePreview] = useState('');
  const [audioPreview, setAudioPreview] = useState('');
  
  // Local vocabulary state
  const [localVocabulary, setLocalVocabulary] = useState(() => {
    const saved = localStorage.getItem('customVocabulary');
    return saved ? JSON.parse(saved) : [];
  });

  // Flatten vocabulary database
  const getAllVocabulary = () => {
    const allVocab = [];
    Object.keys(vocabularyDatabase).forEach(category => {
      Object.keys(vocabularyDatabase[category]).forEach(level => {
        vocabularyDatabase[category][level].forEach(word => {
          allVocab.push({
            ...word,
            category,
            level,
            isCustom: false
          });
        });
      });
    });
    // Add custom vocabulary from localStorage
    localVocabulary.forEach(word => {
      allVocab.push({
        ...word,
        isCustom: true
      });
    });
    return allVocab;
  };

  const allVocabulary = getAllVocabulary();

  // CRUD Functions
  const handleOpenDialog = (word = null) => {
    if (word) {
      setEditingWord(word);
      setFormData({
        japanese: word.japanese,
        hiragana: word.hiragana,
        romaji: word.romaji,
        thai: word.thai,
        category: word.category,
        level: word.level,
        image: word.image || '',
        audio: word.audio || ''
      });
      setImagePreview(word.image || '');
      setAudioPreview(word.audio || '');
    } else {
      setEditingWord(null);
      setFormData({
        japanese: '',
        hiragana: '',
        romaji: '',
        thai: '',
        category: 'greetings',
        level: 'N5',
        image: '',
        audio: ''
      });
      setImagePreview('');
      setAudioPreview('');
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingWord(null);
    setFormData({
      japanese: '',
      hiragana: '',
      romaji: '',
      thai: '',
      category: 'greetings',
      level: 'N5',
      image: '',
      audio: ''
    });
    setImagePreview('');
    setAudioPreview('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: '❌ ไฟล์ใหญ่เกินไป',
        description: 'ขนาดไฟล์ต้องไม่เกิน 2MB',
        variant: 'destructive',
      });
      return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: '❌ ไฟล์ไม่ถูกต้อง',
        description: 'กรุณาเลือกไฟล์รูปภาพ (JPG, PNG, GIF)',
        variant: 'destructive',
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setFormData(prev => ({
        ...prev,
        image: base64String
      }));
      setImagePreview(base64String);
    };
    reader.readAsDataURL(file);
  };

  // Handle audio file upload
  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: '❌ ไฟล์ใหญ่เกินไป',
        description: 'ขนาดไฟล์เสียงต้องไม่เกิน 5MB',
        variant: 'destructive',
      });
      return;
    }

    // Check file type
    if (!file.type.startsWith('audio/')) {
      toast({
        title: '❌ ไฟล์ไม่ถูกต้อง',
        description: 'กรุณาเลือกไฟล์เสียง (MP3, WAV, OGG)',
        variant: 'destructive',
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setFormData(prev => ({
        ...prev,
        audio: base64String
      }));
      setAudioPreview(base64String);
    };
    reader.readAsDataURL(file);
  };

  // Remove image
  const handleRemoveImage = () => {
    setFormData(prev => ({ ...prev, image: '' }));
    setImagePreview('');
  };

  // Remove audio
  const handleRemoveAudio = () => {
    setFormData(prev => ({ ...prev, audio: '' }));
    setAudioPreview('');
  };

  const handleSaveWord = () => {
    if (!formData.japanese || !formData.hiragana || !formData.romaji || !formData.thai) {
      toast({
        title: '❌ กรุณากรอกข้อมูลให้ครบ',
        description: 'กรุณากรอกข้อมูลในช่องที่จำเป็นทั้งหมด',
        variant: 'destructive',
      });
      return;
    }

    let updatedVocabulary = [...localVocabulary];

    if (editingWord && editingWord.isCustom) {
      // Edit existing custom word
      updatedVocabulary = updatedVocabulary.map(word =>
        word.id === editingWord.id ? { ...formData, id: editingWord.id } : word
      );
      toast({
        title: '✅ แก้ไขคำศัพท์สำเร็จ',
        description: `แก้ไข "${formData.japanese}" เรียบร้อยแล้ว`,
      });
    } else {
      // Add new word
      const newWord = {
        ...formData,
        id: Date.now(),
      };
      updatedVocabulary.push(newWord);
      toast({
        title: '✅ เพิ่มคำศัพท์สำเร็จ',
        description: `เพิ่ม "${formData.japanese}" เรียบร้อยแล้ว`,
      });
    }

    localStorage.setItem('customVocabulary', JSON.stringify(updatedVocabulary));
    setLocalVocabulary(updatedVocabulary);
    handleCloseDialog();
  };

  const filteredVocabulary = allVocabulary.filter(word => {
    const matchesSearch = 
      word.japanese.includes(searchQuery) ||
      word.romaji.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.thai.includes(searchQuery) ||
      word.hiragana.includes(searchQuery);
    
    const matchesCategory = selectedCategory === 'all' || word.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || word.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Pagination
  const totalPages = Math.ceil(filteredVocabulary.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedVocabulary = filteredVocabulary.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedLevel]);

  const handleDelete = (word) => {
    if (!word.isCustom) {
      toast({
        title: '⚠️ ไม่สามารถลบได้',
        description: 'ไม่สามารถลบคำศัพท์ในระบบได้ ลบได้เฉพาะคำที่เพิ่มเอง',
        variant: 'destructive',
      });
      return;
    }

    const updatedVocabulary = localVocabulary.filter(w => w.id !== word.id);
    localStorage.setItem('customVocabulary', JSON.stringify(updatedVocabulary));
    setLocalVocabulary(updatedVocabulary);
    
    toast({
      title: '✅ ลบคำศัพท์สำเร็จ',
      description: `ลบ "${word.japanese}" ออกจากระบบแล้ว`,
    });
  };

  const getCategoryName = (categoryId) => {
    return categories.find(c => c.id === categoryId)?.name || categoryId;
  };

  const getLevelColor = (level) => {
    const colors = {
      N5: 'bg-green-100 text-green-700 border-green-200',
      N4: 'bg-blue-100 text-blue-700 border-blue-200',
      N3: 'bg-purple-100 text-purple-700 border-purple-200',
      N2: 'bg-orange-100 text-orange-700 border-orange-200',
      N1: 'bg-red-100 text-red-700 border-red-200'
    };
    return colors[level] || colors.N5;
  };

  // Statistics
  const stats = {
    total: allVocabulary.length,
    custom: localVocabulary.length,
    system: allVocabulary.length - localVocabulary.length,
    byLevel: levels.reduce((acc, level) => {
      acc[level] = allVocabulary.filter(w => w.level === level).length;
      return acc;
    }, {}),
    byCategory: categories.reduce((acc, cat) => {
      acc[cat.id] = allVocabulary.filter(w => w.category === cat.id).length;
      return acc;
    }, {})
  };

  return (
    <AdminLayout>
      <Helmet>
        <title>Vocabulary Management | Admin Panel</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Vocabulary Management</h1>
            <p className="text-gray-500 mt-1">Manage vocabulary words across all categories and levels</p>
          </div>
          <Button 
            onClick={() => handleOpenDialog()}
            className="gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
          >
            <Plus className="w-4 h-4" />
            Add New Word
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          <Card className="border-none shadow-md md:col-span-2 lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Words</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-gray-500">System: {stats.system}</p>
                    <span className="text-gray-300">•</span>
                    <p className="text-xs text-purple-600">✨ Custom: {stats.custom}</p>
                  </div>
                </div>
                <div className="bg-pink-50 p-3 rounded-xl">
                  <BookOpen className="w-8 h-8 text-pink-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {levels.slice(0, 4).map((level) => (
            <Card key={level} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">{level}</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.byLevel[level]}</p>
                  <span className={`inline-block mt-2 px-2 py-0.5 text-xs font-semibold rounded-full border ${getLevelColor(level)}`}>
                    {level}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="border-none shadow-md">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Top Row - Search and View Mode */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="ค้นหาคำศัพท์... (Japanese, Romaji, Thai)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                {/* View Mode Toggle */}
                <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'bg-white shadow-sm' : ''}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'bg-white shadow-sm' : ''}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Bottom Row - Filters */}
              <div className="flex flex-wrap gap-3">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                >
                  <option value="all">📚 ทุกหมวดหมู่</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
                  ))}
                </select>

                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                >
                  <option value="all">🎯 ทุกระดับ</option>
                  {levels.map((level) => (
                    <option key={level} value={level}>Level {level}</option>
                  ))}
                </select>

                {/* Quick Filter Chips */}
                {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all') && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedLevel('all');
                    }}
                    className="text-sm"
                  >
                    <X className="w-4 h-4 mr-1" />
                    ล้างตัวกรอง
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vocabulary List */}
        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>คำศัพท์ทั้งหมด</CardTitle>
                <CardDescription>
                  แสดง {startIndex + 1}-{Math.min(endIndex, filteredVocabulary.length)} จาก {filteredVocabulary.length} คำ
                  {filteredVocabulary.length !== stats.total && ` (กรองจาก ${stats.total} คำ)`}
                </CardDescription>
              </div>
              <div className="text-sm text-gray-500">
                หน้า {currentPage} / {totalPages || 1}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {viewMode === 'grid' ? (
              /* Grid View */
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {paginatedVocabulary.map((word, index) => (
                  <motion.div
                    key={word.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all bg-white"
                  >
                    {/* Image */}
                    {word.image && (
                      <div className="w-full h-32 mb-3 rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={word.image} 
                          alt={word.japanese}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}

                    {/* Word Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">{word.japanese}</h3>
                        <div className="flex gap-1">
                          <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${getLevelColor(word.level)}`}>
                            {word.level}
                          </span>
                          {word.isCustom && (
                            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                              ✨
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600">{word.hiragana}</p>
                      <p className="text-sm text-pink-600 font-medium">{word.romaji}</p>
                      <p className="text-sm text-gray-700">{word.thai}</p>
                      
                      <div className="flex items-center gap-1 text-xs text-gray-500 pt-2 border-t">
                        <Tag className="w-3 h-3" />
                        {getCategoryName(word.category)}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1"
                          onClick={() => handleOpenDialog(word)}
                          disabled={!word.isCustom}
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          แก้ไข
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDelete(word)}
                          disabled={!word.isCustom}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-3">
                {paginatedVocabulary.map((word, index) => (
                <motion.div
                  key={word.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  {/* Image */}
                  <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    {word.image ? (
                      <img 
                        src={word.image} 
                        alt={word.japanese}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="w-full h-full hidden items-center justify-center bg-gray-200">
                      <ImageIcon className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>

                  {/* Word Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-900">{word.japanese}</h3>
                      <span className="text-gray-600">({word.hiragana})</span>
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${getLevelColor(word.level)}`}>
                        {word.level}
                      </span>
                      {word.isCustom && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                          ✨ Custom
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-pink-600 font-medium">{word.romaji}</span>
                      <span className="text-gray-600">→</span>
                      <span className="text-gray-700">{word.thai}</span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Tag className="w-3 h-3" />
                        {getCategoryName(word.category)}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-9 w-9"
                      onClick={() => handleOpenDialog(word)}
                      disabled={!word.isCustom}
                      title={!word.isCustom ? 'ไม่สามารถแก้ไขคำศัพท์ในระบบได้' : 'แก้ไข'}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-9 w-9 text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDelete(word)}
                      disabled={!word.isCustom}
                      title={!word.isCustom ? 'ไม่สามารถลบคำศัพท์ในระบบได้' : 'ลบ'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
              </div>
            )}

            {/* Empty State */}
            {paginatedVocabulary.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ไม่พบคำศัพท์</h3>
                <p className="text-gray-500 mb-4">ลองค้นหาด้วยคำอื่น หรือเปลี่ยนตัวกรอง</p>
                {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all') && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedLevel('all');
                    }}
                  >
                    ล้างตัวกรอง
                  </Button>
                )}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-6 border-t mt-6">
                <div className="text-sm text-gray-600">
                  แสดง {startIndex + 1}-{Math.min(endIndex, filteredVocabulary.length)} จาก {filteredVocabulary.length} รายการ
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    ก่อนหน้า
                  </Button>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                          className={currentPage === pageNum ? 'bg-gradient-to-r from-pink-500 to-rose-500' : ''}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    ถัดไป
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Add/Edit Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {editingWord ? '✏️ แก้ไขคำศัพท์' : '➕ เพิ่มคำศัพท์ใหม่'}
              </DialogTitle>
              <DialogDescription>
                {editingWord 
                  ? 'แก้ไขข้อมูลคำศัพท์ที่ต้องการเปลี่ยนแปลง'
                  : 'กรอกข้อมูลคำศัพท์ภาษาญี่ปุ่นที่ต้องการเพิ่ม'
                }
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Japanese */}
                <div className="space-y-2">
                  <Label htmlFor="japanese" className="flex items-center gap-1">
                    <span className="text-red-500">*</span> ภาษาญี่ปุ่น (Kanji)
                  </Label>
                  <Input
                    id="japanese"
                    name="japanese"
                    value={formData.japanese}
                    onChange={handleInputChange}
                    placeholder="例: 犬"
                    className="text-lg"
                  />
                </div>

                {/* Hiragana */}
                <div className="space-y-2">
                  <Label htmlFor="hiragana" className="flex items-center gap-1">
                    <span className="text-red-500">*</span> ฮิระงะนะ
                  </Label>
                  <Input
                    id="hiragana"
                    name="hiragana"
                    value={formData.hiragana}
                    onChange={handleInputChange}
                    placeholder="例: いぬ"
                    className="text-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Romaji */}
                <div className="space-y-2">
                  <Label htmlFor="romaji" className="flex items-center gap-1">
                    <span className="text-red-500">*</span> โรมาจิ
                  </Label>
                  <Input
                    id="romaji"
                    name="romaji"
                    value={formData.romaji}
                    onChange={handleInputChange}
                    placeholder="例: inu"
                  />
                </div>

                {/* Thai */}
                <div className="space-y-2">
                  <Label htmlFor="thai" className="flex items-center gap-1">
                    <span className="text-red-500">*</span> ความหมาย (ไทย)
                  </Label>
                  <Input
                    id="thai"
                    name="thai"
                    value={formData.thai}
                    onChange={handleInputChange}
                    placeholder="例: สุนัข"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="flex items-center gap-1">
                    <span className="text-red-500">*</span> หมวดหมู่
                  </Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Level */}
                <div className="space-y-2">
                  <Label htmlFor="level" className="flex items-center gap-1">
                    <span className="text-red-500">*</span> ระดับ JLPT
                  </Label>
                  <select
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  <ImageIcon className="w-4 h-4" />
                  อัพโหลดรูปภาพ (ไม่บังคับ)
                </Label>
                
                {!imagePreview ? (
                  <div className="flex items-center gap-2">
                    <label className="flex-1">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-pink-500 hover:bg-pink-50 transition-all">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-600 mb-1">คลิกเพื่ออัพโหลดรูปภาพ</p>
                        <p className="text-xs text-gray-400">JPG, PNG, GIF (สูงสุด 2MB)</p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                ) : (
                  <div className="relative inline-block">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-40 h-40 object-cover rounded-lg border-2 border-gray-200"
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="destructive"
                      onClick={handleRemoveImage}
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full"
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Audio Upload */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  <Music className="w-4 h-4" />
                  อัพโหลดไฟล์เสียง (ไม่บังคับ)
                </Label>
                
                {!audioPreview ? (
                  <div className="flex items-center gap-2">
                    <label className="flex-1">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                        <Music className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-600 mb-1">คลิกเพื่ออัพโหลดไฟล์เสียง</p>
                        <p className="text-xs text-gray-400">MP3, WAV, OGG (สูงสุด 5MB)</p>
                      </div>
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={handleAudioUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-blue-700">🔊 ไฟล์เสียงพร้อมใช้งาน</p>
                        <Button
                          type="button"
                          size="sm"
                          variant="destructive"
                          onClick={handleRemoveAudio}
                          className="h-7 px-2"
                        >
                          <Trash className="w-3 h-3 mr-1" />
                          ลบ
                        </Button>
                      </div>
                      <audio controls className="w-full">
                        <source src={audioPreview} />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
                <p className="font-medium mb-1">💡 คำแนะนำ:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>ช่องที่มี <span className="text-red-500">*</span> จำเป็นต้องกรอก</li>
                  <li>รูปภาพ: JPG, PNG, GIF ขนาดไม่เกิน 2MB</li>
                  <li>ไฟล์เสียง: MP3, WAV, OGG ขนาดไม่เกิน 5MB</li>
                  <li>ไฟล์จะถูกแปลงเป็น Base64 และเก็บใน localStorage</li>
                </ul>
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={handleCloseDialog}
                className="gap-2"
              >
                <X className="w-4 h-4" />
                ยกเลิก
              </Button>
              <Button
                onClick={handleSaveWord}
                className="gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              >
                <Save className="w-4 h-4" />
                {editingWord ? 'บันทึกการแก้ไข' : 'เพิ่มคำศัพท์'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default VocabularyManagementPage;

