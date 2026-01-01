import { Product } from "@/types/product";

export const products: Product[] = [
    {
        id: "p1",
        name: "Bliss Advance Face Serum",
        slug: "bliss-advance-face-serum",
        description: "A potent blend of Vitamin C and Hyaluronic Acid to brighten and hydrate dull skin. Clinically proven to reduce dark spots in 4 weeks.",
        price: 1499,
        originalPrice: 1999,
        rating: 4.9,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800", // Gold serum bottle
        category: "Serums",
        tags: ["Best Seller", "Brightening"],
        benefits: ["Brightens Skin", "Reduces Dark Spots", "Hydrates"],
        ingredients: ["Vitamin C", "Hyaluronic Acid", "Witch Hazel"]
    },
    {
        id: "p2",
        name: "Revite Face Serum",
        slug: "revite-face-serum",
        description: "An anti-aging powerhouse with Retinol and Peptides to smooth fine lines and restore elasticity.",
        price: 1599,
        originalPrice: 2199,
        rating: 4.8,
        reviews: 95,
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=800", // Dark amber bottle
        category: "Serums",
        tags: ["Anti-Aging"],
        benefits: ["Reduces Fine Lines", "Boosts Collagen", "Firms Skin"],
        ingredients: ["Retinol", "Peptides", "Ceramides"]
    },
    {
        id: "p3",
        name: "Nia Glow Serum",
        slug: "nia-glow-serum",
        description: "10% Niacinamide + Zinc to control oil, minimize pores, and calm redness. The ultimate solution for blemish-prone skin.",
        price: 1299,
        originalPrice: 1699,
        rating: 4.7,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800", // Minimal dropper
        category: "Serums",
        tags: ["Acne Control", "Pore Minimizing"],
        benefits: ["Controls Oil", "Minimizes Pores", "Calms Redness"],
        ingredients: ["Niacinamide", "Zinc PCA", "Aloe Vera"]
    },
    {
        id: "p4",
        name: "Kumkumadi Tailam",
        slug: "kumkumadi-tailam",
        description: "Ancient Ayurvedic miracle oil infused with Saffron and Sandalwood for a radiant, golden glow.",
        price: 2499,
        originalPrice: 3499,
        rating: 5.0,
        reviews: 342,
        image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=800", // Golden oil
        category: "Oils",
        tags: ["Ayurvedic", "Luxury"],
        benefits: ["Radiant Glow", "Evens Skin Tone", "Deep Nourishment"],
        ingredients: ["Saffron", "Sandalwood", "Goat Milk"]
    },
    {
        id: "p5",
        name: "Velvet Ecstasy Cream",
        slug: "velvet-ecstasy-cream",
        description: "A rich, velvety moisturizer that locks in hydration without feeling greasy. Perfect for dry to normal skin types.",
        price: 999,
        originalPrice: 1299,
        rating: 4.6,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800", // Cream jar
        category: "Creams",
        tags: ["Hydrating"],
        benefits: ["Deep Hydration", "Softens Skin", "Barrier Repair"],
        ingredients: ["Shea Butter", "Cocoa Butter", "Vitamin E"]
    },
    {
        id: "p6",
        name: "Silk Touch Body Oil",
        slug: "silk-touch-body-oil",
        description: "A lightweight, non-sticky body oil that absorbs instantly, leaving skin silky smooth and delicately scented.",
        price: 1199,
        originalPrice: 1499,
        rating: 4.8,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=800", // Body oil bottle
        category: "Oils",
        tags: ["Body Care"],
        benefits: ["Non-Greasy", "Softens Skin", "Lasting Moisture"],
        ingredients: ["Almond Oil", "Jojoba Oil", "Lavender"]
    },
    {
        id: "p7",
        name: "Forest Ivy Shower Gel",
        slug: "forest-ivy-shower-gel",
        description: "Step into the woods with this refreshing, earth-scented shower gel that cleanses without stripping natural oils.",
        price: 799,
        originalPrice: 999,
        rating: 4.5,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=800", // Green bottle
        category: "Cleansers",
        tags: ["Refreshing"],
        benefits: ["Gentle Cleansing", "Refreshing Scent", "pH Balanced"],
        ingredients: ["Aloe Vera", "Green Tea", "Cucumber"]
    },
    {
        id: "p8",
        name: "Champi Hair Oil",
        slug: "champi-hair-oil",
        description: "Revitalizing hair massage oil to strengthen roots, reduce hair fall, and promote healthy growth.",
        price: 899,
        originalPrice: 1199,
        rating: 4.9,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1620917670397-a333b79fabc1?auto=format&fit=crop&q=80&w=800", // Dark amber oil
        category: "Oils",
        tags: ["Hair Care"],
        benefits: ["Reduces Hair Fall", "Strengthens Roots", "Promotes Growth"],
        ingredients: ["Bhringraj", "Amla", "Coconut Oil"]
    }
];
