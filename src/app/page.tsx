"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { id: "heroImage", url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Delicious whole wheat pasta with fresh spinach, cherry tomatoes, and feta cheese in a close-up shot." },
  { id: "aboutImage", url: "https://images.pexels.com/photos/34278827/pexels-photo-34278827.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "italian pasta restaurant - Photo by Justin Agyarko" },
  { id: "contactImage", url: "https://images.pexels.com/photos/34289012/pexels-photo-34289012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A man enjoys a meal in a warmly-lit indoor restaurant setting." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pasta Delight"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Pasta Delight"
            description="Experience the best pasta dishes in town."
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url}
            buttons={[
              { text: "Discover More", href: "about" },
              { text: "Book a Table", href: "contact" }
            ]}
            className="bg-pink-100 text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our passion is pasta! Taste the tradition."
            buttons={[{ text: "Learn More", href: "menu" }]}
            className="bg-pink-100 text-gray-800"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Spaghetti Carbonara", price: "$12", imageSrc: assetMap.find(a => a.id === "heroImage")?.url },
              { id: "2", name: "Fettuccine Alfredo", price: "$14", imageSrc: assetMap.find(a => a.id === "heroImage")?.url },
              { id: "3", name: "Penne Arrabbiata", price: "$11", imageSrc: assetMap.find(a => a.id === "heroImage")?.url }
            ]}
            title="Our Menu"
            className="bg-pink-100 text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Get in Touch with Us"
            description="Reserve your table or get our latest updates."
            imageSrc={assetMap.find(a => a.id === "contactImage")?.url}
            inputPlaceholder="Your email address"
            onSubmit={(email) => console.log(email)}
            className="bg-pink-100 text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Privacy Policy", href: "policy" }] },
              { items: [{ label: "Terms & Conditions", href: "terms" }] }
            ]}
            logoText="Pasta Delight"
            className="bg-pink-100 text-gray-800"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
