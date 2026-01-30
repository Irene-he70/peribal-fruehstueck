
import { useState } from 'react';
import { Menu, X, Download, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import ShoppingListModal from './ShoppingListModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShoppingListOpen, setIsShoppingListOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const { t } = useTranslation();
  
  const isBreakfastPage = location === '/';
  const isBreadPage = location === '/bread';
  const isDinnerPage = location === '/dinner';



  const getSubtitle = () => {
    if (isBreakfastPage) return t('breakfast.subtitle');
    if (isBreadPage) return t('bread.subtitle');
    return t('dinner.subtitle');
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b-2 border-muted shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="PERIBAL" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Playfair Display' }}>
                PERIBAL
              </h1>
              <p className="text-xs text-muted-foreground">
                {getSubtitle()}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Recipe Type Tabs */}
            <div className="flex gap-2 border-r border-border pr-4">
              <Button
                variant={isBreakfastPage ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLocation('/')}
              >
                {t('header.breakfast')}
              </Button>
              <Button
                variant={isBreadPage ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLocation('/bread')}
              >
                {t('header.bread')}
              </Button>
              <Button
                variant={isDinnerPage ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLocation('/dinner')}
              >
                {t('header.dinner')}
              </Button>
            </div>



            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsShoppingListOpen(true)}
              className="gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              {t('header.shoppingList')}
            </Button>
            <a
              href="/peribal_suess_rezepte.pdf"
              download
              className="inline-flex items-center gap-2"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                {t('header.pdfSweet')}
              </Button>
            </a>
            <a
              href="/peribal_herzhaft_rezepte.pdf"
              download
              className="inline-flex items-center gap-2"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                {t('header.pdfSavory')}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-muted bg-background p-4 space-y-3">
            {/* Recipe Type Tabs */}
            <div className="flex gap-2 mb-3 pb-3 border-b border-muted">
              <Button
                variant={isBreakfastPage ? 'default' : 'outline'}
                size="sm"
                className="flex-1"
                onClick={() => {
                  setLocation('/');
                  setIsMenuOpen(false);
                }}
              >
                {t('header.breakfast')}
              </Button>
              <Button
                variant={isBreadPage ? 'default' : 'outline'}
                size="sm"
                className="flex-1"
                onClick={() => {
                  setLocation('/bread');
                  setIsMenuOpen(false);
                }}
              >
                {t('header.bread')}
              </Button>
              <Button
                variant={isDinnerPage ? 'default' : 'outline'}
                size="sm"
                className="flex-1"
                onClick={() => {
                  setLocation('/dinner');
                  setIsMenuOpen(false);
                }}
              >
                {t('header.dinner')}
              </Button>
            </div>



            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => {
                setIsShoppingListOpen(true);
                setIsMenuOpen(false);
              }}
            >
              <ShoppingCart className="h-4 w-4" />
              {t('header.shoppingList')}
            </Button>
            <a href="/peribal_suess_rezepte.pdf" download className="block">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="h-4 w-4" />
                {t('header.pdfSweet')}
              </Button>
            </a>
            <a href="/peribal_herzhaft_rezepte.pdf" download className="block">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="h-4 w-4" />
                {t('header.pdfSavory')}
              </Button>
            </a>
          </div>
        )}
      </header>

      {/* Shopping List Modal */}
      <ShoppingListModal
        isOpen={isShoppingListOpen}
        onClose={() => setIsShoppingListOpen(false)}
      />
    </>
  );
}
