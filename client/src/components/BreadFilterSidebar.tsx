
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RotateCcw } from 'lucide-react';

interface BreadFilterSidebarProps {
  filters: {
    category: 'all' | 'bread' | 'rolls' | 'flatbread' | 'pancakes';
    type: 'all' | 'vegetarian' | 'vegan';
    prepTime: number;
    onlyFavorites: boolean;
  };
  onFiltersChange: (filters: any) => void;
  recipeCount: number;
}

export default function BreadFilterSidebar({
  filters,
  onFiltersChange,
  recipeCount,
}: BreadFilterSidebarProps) {
  const handleCategoryChange = (category: 'all' | 'bread' | 'rolls' | 'flatbread' | 'pancakes') => {
    onFiltersChange({ ...filters, category });
  };

  const handleTypeChange = (type: 'all' | 'vegetarian' | 'vegan') => {
    onFiltersChange({ ...filters, type });
  };

  const handlePrepTimeChange = (value: number[]) => {
    onFiltersChange({ ...filters, prepTime: value[0] });
  };

  const handleFavoritesChange = (checked: boolean) => {
    onFiltersChange({ ...filters, onlyFavorites: checked });
  };

  const handleReset = () => {
    onFiltersChange({
      category: 'all',
      type: 'all',
      prepTime: 45,
      onlyFavorites: false,
    });
  };

  return (
    <aside className="w-64 hidden lg:block">
      <div className="sticky top-24 bg-card rounded-lg p-6 shadow-sm border border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Filter</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Category Filter */}
        <div className="mb-6 pb-6 border-b border-border">
          <Label className="text-sm font-semibold text-foreground mb-3 block">
            Kategorie
          </Label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cat-all"
                name="category"
                value="all"
                checked={filters.category === 'all'}
                onChange={() => handleCategoryChange('all')}
                className="w-4 h-4 cursor-pointer accent-primary"
              />
              <Label htmlFor="cat-all" className="cursor-pointer text-sm">
                Alle Rezepte
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cat-bread"
                name="category"
                value="bread"
                checked={filters.category === 'bread'}
                onChange={() => handleCategoryChange('bread')}
                className="w-4 h-4 cursor-pointer accent-primary"
              />
              <Label htmlFor="cat-bread" className="cursor-pointer text-sm">
                🍞 Brot
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cat-rolls"
                name="category"
                value="rolls"
                checked={filters.category === 'rolls'}
                onChange={() => handleCategoryChange('rolls')}
                className="w-4 h-4 cursor-pointer accent-primary"
              />
              <Label htmlFor="cat-rolls" className="cursor-pointer text-sm">
                🥐 Brötchen
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cat-flatbread"
                name="category"
                value="flatbread"
                checked={filters.category === 'flatbread'}
                onChange={() => handleCategoryChange('flatbread')}
                className="w-4 h-4 cursor-pointer accent-primary"
              />
              <Label htmlFor="cat-flatbread" className="cursor-pointer text-sm">
                🫓 Fladenbrot
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cat-pancakes"
                name="category"
                value="pancakes"
                checked={filters.category === 'pancakes'}
                onChange={() => handleCategoryChange('pancakes')}
                className="w-4 h-4 cursor-pointer accent-primary"
              />
              <Label htmlFor="cat-pancakes" className="cursor-pointer text-sm">
                🥞 Pancakes
              </Label>
            </div>
          </div>
        </div>

        {/* Type Filter */}
        <div className="mb-6 pb-6 border-b border-border">
          <Label className="text-sm font-semibold text-foreground mb-3 block">
            Ernährungstyp
          </Label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="type-all"
                name="type"
                value="all"
                checked={filters.type === 'all'}
                onChange={() => handleTypeChange('all')}
                className="w-4 h-4 cursor-pointer accent-primary"
              />
              <Label htmlFor="type-all" className="cursor-pointer text-sm">
                Alle Rezepte
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="type-vegetarian"
                name="type"
                value="vegetarian"
                checked={filters.type === 'vegetarian'}
                onChange={() => handleTypeChange('vegetarian')}
                className="w-4 h-4 cursor-pointer accent-primary"
              />
              <Label htmlFor="type-vegetarian" className="cursor-pointer text-sm">
                🥬 Vegetarisch
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="type-vegan"
                name="type"
                value="vegan"
                checked={filters.type === 'vegan'}
                onChange={() => handleTypeChange('vegan')}
                className="w-4 h-4 cursor-pointer accent-primary"
              />
              <Label htmlFor="type-vegan" className="cursor-pointer text-sm">
                🌱 Vegan
              </Label>
            </div>
          </div>
        </div>

        {/* Prep Time Filter */}
        <div className="mb-6 pb-6 border-b border-border">
          <Label className="text-sm font-semibold text-foreground mb-3 block">
            Zubereitungszeit: bis {filters.prepTime} Min
          </Label>
          <Slider
            value={[filters.prepTime]}
            onValueChange={handlePrepTimeChange}
            min={5}
            max={45}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>5 Min</span>
            <span>45 Min</span>
          </div>
        </div>

        {/* Favorites Filter */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <Checkbox
              id="favorites"
              checked={filters.onlyFavorites}
              onCheckedChange={handleFavoritesChange}
            />
            <Label htmlFor="favorites" className="cursor-pointer text-sm">
              ❤️ Nur Favoriten
            </Label>
          </div>
        </div>

        {/* Results Count */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{recipeCount}</span> Rezepte gefunden
          </p>
        </div>
      </div>
    </aside>
  );
}
