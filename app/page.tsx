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
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const menuCategories = [
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    icon: "🍔",
    items: [
      {
        id: 1,
        name: "Bacon Cheeseburger",
        description:
          "Cheddar x2, medallón y panceta ahumada. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "Hamburguesa con doble cheddar, medallón de carne y panceta ahumada. Una combinación clásica e irresistible. ¡Incluye papas Mc Cain en el precio!",
        price: 8600,
        image: "/hamburguesas/1.jpg",
        ingredients: [
          "Cheddar x2",
          "Medallón",
          "Panceta ahumada",
          "Papas Mc Cain incluidas",
        ],
        calories: 650,
        prepTime: "12-15 min",
        popular: true,
        chef: false,
      },
      {
        id: 2,
        name: "American Cheese Burger",
        description:
          "Tomate, cheddar, lechuga y salsa tosty casera. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "Una hamburguesa con sabor americano: tomate fresco, cheddar fundido, lechuga crocante y nuestra salsa tosty casera. ¡Incluye papas Mc Cain en el precio!",
        price: 8400,
        image: "/hamburguesas/2.jpg",
        ingredients: [
          "Tomate",
          "Cheddar",
          "Lechuga",
          "Salsa tosty casera",
          "Papas Mc Cain incluidas",
        ],
        calories: 620,
        prepTime: "12-15 min",
        popular: false,
        chef: false,
      },
      {
        id: 3,
        name: "Big Roky",
        description:
          "Doble carne, cheddar x3, pepinillos, lechuga, cebolla y salsa HR. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "Potente hamburguesa con doble medallón, triple cheddar, pepinillos caseros, lechuga, cebolla salteada y salsa HR casera. ¡Incluye papas Mc Cain en el precio!",
        price: 9200,
        image: "/hamburguesas/3.jpg",
        ingredients: [
          "Doble carne",
          "Cheddar x3",
          "Pepinillos",
          "Lechuga",
          "Cebolla",
          "Salsa HR",
          "Papas Mc Cain incluidas",
        ],
        calories: 780,
        prepTime: "15-18 min",
        popular: true,
        chef: true,
      },
      {
        id: 4,
        name: "Fried Egg",
        description:
          "Cheddar x2, medallón y huevo frito. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "Una deliciosa combinación de medallón de carne, cheddar doble y un huevo frito con yema cremosa. ¡Incluye papas Mc Cain en el precio!",
        price: 8200,
        image: "/hamburguesas/44.jpg",
        ingredients: [
          "Cheddar x2",
          "Medallón",
          "Huevo frito",
          "Papas Mc Cain incluidas",
        ],
        calories: 670,
        prepTime: "12-14 min",
        popular: false,
        chef: false,
      },
      {
        id: 5,
        name: "Oklahoma",
        description:
          "Cheddar, pepinillos, cebolla a la plancha, kétchup y mostaza. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "Estilo tradicional con cheddar, pepinillos, cebolla a la plancha y los clásicos kétchup y mostaza. ¡Incluye papas Mc Cain en el precio!",
        price: 8000,
        image: "/hamburguesas/5.jpg",
        ingredients: [
          "Cheddar",
          "Pepinillos",
          "Cebolla a la plancha",
          "Kétchup",
          "Mostaza",
          "Papas Mc Cain incluidas",
        ],
        calories: 610,
        prepTime: "12-15 min",
        popular: false,
        chef: false,
      },
      {
        id: 6,
        name: "Crispy Burger",
        description:
          "Medallón, cheddar x2, lechuga, tomate y cebolla crispy. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "Hamburguesa con medallón jugoso, doble cheddar, vegetales frescos y cebolla crispy para un toque crujiente. ¡Incluye papas Mc Cain en el precio!",
        price: 7900,
        image: "/hamburguesas/6.jpg",
        ingredients: [
          "Medallón",
          "Cheddar x2",
          "Lechuga",
          "Tomate",
          "Cebolla crispy",
          "Papas Mc Cain incluidas",
        ],
        calories: 690,
        prepTime: "14-16 min",
        popular: true,
        chef: false,
      },
      {
        id: 7,
        name: "Honey",
        description:
          "Medallón, cheddar x3, pancetas caramelizadas, pan con manteca y miel. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "Sabor dulce y salado con cheddar triple, panceta caramelizada, pan dorado en manteca y baño de miel. ¡Incluye papas Mc Cain en el precio!",
        price: 8500,
        image: "/hamburguesas/7.jpg",
        ingredients: [
          "Medallón",
          "Cheddar x3",
          "Panceta caramelizada",
          "Pan con manteca",
          "Miel",
          "Papas Mc Cain incluidas",
        ],
        calories: 730,
        prepTime: "15-17 min",
        popular: false,
        chef: true,
      },
      {
        id: 8,
        name: "Argentina Papaaa",
        description:
          "Triple medallón, pan de queso, cebolla caramelizada, panceta, huevo y chimi casero. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "La más completa: triple carne, pan de queso, panceta, huevo frito, cebolla caramelizada y chimi casero. ¡Argentinísima! ¡Incluye papas Mc Cain en el precio!",
        price: 11800,
        image: "/hamburguesas/88.jpg",
        ingredients: [
          "Triple medallón",
          "Pan de queso",
          "Cebolla caramelizada",
          "Panceta",
          "Huevo frito",
          "Chimichurri casero",
          "Papas Mc Cain incluidas",
        ],
        calories: 950,
        prepTime: "18-22 min",
        popular: true,
        chef: true,
      },
    ],
  },
  {
    id: "lomos",
    name: "Lomos",
    icon: "🥩",
    items: [
      {
        id: 1,
        name: "Roky Common",
        description:
          "Carne de lomo, lechuga, tomate, jamón, queso y mayonesa casera. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "Lomo tradicional con los clásicos ingredientes que no fallan: carne jugosa, vegetales frescos y condimentos caseros. ¡Incluye papas Mc Cain en el precio!",
        price: 14500,
        image: "/lomos/1.jpg",
        ingredients: [
          "Carne de lomo",
          "Lechuga",
          "Tomate",
          "Jamón",
          "Queso",
          "Mayonesa casera",
          "Papas Mc Cain incluidas",
        ],
        calories: 780,
        prepTime: "15-18 min",
        popular: true,
        chef: false,
      },
      {
        id: 2,
        name: "Big Roky Special",
        description:
          "Carne de lomo, lechuga, tomate, jamón, queso, panceta, huevo y mayonesa casera. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "Versión especial del clásico lomo con agregado de panceta y huevo a la plancha, ideal para el gran apetito. ¡Incluye papas Mc Cain en el precio!",
        price: 16000,
        image: "/lomos/2.jpg",
        ingredients: [
          "Carne de lomo",
          "Lechuga",
          "Tomate",
          "Jamón",
          "Queso",
          "Panceta",
          "Huevo a la plancha",
          "Mayonesa casera",
          "Papas Mc Cain incluidas",
        ],
        calories: 890,
        prepTime: "16-20 min",
        popular: true,
        chef: true,
      },
    ],
  },
  {
    id: "pachata",
    name: "Pachatas",
    icon: "🥖",
    items: [
      {
        id: 1,
        name: "Rokystar",
        description:
          "Carne de lomo, lechuga, tomate, huevo a la plancha, jamón, queso y mayonesa casera. ¡Incluye papas Mc Cain en el precio!",
        fullDescription:
          "Una pachata bien completa con carne de lomo, vegetales, huevo, jamón y queso. Todo potenciado con mayonesa casera. ¡Incluye papas Mc Cain en el precio!",
        price: 17500,
        image: "/pachata/1.jpg",
        ingredients: [
          "Carne de lomo",
          "Lechuga",
          "Tomate",
          "Huevo a la plancha",
          "Jamón",
          "Queso",
          "Mayonesa casera",
          "Papas Mc Cain incluidas",
        ],
        calories: 920,
        prepTime: "16-20 min",
        popular: true,
        chef: true,
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
  const [isCartMinimized, setIsCartMinimized] = useState(false);
  const [isHeaderSmall, setIsHeaderSmall] = useState(false);

  // Estado para los selectores de tipo y cantidad
  const [selectedType, setSelectedType] = useState<{
    [id: number]: "simple" | "doble" | "triple";
  }>({});
  const [selectedQty, setSelectedQty] = useState<{ [id: number]: number }>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSmall(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`min-h-screen bg-gradient-to-br bg-gray-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header - Más elegante con sombras sutiles */}
      <header
        className={`sticky top-0 z-40 bg-gray-50 transition-all duration-75 ${
          isHeaderSmall ? "py-1 shadow-md" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo principal */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                {/* Contenedor principal del logo - tamaño dinámico */}
                <div
                  className={`flex items-center justify-center rounded-xl overflow-hidden transition-all duration-75 ${
                    isHeaderSmall
                      ? "w-20 h-20 md:w-24 md:h-24"
                      : "w-40 h-40 md:w-48 md:h-48"
                  }`}
                >
                  {/* Logo con efectos de iluminación - tamaño dinámico */}
                  <img
                    src="/logo.png"
                    alt="Logo Mr. Roky"
                    className={`object-contain transition-all duration-75 ${
                      isHeaderSmall
                        ? "w-16 h-16 md:w-20 md:h-20"
                        : "w-36 h-36 md:w-44 md:h-44"
                    } drop-shadow-[0_4px_15px_rgba(120,120,120,0.35)]`}
                  />
                </div>
              </div>

              {/* Texto con Cherry Bomb One */}
              <div className="text-center">
                <h1
                  className={`text-black tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-all duration-75 ${
                    isHeaderSmall
                      ? "text-2xl md:text-3xl"
                      : "text-4xl md:text-5xl"
                  }`}
                  style={{
                    fontFamily: '"Cherry Bomb One", cursive',
                    fontWeight: "normal",
                    fontStyle: "normal",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    fontVariant: "normal",
                    fontStretch: "normal",
                    fontFeatureSettings: "normal",
                    fontVariationSettings: "normal",
                    letterSpacing: "normal",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  MR. ROKY
                </h1>
                <div className="relative inline-block">
                  <p
                    className={`text-black tracking-[0.25em] mt-1 uppercase transition-all duration-75 ${
                      isHeaderSmall
                        ? "text-xs md:text-base"
                        : "text-base md:text-lg"
                    }`}
                    style={{
                      fontFamily: '"Cherry Bomb One", cursive',
                      fontWeight: "normal",
                      fontStyle: "normal",
                      WebkitFontSmoothing: "antialiased",
                      MozOsxFontSmoothing: "grayscale",
                      fontVariant: "normal",
                      fontStretch: "normal",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      letterSpacing: "normal",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                    }}
                  >
                    BURGER SHOP
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                </div>
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
                <h2 className="text-3xl font-black text-white  tracking-tighter transform skew-x-[12deg]">
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
                      quality={75}
                      priority={false}
                      loading="lazy"
                    />
                    {/* Precio - Posición consistente */}
                    <div className="absolute top-2 right-2 bg-white/90 px-2.5 py-1 rounded-full shadow border border-yellow-300">
                      <span className="text-red-700 font-bold text-base tracking-tight">
                        {item.price.toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Contenido - Alineación consistente */}
                  <div className="p-3 flex flex-col flex-grow">
                    {/* Título con altura fija */}
                    <h3 className="font-bold text-xl md:text-2xl text-center mb-1 font-['Bebas_Neue'] tracking-wide min-h-[48px] flex items-center justify-center text-gray-900/90 drop-shadow-sm">
                      {item.name}
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
                      ¡PEDIR!
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
        <DialogContent className="sm:max-w-xs w-[85vw] max-h-[80dvh] rounded-xl p-0 border-0">
          {selectedItem && (
            <div className="flex flex-col h-full">
              {/* Botón de cerrar */}
              <DialogClose className="absolute right-2 top-2 z-10 rounded-full p-1.5 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors">
                <X className="w-4 h-4 text-gray-600" />
              </DialogClose>

              {/* Imagen */}
              <div className="relative h-40 w-full">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.name}
                  fill
                  className="object-cover rounded-t-xl"
                  quality={90}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Precio */}
                <div className="absolute bottom-2 left-2 bg-white/95 px-3 py-1 rounded-full border border-gray-200 shadow-xs">
                  <span className="font-bold text-red-600 text-sm">
                    {selectedItem.price.toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4 flex-1 overflow-y-auto space-y-4">
                <div className="text-center">
                  <DialogTitle asChild>
                    <h2 className="text-lg font-bold text-gray-900 font-sansita">
                      {selectedItem.name}
                    </h2>
                  </DialogTitle>
                  <p className="text-gray-500 text-xs mt-1">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Ingredientes */}
                <div>
                  <h3 className="text-xs font-medium text-gray-500 mb-2 font-sansita">
                    Ingredientes
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border border-gray-200"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Selectores */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 mb-1.5 font-sansita">
                      Tipo
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() =>
                          setSelectedType({
                            ...selectedType,
                            [selectedItem.id]: "simple",
                          })
                        }
                        className={`py-1.5 text-xs rounded-md transition-colors ${
                          selectedType[selectedItem.id] === "simple"
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Simple
                      </button>
                      <button
                        onClick={() =>
                          setSelectedType({
                            ...selectedType,
                            [selectedItem.id]: "doble",
                          })
                        }
                        className={`py-1.5 text-xs rounded-md transition-colors ${
                          selectedType[selectedItem.id] === "doble"
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Doble
                      </button>
                      <button
                        onClick={() =>
                          setSelectedType({
                            ...selectedType,
                            [selectedItem.id]: "triple",
                          })
                        }
                        className={`py-1.5 text-xs rounded-md transition-colors ${
                          selectedType[selectedItem.id] === "triple"
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Triple
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium text-gray-500 mb-1.5 font-sansita">
                      Cantidad
                    </h3>
                    <div className="flex items-center justify-between bg-gray-100 rounded-md p-0.5">
                      <button
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
                        className="w-8 h-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-200 disabled:opacity-40"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-bold">
                        {selectedQty[selectedItem.id] || 1}
                      </span>
                      <button
                        onClick={() =>
                          setSelectedQty({
                            ...selectedQty,
                            [selectedItem.id]:
                              (selectedQty[selectedItem.id] || 1) + 1,
                          })
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-200"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de agregar */}
              <div className="px-3 py-2 border-t border-gray-200">
                <button
                  onClick={() => {
                    addToCart(
                      selectedItem,
                      selectedType[selectedItem.id] || "simple",
                      selectedQty[selectedItem.id] || 1
                    );
                    setShowCart(true);
                    setIsModalOpen(false);
                  }}
                  className="w-full py-1.5 px-2 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-md flex items-center justify-between"
                >
                  <div className="flex items-center gap-1.5">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span className="font-semibold font-mono">Agregar</span>
                  </div>
                  <span className="text-xs font-semibold font-mono bg-white/10 px-2 py-0.5 rounded">
                    {(
                      selectedItem.price *
                      (selectedQty[selectedItem.id] || 1) *
                      (selectedType[selectedItem.id] === "doble"
                        ? 1.2
                        : selectedType[selectedItem.id] === "triple"
                        ? 1.35
                        : 1)
                    ).toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </button>
              </div>
            </div>
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
      {showCart && cart.length > 0 && !isCartMinimized && (
        <div className="fixed bottom-20 right-4 z-50 bg-white rounded-xl shadow-xl border-2 border-red-100 w-80 overflow-hidden animate-slide-up">
          {/* Encabezado del carrito */}
          <div className="bg-red-600 p-3 flex items-center justify-between">
            <h4 className="font-bold text-lg text-white flex items-center gap-2 font-['Bebas_Neue'] tracking-wide">
              <ShoppingCart className="w-5 h-5" />
              TU PEDIDO
            </h4>
            <div className="flex items-center gap-2">
              <span className="bg-white text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                {cart.reduce((total, item) => total + item.quantity, 0)} ITEMS
              </span>
              <button
                className="ml-1 p-1 rounded-full bg-white/80 hover:bg-gray-100 transition"
                title="Minimizar carrito"
                onClick={() => setIsCartMinimized(true)}
              >
                <Minus className="w-4 h-4 text-red-600" />
              </button>
            </div>
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
              <span className="font-bold font-mono text-gray-800">TOTAL:</span>
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
              ENVIAR PEDIDO POR WHATSAPP
            </Button>
          </div>
        </div>
      )}

      {/* Botón flotante para maximizar el carrito */}
      {showCart && cart.length > 0 && isCartMinimized && (
        <button
          className="fixed bottom-20 right-4 z-50 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-full shadow-lg border-2 border-red-200 transition-all"
          onClick={() => setIsCartMinimized(false)}
          title="Mostrar carrito"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>
            {cart.reduce((total, item) => total + item.quantity, 0)} items
          </span>
          <span className="font-mono">
            $
            {cart
              .reduce((acc, i) => acc + i.price * i.quantity, 0)
              .toLocaleString("es-AR")}
          </span>
          <Plus className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
