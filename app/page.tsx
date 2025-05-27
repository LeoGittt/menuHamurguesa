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
      `https://wa.me/1234567890?text=${encodeURIComponent(message)}`,
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
      <header className="sticky top-0 z-40 shadow-lg backdrop-blur-md bg-black/30">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/j.jpg"
            alt="Hamburguesas artesanales"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-red-800/60 to-orange-700/50"></div>
        </div>

        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo mejorado */}
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-white/20 backdrop-blur-sm overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Título con efecto neón mejorado */}
              <div className="text-shadow-lg">
                <h1 className="text-3xl font-extrabold text-white drop-shadow-xl">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-400">
                    Mr. Roky
                  </span>
                  <span className="text-white"> burger shop</span>
                </h1>
                <p className="text-orange-100 text-xs font-medium tracking-wider">
                  ~ SABORES QUE INSPIRAN ~
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Gradiente dinámico con efecto de profundidad */}
      {/* Hero Section Compacto */}
      <section className="relative min-h-[300px] flex items-center justify-center text-white bg-gradient-to-br from-red-800 via-red-700 to-orange-700">
        {/* Fondo visual con foto.jpg */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/foto.jpg"
            alt="Mr. Roky burger shop hero"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.7) blur(1px)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-orange-700/30"></div>
        </div>

        {/* Efectos de fondo sutiles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-amber-500/10 to-transparent rounded-full filter blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-l from-red-900/20 to-transparent rounded-full filter blur-xl"></div>
        </div>

        {/* Contenido principal compacto */}
        <div className="container mx-auto px-4 text-center relative z-10 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Logo tipo sticker destacado */}
            <img
              src="/foto.jpg"
              alt="Logo Mr. Roky burger shop"
              className="mx-auto mb-6 w-40 h-40 object-contain drop-shadow-2xl rounded-2xl bg-white/80 p-2"
              style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
            />

            {/* Título más compacto */}
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Sabores Auténticos
              </span>
            </h2>

            {/* Subtítulo compacto */}
            <p className="text-base md:text-lg text-orange-100 mb-6 max-w-md mx-auto">
              Hamburguesas gourmet hechas con ingredientes premium
            </p>

            {/* Botones compactos */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-yellow-500 text-red-900 
          font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                onClick={() =>
                  window.open(
                    "https://wa.me/1234567890?text=Hola, me gustaría hacer un pedido",
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Ordenar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections - Con mejor espaciado y jerarquía */}
      <main className="container mx-auto px-4 py-10">
        {menuCategories.map((category) => (
          <section key={category.id} id={category.id} className="mb-16">
            {/* Título de categoría con efecto de subrayado animado */}
            <div className="text-center mb-8 relative">
              <div className="inline-flex items-center space-x-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  {category.name}
                </h2>
              </div>
              <div className="relative w-24 h-1 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full mx-auto animate-pulse opacity-70"></div>
              </div>
            </div>

            {/* Grid de productos con hover effects mejorados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <Card
                  key={item.id + "-" + category.id}
                  className="group flex flex-col h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm cursor-pointer rounded-xl shadow-md hover:ring-2 hover:ring-orange-200/50"
                  onClick={() => openItemDetail(item)}
                >
                  <div className="relative overflow-hidden rounded-xl group border border-orange-100 bg-white/90 shadow-md hover:shadow-xl transition-all duration-300 hover:ring-2 hover:ring-orange-200/50">
                    <div className="relative w-full h-48">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                        priority={category.items[0].id === item.id}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-3 right-3">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg border-2 border-white/30">
                          {item.price.toLocaleString("es-AR", {
                            style: "currency",
                            currency: "ARS",
                            maximumFractionDigits: 0,
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-4 gap-2">
                      <CardHeader className="p-0 pb-2 flex-1">
                        <CardTitle className="text-lg font-bold text-gray-800 leading-tight mb-1 truncate group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </CardTitle>
                        <CardDescription className="text-xs text-gray-600 leading-tight mt-1 truncate">
                          {item.ingredients.join(", ")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 mt-auto">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-sm py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 scale-100 hover:scale-105"
                          onClick={(e) => {
                            e.stopPropagation();
                            openItemDetail(item);
                          }}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Ver Detalle
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                  {/* Selector de cantidad y tipo eliminado del Card */}
                </Card>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Modal de Detalle del Producto - Más elegante */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto rounded-xl border-0 p-0">
          {selectedItem && (
            <>
              <div className="relative">
                <img
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.name}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg border-2 border-white/30">
                    {selectedItem.price.toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      maximumFractionDigits: 0,
                    })}
                  </div>
                </div>
                {selectedItem.spicy && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold shadow-lg">
                      <Flame className="w-4 h-4 mr-1" />
                      Picante
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-5">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-800 pr-8">
                    {selectedItem.name}
                  </DialogTitle>
                </DialogHeader>

                {/* Descripción completa */}
                <div className="bg-orange-50/50 p-4 rounded-lg border border-orange-100">
                  <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                    <ChefHat className="w-5 h-5 mr-2 text-orange-500" />
                    Descripción
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedItem.fullDescription}
                  </p>
                </div>

                {/* Ingredientes */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="bg-orange-500 text-white p-1 rounded-full mr-2">
                      <Plus className="w-4 h-4" />
                    </span>
                    Ingredientes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-br from-orange-100 to-amber-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium border border-orange-200"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Selector de tipo y cantidad SOLO en el modal */}
                <div className="flex items-center gap-2 mt-2 px-2 pb-2 bg-orange-50/60 rounded-lg shadow-inner border border-orange-100">
                  <Label
                    htmlFor={`modal-type-${selectedItem.id}`}
                    className="text-xs text-gray-600 font-semibold mr-1"
                  >
                    Tipo:
                  </Label>
                  <Select
                    value={selectedType[selectedItem.id] || "simple"}
                    onValueChange={(value) =>
                      setSelectedType({
                        ...selectedType,
                        [selectedItem.id]: value as "simple" | "doble" | "triple",
                      })
                    }
                  >
                    <SelectTrigger
                      id={`modal-type-${selectedItem.id}`}
                      className="w-24 h-8 text-sm font-semibold bg-white border-orange-200 focus:ring-orange-400 focus:border-orange-400"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="simple">Simple</SelectItem>
                      <SelectItem value="doble">Doble</SelectItem>
                      <SelectItem value="triple">Triple</SelectItem>
                    </SelectContent>
                  </Select>
                  <Label className="text-xs text-gray-600 font-semibold ml-2">
                    Cantidad:
                  </Label>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 rounded-full border-orange-200 text-orange-700 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed bg-white hover:bg-orange-100"
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
                    tabIndex={-1}
                    type="button"
                    aria-label="Restar cantidad"
                  >
                    –
                  </Button>
                  <span className="w-6 text-center font-bold text-orange-700 select-none">
                    {selectedQty[selectedItem.id] || 1}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 rounded-full border-orange-200 text-orange-700 font-bold text-lg bg-white hover:bg-orange-100"
                    onClick={() =>
                      setSelectedQty({
                        ...selectedQty,
                        [selectedItem.id]: (selectedQty[selectedItem.id] || 1) + 1,
                      })
                    }
                    tabIndex={-1}
                    type="button"
                    aria-label="Sumar cantidad"
                  >
                    +
                  </Button>
                </div>

                {/* Botón de pedido y agregar al carrito */}
                <div className="pt-4 flex flex-col gap-2">
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg text-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                    onClick={() => orderViaWhatsApp(selectedItem)}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {`Pedir por WhatsApp - ${selectedItem.price.toLocaleString(
                      "es-AR",
                      {
                        style: "currency",
                        currency: "ARS",
                        maximumFractionDigits: 0,
                      }
                    )}`}
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-200 scale-100 hover:scale-105 flex items-center gap-2 text-base"
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
                    <Plus className="w-4 h-4" /> Agregar al carrito
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Location Section - Con efecto de mapa más atractivo */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/map-pattern.svg')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Visítanos</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-orange-400/30 transition-all">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">
                    Dirección
                  </h3>
                  <p className="text-gray-300">Av. Principal 123, Centro</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-orange-400/30 transition-all">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">
                    Horarios
                  </h3>
                  <p className="text-gray-300">Lun-Dom: 11:00-23:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-orange-400/30 transition-all">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">
                    Contáctanos
                  </h3>
                  <p className="text-gray-300">+1 234 567 8900</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10">
              <h3 className="font-bold text-lg text-center text-white mb-4">
                Encuéntranos Fácilmente
              </h3>
              <p className="text-gray-300 mb-4">
                Estamos en el corazón de la ciudad
              </p>
              <Button
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
                onClick={() => window.open("https://maps.google.com", "_blank")}
              >
                Ver en Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Más minimalista y elegante */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-red-600 font-bold text-xl">🍔</span>
                </div>
                <span className="text-xl font-bold">Mr. Roky burger shop</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Las mejores hamburguesas artesanales con ingredientes frescos y
                mucho amor. Desde 2010 sirviendo sabores que enamoran.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-orange-400">
                Contacto
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Av. Principal 123, Centro</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>+1 234 567 8900</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>Lun-Dom: 11:00-23:00</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-orange-400">
                Síguenos
              </h3>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 text-white hover:text-orange-400 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
                  onClick={() =>
                    window.open("https://instagram.com/burgerhouse", "_blank")
                  }
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 text-white hover:text-orange-400 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
                  onClick={() =>
                    window.open("https://facebook.com/burgerhouse", "_blank")
                  }
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 text-white hover:text-orange-400 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
                  onClick={() =>
                    window.open("https://twitter.com/burgerhouse", "_blank")
                  }
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Burger House. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button - Con animación */}
      <Button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none"
        onClick={() =>
          window.open(
            "https://wa.me/1234567890?text=Hola, me gustaría hacer una consulta sobre el menú",
            "_blank"
          )
        }
      >
        <MessageCircle className="w-7 h-7" />
      </Button>

      {/* Mini carrito flotante mejorado con shadcn/ui */}
      {showCart && cart.length > 0 && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-xl shadow-2xl p-4 w-80 border border-orange-200 animate-fade-in">
          <h4 className="font-bold text-lg mb-2 text-orange-600 flex items-center gap-2">
            <span>🛒</span> Tu pedido
          </h4>
          <ul className="mb-2 max-h-40 overflow-y-auto divide-y divide-orange-100">
            {cart.map((item, idx) => (
              <li
                key={item.id + "-" + item.type}
                className="flex justify-between items-center py-1 text-sm"
              >
                <span className="flex-1">
                  {item.name}{" "}
                  <span className="text-xs text-gray-400">({item.type})</span> x
                  {item.quantity}
                </span>
                <span className="font-bold text-orange-600">
                  ${(item.price * item.quantity).toLocaleString("es-AR")}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 text-red-500 hover:text-red-700 rounded-full p-1 transition"
                  title="Quitar"
                  onClick={() => removeFromCart(item.id, item.type)}
                  type="button"
                >
                  <span className="text-lg">×</span>
                </Button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center font-bold mb-2 text-base">
            <span>Total:</span>
            <span className="text-green-600">
              $
              {cart
                .reduce((acc, i) => acc + i.price * i.quantity, 0)
                .toLocaleString("es-AR")}
            </span>
          </div>
          <Button
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-200 scale-100 hover:scale-105 flex items-center gap-2 text-base"
            onClick={sendCartToWhatsApp}
          >
            <MessageCircle className="w-5 h-5" /> Enviar pedido por WhatsApp
          </Button>
        </div>
      )}
    </div>
  );
}
