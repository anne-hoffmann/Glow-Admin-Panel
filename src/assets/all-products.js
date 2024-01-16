import LipScrub from "./lip-scrub.jpg";
import FaceCream from "./face-cream.jpg";
import FaceScrub from "./face-scrub.jpg";
import FaceWash from "./face-wash.jpg";
import Combo from "./combo.jpg";
import BodyLotion from "./body-lotion.jpg"
import BodySoap from "./body-soap.jpg"
import HairShampoo from "./hair-shampoo.jpg";
import HairMask from "./hair-mask.jpg";
import HairSerum from "./hair-serum.jpg"

let all_products = [
    {
        id: 1,
        name: "Cleansing Face Wash",
        category: "Face",
        image: FaceWash,
        new_price: 69.00,
        old_price: 84.00,
        description: "Revitalize your skin with our gentle face wash. Crafted with natural extracts, it deeply cleanses without drying, leaving your skin refreshed and radiant. Perfect for all skin types, it's your daily essential for a clean, balanced glow."
    },
    {
        id: 2,
        name: "Exfoliating Face Scrub",
        category: "Face",
        image: FaceScrub,
        new_price: 34.00,
        old_price: 44.00,
        description: "Unveil smoother, brighter skin with our exfoliating face scrub. Infused with gentle exfoliants and nourishing ingredients, it buffs away dullness, revealing a fresh, radiant complexion. Enjoy a revitalizing scrub suitable for all skin types, leaving you with a renewed, glowing appearance after every use."
    },
    {
        id: 3,
        name: "Moisturising Face Cream",
        category: "Face",
        image: FaceCream,
        new_price: 29.00,
        old_price: 44.00,
        description: "Nourish and hydrate your skin with our moisturizing face cream. Enriched with potent hydrators and vitamins, it deeply replenishes, locking in moisture for a soft, supple feel. Perfect for daily use, our cream revitalizes all skin types, leaving you with a dewy, refreshed complexion you'll love."
    },
    {
        id: 4,
        name: "Lip Scrub",
        category: "Face",
        image: LipScrub,
        new_price: 24.00,
        old_price: 34.00,
        description: "Transform your lips with our indulgent lip scrub. Infused with gentle exfoliants and hydrating elements, it buffs away dryness, unveiling a softer, smoother pout. Enjoy a luxurious treatment that revitalizes and preps your lips for ultimate hydration and a perfectly smooth finish."
    },
    {
        id: 5,
        name: "Skincare Combo",
        category: "Body",
        image: Combo,
        new_price: 149.00,
        old_price: 199.00,
        description: "Revitalize your routine with our skincare package. Start with the exfoliating face scrub for radiant skin, follow with the moisturizing face cream for lasting hydration, and finish with the lip scrub for irresistibly smooth lips. Elevate your self-care with this all-in-one set for a refreshed, glowing complexion."
    },
    {
        id: 6,
        name: "Creamy Body Lotion",
        category: "Body",
        image: BodyLotion,
        new_price: 19.00,
        old_price: 34.00,
        description: "Indulge your skin with our luxurious creamy body lotion. Enriched with hydrating ingredients, it deeply nourishes, leaving your skin soft and silky smooth. Enjoy a pampering experience that locks in moisture, perfect for everyday hydration and a touch of indulgence."
    },
    {
        id: 7,
        name: "Oragnic Soap Bar",
        category: "Body",
        image: BodySoap,
        new_price: 19.00,
        old_price: 29.00,
        description: "Experience pure luxury with our organic soap bar. Crafted from natural ingredients, it gently cleanses while nourishing your skin. Revel in a refreshing and wholesome bathing experience, leaving your skin feeling clean, hydrated, and naturally radiant."
    },
    {
        id: 8,
        name: "Intensive Repair Hair Mask",
        category: "Hair",
        image: HairMask,
        new_price: 85.00,
        old_price: 99.00,
        description: "Revive your locks with our intensive hair repair mask. Infused with potent nutrients and revitalizing elements, it deeply nourishes and strengthens damaged hair. Treat yourself to a spa-like experience, restoring your hair's health, shine, and manageability for a luscious, revitalized mane."
    },
    {
        id: 9,
        name: "Silky Smooth Shampoo",
        category: "Hair",
        image: HairShampoo,
        new_price: 34.00,
        old_price: 44.00,
        description: "Transform your haircare routine with our enriching shampoo. Formulated with nourishing ingredients, it gently cleanses while restoring moisture and vitality to your locks. Enjoy a refreshing cleanse that leaves your hair feeling clean, soft, and beautifully revitalized after each wash."

    },
    {
        id: 10,
        name: "Conditioning Hair Serum",
        category: "Hair",
        image: HairSerum,
        new_price: 24.00,
        old_price: 34.00,
        description: "Elevate your haircare with our conditioning hair serum. Enriched with potent hydrators and revitalizing elements, it deeply nourishes and tames frizz for a silky, smooth finish. Experience a lightweight formula that revitalizes and protects, leaving your hair with a lustrous shine and effortless manageability."
    },
];

export default all_products;