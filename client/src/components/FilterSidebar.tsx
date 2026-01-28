
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RotateCcw } from 'lucide-react';

interface FilterSidebarProps {
  filters: {
    type: 'all' | 'sweet' | 'savory';
    prepTime: number;
    onlyFavorites: boolean;
  };
  onFiltersChange: (filters: any) => void;
  recipeCount: number;
}

export default function FilterSidebar({
  filters,
  onFiltersChange,
  recipeCount,
}: FilterSidebarProps) {
  const handleTypeChange = (type: 'all' | 'sweet' | 'savory') => {
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
      type: 'all',
      prepTime: 30,
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

        {/* Type Filter */}
        <div className="mb-6 pb-6 border-b border-border">
          <Label className="text-sm font-semibold text-foreground mb-3 block">
            Rezept-Typ
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
                id="type-sweet"
                name="type"
                value="sweet"
                checked={filters.type === 'sweet'}
                onChange={() => handleTypeChange('sweet')}
                className="w-4 h-4 cursor-pointer accent-primary"
              />
              <Label htmlFor="type-sweet" className="cursor-pointer text-sm">
                🍰 Süßlich
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="type-savory"
                name="type"
                value="savory"
                checked={filters.type === 'savory'}
                onChange={() => handleTypeChange('savory')}
                className="w-4 h-4 cursor-pointer accent-primary"
              />
              <Label htmlFor="type-savory" className="cursor-pointer text-sm">
                🥗 Herzhaft
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
            max={30}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>5 Min</span>
            <span>30 Min</span>
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
