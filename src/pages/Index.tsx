import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number;
  material: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Труба профильная 60х60х3',
    category: 'Труба некондиция',
    price: 3200,
    image: 'https://cdn.poehali.dev/projects/0bf2e199-8159-4d90-8ca8-de69a7f20f58/files/466a7d7d-44d5-4bd6-9fec-375d4afbbbc8.jpg',
    description: 'Профильная труба квадратного сечения, некондиция',
    dimensions: { width: 60, height: 60, depth: 3 },
    weight: 5.4,
    material: 'Сталь',
  },
  {
    id: 2,
    name: 'Столб 60х60х2.5 L=3м',
    category: 'Столбы для забора',
    price: 1850,
    image: 'https://cdn.poehali.dev/projects/0bf2e199-8159-4d90-8ca8-de69a7f20f58/files/4e999b8e-86ca-478d-b4ad-894d6fcaa873.jpg',
    description: 'Столб для забора, длина 3 метра',
    dimensions: { width: 60, height: 3000, depth: 60 },
    weight: 13.5,
    material: 'Сталь оцинкованная',
  },
  {
    id: 3,
    name: 'Лага 40х20х2 L=3м',
    category: 'Прожилины (лаги)',
    price: 950,
    image: 'https://cdn.poehali.dev/projects/0bf2e199-8159-4d90-8ca8-de69a7f20f58/files/8e9859bf-db56-4c99-84f6-f449f9702384.jpg',
    description: 'Прожилина для забора, прямоугольное сечение',
    dimensions: { width: 40, height: 3000, depth: 20 },
    weight: 4.5,
    material: 'Сталь',
  },
  {
    id: 4,
    name: 'Труба ГОСТ 50х50х4',
    category: 'Труба ГОСТ',
    price: 4800,
    image: 'https://cdn.poehali.dev/projects/0bf2e199-8159-4d90-8ca8-de69a7f20f58/files/466a7d7d-44d5-4bd6-9fec-375d4afbbbc8.jpg',
    description: 'Профильная труба по ГОСТ 8639-82',
    dimensions: { width: 50, height: 50, depth: 4 },
    weight: 5.9,
    material: 'Сталь ГОСТ',
  },
  {
    id: 5,
    name: 'Столб 80х80х3 L=3м',
    category: 'Столбы для забора',
    price: 2650,
    image: 'https://cdn.poehali.dev/projects/0bf2e199-8159-4d90-8ca8-de69a7f20f58/files/4e999b8e-86ca-478d-b4ad-894d6fcaa873.jpg',
    description: 'Усиленный столб для забора, длина 3 метра',
    dimensions: { width: 80, height: 3000, depth: 80 },
    weight: 22.8,
    material: 'Сталь оцинкованная',
  },
  {
    id: 6,
    name: 'Лага 40х25х2 L=2.5м',
    category: 'Прожилины (лаги)',
    price: 820,
    image: 'https://cdn.poehali.dev/projects/0bf2e199-8159-4d90-8ca8-de69a7f20f58/files/8e9859bf-db56-4c99-84f6-f449f9702384.jpg',
    description: 'Прожилина для забора укороченная',
    dimensions: { width: 40, height: 2500, depth: 25 },
    weight: 4.2,
    material: 'Сталь',
  },
];

const categories = ['Труба некондиция', 'Столбы для забора', 'Прожилины (лаги)', 'Труба ГОСТ'];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('main');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">ARMA</h1>
            <nav className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setActiveSection('main')}
                className="text-sm font-medium text-blue-600 underline hover:no-underline hover:text-blue-400 transition-all"
              >
                Главная
              </button>
              <span className="text-gray-300">/</span>
              <button
                onClick={() => setActiveSection('products')}
                className="text-sm font-medium text-blue-600 underline hover:no-underline hover:text-blue-400 transition-all"
              >
                Продукция
              </button>
              <span className="text-gray-300">/</span>
              <button
                onClick={() => setActiveSection('services')}
                className="text-sm font-medium text-blue-600 underline hover:no-underline hover:text-blue-400 transition-all"
              >
                Услуги
              </button>
              <span className="text-gray-300">/</span>
              <button
                onClick={() => setActiveSection('prices')}
                className="text-sm font-medium text-blue-600 underline hover:no-underline hover:text-blue-400 transition-all"
              >
                Цены
              </button>
              <span className="text-gray-300">/</span>
              <button
                onClick={() => setActiveSection('offers')}
                className="text-sm font-medium text-blue-600 underline hover:no-underline hover:text-blue-400 transition-all"
              >
                Спецпредложения
              </button>
              <span className="text-gray-300">/</span>
              <button
                onClick={() => setActiveSection('delivery')}
                className="text-sm font-medium text-blue-600 underline hover:no-underline hover:text-blue-400 transition-all"
              >
                Доставка
              </button>
              <span className="text-gray-300">/</span>
              <button
                onClick={() => setActiveSection('contacts')}
                className="text-sm font-medium text-blue-600 underline hover:no-underline hover:text-blue-400 transition-all"
              >
                Контакты
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container sm:px-6 lg:px-8 sm:py-12 my-0 mx-0 py-4 px-8">
        {activeSection === 'main' && (
          <>
            <div className="animate-fade-in mx-0 py-0 my-0 bg-transparent rounded-none">
              <div className="relative max-w-xl mx-auto mb-8">
                <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="какой размер трубы ищите..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base rounded-full border-border focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <h2 className="text-2xl font-bold text-center mb-6">Популярные товары</h2>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className="rounded-full px-6 transition-all hover:scale-105"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 sm:gap-10">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group animate-fade-in cursor-pointer h-full flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                    <div className="aspect-square overflow-hidden bg-secondary/30">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <Badge variant="secondary" className="mb-3">
                        {product.category}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-2xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
                        <Icon name="ArrowRight" className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <Icon name="PackageOpen" size={64} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-xl text-muted-foreground">Товары не найдены</p>
              </div>
            )}
          </>
        )}

        {activeSection === 'about' && (
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">О наших товарах</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Мы тщательно отбираем каждый товар в нашем каталоге, чтобы предложить вам только лучшее.
                Наша коллекция включает предметы интерьера, мебель и декор в современном минималистичном стиле.
              </p>
              <p>
                Все товары представлены с подробными характеристиками: размерами, весом и материалами.
                Это поможет вам сделать правильный выбор для вашего пространства.
              </p>
              <p>
                Качество и дизайн — наши главные приоритеты. Мы работаем только с проверенными производителями
                и предлагаем продукцию, которая прослужит вам долгие годы.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Контакты</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@catalog.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/30">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Badge variant="secondary" className="mb-4">
                  {selectedProduct.category}
                </Badge>
                <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
                <p className="text-muted-foreground text-lg mb-6">{selectedProduct.description}</p>
                <div className="text-3xl font-bold mb-8 text-primary">
                  {selectedProduct.price.toLocaleString('ru-RU')} ₽
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-lg">Параметры товара</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <p className="text-muted-foreground mb-1">Размеры (Ш×В×Г)</p>
                      <p className="font-medium">
                        {selectedProduct.dimensions.width} × {selectedProduct.dimensions.height} × {selectedProduct.dimensions.depth} см
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <p className="text-muted-foreground mb-1">Вес</p>
                      <p className="font-medium">{selectedProduct.weight} кг</p>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg col-span-2">
                      <p className="text-muted-foreground mb-1">Материал</p>
                      <p className="font-medium">{selectedProduct.material}</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full h-12 text-base rounded-full"
                  variant="outline"
                >
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;