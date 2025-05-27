"use client";

import { useState, useEffect } from "react";
import {
  MessageCircle,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Clock,
  Star,
  ChefHat,
  Plus,
  Flame,
  ShoppingBag,
  Info,
  List,
  ShoppingCart,
  X,
  Minus,
  Circle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const ARS_CONVERSION = 1000; // 1 USD ≈ 1000 ARS (ajusta según cotización real)

const menuCategories = [
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    icon: "🍔",
    items: [
      {
        id: 1,
        name: "Clásica Premium",
        description:
          "Carne Angus 150g, lechuga, tomate, cebolla y salsa secreta",
        fullDescription:
          "Nuestra hamburguesa insignia preparada con carne de res Angus premium de 150g, lechuga hidropónica fresca, tomate orgánico, cebolla caramelizada y nuestra exclusiva salsa secreta de la casa. Servida en pan brioche artesanal tostado.",
        price: Math.round(14.99 * ARS_CONVERSION),
        image: "/hamburguesas/pexels-chevanon-1108117.jpg",
        popular: true,
        chef: false,
        ingredients: [
          "Carne Angus 150g",
          "Pan brioche",
          "Lechuga hidropónica",
          "Tomate orgánico",
          "Cebolla caramelizada",
          "Salsa secreta",
          "Pepinillos",
        ],
        calories: 520,
        prepTime: "12-15 min",
      },
      {
        id: 2,
        name: "BBQ Bacon",
        description: "Carne 200g, bacon, cebolla caramelizada, cheddar y BBQ",
        fullDescription:
          "Una explosión de sabores con carne de res premium de 200g, bacon artesanal crujiente, cebolla caramelizada lentamente, queso cheddar añejo y nuestra salsa BBQ casera ahumada. Una experiencia gastronómica inolvidable.",
        price: Math.round(18.99 * ARS_CONVERSION),
        image: "/hamburguesas/pexels-jonathanborba-18713426.jpg",
        popular: true,
        chef: true,
        ingredients: [
          "Carne premium 200g",
          "Bacon artesanal",
          "Queso cheddar añejo",
          "Cebolla caramelizada",
          "Salsa BBQ casera",
          "Pan brioche",
          "Lechuga",
        ],
        calories: 680,
        prepTime: "15-18 min",
      },
      {
        id: 3,
        name: "Mushroom Truffle",
        description: "Carne 150g, portobello, gruyère, trufa y hierbas",
        fullDescription:
          "Hamburguesa gourmet con carne de res selecta de 150g, champiñones portobello salteados, queso gruyère suizo, aceite de trufa negra y mayonesa de hierbas finas. Una delicia para paladares exigentes.",
        price: Math.round(19.49 * ARS_CONVERSION),
        image: "/hamburguesas/pexels-juansinag-4578849.jpg",
        chef: true,
        ingredients: [
          "Carne selecta 150g",
          "Champiñones portobello",
          "Queso gruyère",
          "Aceite de trufa negra",
          "Mayonesa de hierbas",
          "Pan artesanal",
          "Rúcula",
        ],
        calories: 590,
        prepTime: "16-20 min",
      },
      {
        id: 4,
        name: "Garden Veggie",
        description: "Vegetal artesanal, aguacate, brotes y tahini",
        fullDescription:
          "Hamburguesa 100% vegetal hecha con proteínas de legumbres y quinoa, aguacate fresco, brotes verdes, tomate heirloom, cebolla morada y salsa tahini casera. Nutritiva y deliciosa.",
        price: Math.round(15.99 * ARS_CONVERSION),
        image: "/hamburguesas/pexels-lucas-porras-1937324539-28828553.jpg",
        chef: false,
        ingredients: [
          "Hamburguesa vegetal",
          "Aguacate fresco",
          "Brotes verdes",
          "Tomate heirloom",
          "Cebolla morada",
          "Salsa tahini",
          "Pan integral",
        ],
        calories: 420,
        prepTime: "10-12 min",
      },
      {
        id: 5,
        name: "Spicy Jalapeño",
        description: "Carne 150g, jalapeños, pepper jack y chipotle",
        fullDescription:
          "Para los amantes del picante: carne de res jugosa de 150g, jalapeños frescos, queso pepper jack derretido, cebolla morada crujiente y salsa chipotle ahumada. ¡Prepárate para el fuego!",
        price: Math.round(16.99 * ARS_CONVERSION),
        image:
          "/hamburguesas/pexels-natan-machado-fotografia-gastronomica-162809799-11264609.jpg",
        chef: false,
        spicy: true,
        ingredients: [
          "Carne de res 150g",
          "Jalapeños frescos",
          "Queso pepper jack",
          "Cebolla morada",
          "Salsa chipotle",
          "Pan brioche",
          "Lechuga",
        ],
        calories: 580,
        prepTime: "12-15 min",
      },
      {
        id: 6,
        name: "Double Cheese",
        description: "Doble carne 120g, doble cheddar y salsa especial",
        fullDescription:
          "La hamburguesa más generosa: dos jugosas carnes de res de 120g cada una, doble porción de queso cheddar premium, lechuga crujiente, tomate fresco y nuestra salsa especial de la casa. ¡Para los más hambrientos!",
        price: Math.round(21.99 * ARS_CONVERSION),
        image: "/hamburguesas/pexels-wesleydavi-11062001.jpg",
        popular: true,
        chef: true,
        ingredients: [
          "Doble carne 120g c/u",
          "Doble cheddar premium",
          "Lechuga crujiente",
          "Tomate fresco",
          "Salsa especial",
          "Pan brioche",
          "Cebolla",
        ],
        calories: 750,
        prepTime: "18-22 min",
      },
    ],
  },
  {
    id: "acompañamientos",
    name: "Acompañamientos",
    icon: "🍟",
    items: [
      {
        id: 7,
        name: "Papas Artesanales",
        description: "Cortadas a mano, sal marina y hierbas",
        fullDescription:
          "Papas frescas cortadas a mano diariamente, fritas en aceite de girasol hasta lograr el punto perfecto: crujientes por fuera y suaves por dentro. Sazonadas con sal marina y hierbas aromáticas.",
        price: Math.round(5.99 * ARS_CONVERSION),
        image: "/acompañamientos/pexels-530123908-29150162.jpg",
        ingredients: [
          "Papas frescas",
          "Aceite de girasol",
          "Sal marina",
          "Hierbas aromáticas",
          "Romero",
          "Tomillo",
        ],
        calories: 320,
        prepTime: "8-10 min",
      },
      {
        id: 8,
        name: "Papas Loaded",
        description: "Con cheddar, bacon bits y cebollín",
        fullDescription:
          "Nuestras famosas papas artesanales cubiertas generosamente con queso cheddar derretido, bacon bits crujientes y cebollín fresco picado. El acompañamiento perfecto para compartir.",
        price: Math.round(8.99 * ARS_CONVERSION),
        image: "/acompañamientos/pexels-jonathanborba-18866156.jpg",
        ingredients: [
          "Papas artesanales",
          "Queso cheddar",
          "Bacon bits",
          "Cebollín fresco",
          "Crema agria",
          "Sal marina",
        ],
        calories: 480,
        prepTime: "10-12 min",
      },
      {
        id: 9,
        name: "Onion Rings",
        description: "Empanizados con cerveza artesanal",
        fullDescription:
          "Aros de cebolla dulce empanizados con masa de cerveza artesanal y fritos hasta obtener un dorado perfecto. Crujientes por fuera, tiernos y dulces por dentro.",
        price: Math.round(7.99 * ARS_CONVERSION),
        image: "/acompañamientos/pexels-roman-odintsov-5836999.jpg",
        ingredients: [
          "Cebolla dulce",
          "Harina especial",
          "Cerveza artesanal",
          "Especias secretas",
          "Aceite vegetal",
        ],
        calories: 380,
        prepTime: "12-15 min",
      },
      {
        id: 10,
        name: "Chicken Tenders",
        description: "8 tiras con especias y 3 salsas",
        fullDescription:
          "Ocho tiernas tiras de pechuga de pollo empanizadas con nuestra mezcla secreta de especias y fritas hasta dorar. Acompañadas de tres salsas: BBQ, ranch y honey mustard.",
        price: Math.round(9.99 * ARS_CONVERSION),
        image: "/acompañamientos/pexels-uniqueton-5384838.jpg",
        ingredients: [
          "Pechuga de pollo",
          "Empanizado especial",
          "Especias secretas",
          "Salsa BBQ",
          "Salsa ranch",
          "Honey mustard",
        ],
        calories: 520,
        prepTime: "15-18 min",
      },
    ],
  },
];

interface MenuItem {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  popular?: boolean;
  chef?: boolean;
  spicy?: boolean;
  ingredients: string[];
  calories: number;
  prepTime: string;
}

// Tipos para el carrito
interface CartItem {
  id: number;
  name: string;
  type: "simple" | "doble" | "triple";
  quantity: number;
  price: number;
}

export default function MobileFriendlyBurgerMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  // Estado para los selectores de tipo y cantidad
  const [selectedType, setSelectedType] = useState<{
    [id: number]: "simple" | "doble" | "triple";
  }>({});
  const [selectedQty, setSelectedQty] = useState<{ [id: number]: number }>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openItemDetail = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const orderViaWhatsApp = (item: MenuItem) => {
    const message = `¡Hola! Me gustaría ordenar:

🍔 *${item.name}* - $${item.price}

📝 Descripción: ${item.description}

¡Gracias!`;

    window.open(
      `https://wa.me/1234567890?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Añadir al carrito
  const addToCart = (
    item: MenuItem,
    type: "simple" | "doble" | "triple",
    quantity: number
  ) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.type === type);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.type === type
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          type,
          quantity,
          price:
            type === "doble"
              ? item.price * 1.7
              : type === "triple"
              ? item.price * 2.3
              : item.price,
        },
      ];
    });
    setShowCart(true);
  };

  // Eliminar del carrito
  const removeFromCart = (id: number, type: "simple" | "doble" | "triple") => {
    setCart((prev) => prev.filter((i) => !(i.id === id && i.type === type)));
  };

  // Enviar pedido por WhatsApp
  const sendCartToWhatsApp = () => {
    if (cart.length === 0) return;
    let message = "¡Hola! Me gustaría pedir:\n\n";
    cart.forEach((item) => {
      message +=
        `🍔 ${item.name} (${item.type}) x${item.quantity} - $${(
          item.price * item.quantity
        ).toLocaleString("es-AR")}` + "\n";
    });
    const total = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
    message += `\nTotal: $${total.toLocaleString("es-AR")}`;
    window.open(
      `https://wa.me/5492645648445?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header - Más elegante con sombras sutiles */}
      <header className="sticky top-0 z-40 shadow-2xl backdrop-blur-lg bg-black/40">
        {/* Imagen de fondo con overlay mejorado */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/j.jpg"
            alt="Hamburguesas artesanales"
            className="w-full h-full object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/70 to-orange-700/60"></div>
        </div>

        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo con transparencia y efecto sutil */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl backdrop-blur-sm">
                <img
                  src="/logo.png"
                  alt="Logo Mr. Roky"
                  className="w-10 h-10 object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Título con gradiente mejorado */}
              <div className="text-shadow-xl">
                <h1 className="text-3xl font-extrabold text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-300 animate-text">
                    Mr. Roky
                  </span>
                  <span className="text-white/90 font-semibold">
                    {" "}
                    burger shop
                  </span>
                </h1>
                <p className="text-orange-50 text-xs font-medium font-mono tracking-widest mt-0.5">
                  ✦ and more✦
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Sections - Con mejor espaciado y jerarquía */}
      <main className="container mx-auto px-4 py-6">
        {menuCategories.map((category) => (
          <section key={category.id} id={category.id} className="mb-10">
            {/* Encabezado de categoría - Centrado y consistente */}
            <div className="text-center mb-6">
              <div className="inline-block transform skew-x-[-12deg] bg-red-600 px-6 py-1 rounded-sm mb-2">
                <h2 className="text-3xl font-black text-white font-['Impact'] tracking-tighter transform skew-x-[12deg]">
                  {category.name.toUpperCase()}
                </h2>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
            </div>

            {/* Grid de productos con alineación perfecta */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 overflow-hidden flex flex-col h-full"
                >
                  {/* Imagen con relación de aspecto fija */}
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.image || "/burger-placeholder.jpg"}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover"
                      quality={90}
                    />
                    {/* Precio - Posición consistente */}
                    <div className="absolute top-2 right-2 bg-yellow-400 text-red-700 px-2 py-1 rounded-full text-xs font-extrabold shadow-md border-2 border-white">
                      {item.price.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        maximumFractionDigits: 0,
                      })}
                    </div>
                  </div>

                  {/* Contenido - Alineación consistente */}
                  <div className="p-3 flex flex-col flex-grow">
                    {/* Título con altura fija */}
                    <h3 className="font-extrabold text-gray-900 text-base mb-1 font-['Bebas_Neue'] tracking-wide min-h-[40px] flex items-center justify-center">
                      {item.name.toUpperCase()}
                    </h3>

                    {/* Ingredientes con altura fija */}
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2 font-sans min-h-[36px]">
                      {item.ingredients.join(" • ")}
                    </p>

                    {/* Botón siempre al final */}
                    <button
                      className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-lg text-sm flex items-center justify-center gap-1 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        openItemDetail(item);
                      }}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      ¡LO QUIERO!
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Modal de Detalle del Producto - Más elegante */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md w-[90vw] max-h-[85vh] overflow-y-auto rounded-xl border-0 p-0 bg-white shadow-lg">
          {selectedItem && (
            <>
              {/* Imagen responsive */}
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={selectedItem.image || "/burger-placeholder.jpg"}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                  quality={80}
                  priority
                  sizes="(max-width: 640px) 90vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Badge de precio más pequeño */}
                <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded-full shadow-sm">
                  <span className="font-bold text-base text-red-600">
                    {selectedItem.price.toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </div>

              {/* Contenido compacto para móvil */}
              <div className="p-4 space-y-3">
                <DialogHeader className="px-1">
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
                    {selectedItem.name.toUpperCase()}
                  </DialogTitle>
                </DialogHeader>

                {/* Sección de ingredientes optimizada */}
                <div className="mb-3 px-1">
                  <h3 className="text-xs font-semibold text-gray-500 mb-1.5">
                    INGREDIENTES
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-white border border-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-medium"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Selectores apilados en móvil */}
                <div className="bg-amber-50 p-2 sm:p-3 rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
                    <div className="w-full">
                      <Label className="block text-[11px] sm:text-xs font-bold text-gray-600 mb-1">
                        TIPO
                      </Label>
                      <Select
                        value={selectedType[selectedItem.id] || "simple"}
                        onValueChange={(value) =>
                          setSelectedType({
                            ...selectedType,
                            [selectedItem.id]: value as
                              | "simple"
                              | "doble"
                              | "triple",
                          })
                        }
                      >
                        <SelectTrigger className="w-full border-amber-300 bg-white text-xs sm:text-sm h-9 sm:h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            value="simple"
                            className="text-xs sm:text-sm"
                          >
                            Simple
                          </SelectItem>
                          <SelectItem
                            value="doble"
                            className="text-xs sm:text-sm"
                          >
                            Doble
                          </SelectItem>
                          <SelectItem
                            value="triple"
                            className="text-xs sm:text-sm"
                          >
                            Triple
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="w-full">
                      <Label className="block text-[11px] sm:text-xs font-bold text-gray-600 mb-1">
                        CANTIDAD
                      </Label>
                      <div className="flex items-center border border-amber-200 bg-white rounded-lg h-9 sm:h-10">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600 hover:bg-amber-100"
                          onClick={() =>
                            setSelectedQty({
                              ...selectedQty,
                              [selectedItem.id]: Math.max(
                                1,
                                (selectedQty[selectedItem.id] || 1) - 1
                              ),
                            })
                          }
                          disabled={(selectedQty[selectedItem.id] || 1) <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="flex-1 text-center font-medium text-gray-800 text-sm">
                          {selectedQty[selectedItem.id] || 1}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600 hover:bg-amber-100"
                          onClick={() =>
                            setSelectedQty({
                              ...selectedQty,
                              [selectedItem.id]:
                                (selectedQty[selectedItem.id] || 1) + 1,
                            })
                          }
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón sticky en móvil */}
                <div className="pt-1 sticky bottom-0 bg-white pb-2 sm:pb-0 sm:relative sm:bottom-auto">
                  <Button
                    className="w-full h-10 sm:h-11 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-sm"
                    onClick={() => {
                      addToCart(
                        selectedItem,
                        selectedType[selectedItem.id] || "simple",
                        selectedQty[selectedItem.id] || 1
                      );
                      setShowCart(true);
                      setIsModalOpen(false);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1.5" />
                    AGREGAR AL PEDIDO
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* WhatsApp Floating Button - Con animación */}
      <Button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-red-600 via-red-500 to-yellow-400 hover:from-red-700 hover:to-yellow-500 shadow-2xl hover:shadow-red-500/50 transform hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none border-4 border-white"
        onClick={() =>
          window.open(
            "https://wa.me/5492645648445?text=Hola, me gustaría hacer una consulta sobre el menú",
            "_blank"
          )
        }
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Button>

      {/* Mini carrito flotante mejorado con shadcn/ui */}
      {showCart && cart.length > 0 && (
        <div className="fixed bottom-20 right-4 z-50 bg-white rounded-xl shadow-xl border-2 border-red-100 w-80 overflow-hidden animate-slide-up">
          {/* Encabezado del carrito */}
          <div className="bg-red-600 p-3 flex items-center justify-between">
            <h4 className="font-bold text-lg text-white flex items-center gap-2 font-['Bebas_Neue'] tracking-wide">
              <ShoppingCart className="w-5 h-5" />
              TU PEDIDO
            </h4>
            <span className="bg-white text-red-600 text-xs font-bold px-2 py-1 rounded-full">
              {cart.reduce((total, item) => total + item.quantity, 0)} ITEMS
            </span>
          </div>

          {/* Lista de productos */}
          <ul className="max-h-60 overflow-y-auto divide-y divide-red-50">
            {cart.map((item, idx) => (
              <li
                key={item.id + "-" + item.type}
                className="flex justify-between items-center p-3 hover:bg-red-50/50 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm">
                    {item.name}
                    <span className="text-xs text-gray-500 ml-1">
                      ({item.type})
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.quantity} × ${item.price.toLocaleString("es-AR")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-red-600 text-sm">
                    ${(item.price * item.quantity).toLocaleString("es-AR")}
                  </span>
                  <button
                    className="text-red-500 hover:text-red-700 p-1 rounded-full transition"
                    title="Quitar"
                    onClick={() => removeFromCart(item.id, item.type)}
                    type="button"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total y botón de acción */}
          <div className="border-t border-red-100 p-3 bg-white">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-gray-800">TOTAL:</span>
              <span className="font-bold text-red-600 text-lg">
                $
                {cart
                  .reduce((acc, i) => acc + i.price * i.quantity, 0)
                  .toLocaleString("es-AR")}
              </span>
            </div>
            <Button
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
              onClick={sendCartToWhatsApp}
            >
              {/* <WhatsAppIcon className="w-5 h-5" /> */}
              ENVIAR PEDIDO
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
