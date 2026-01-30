import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
          <h2 className="text-lg font-semibold text-foreground">{t('filter.title')}</h2>
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
            {t('filter.recipeType')}
          </Label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                checked={filters.type === 'all'}
                onChange={() => handleTypeChange('all')}
                className="w-4 h-4"
              />
              <span className="text-sm text-foreground">{t('filter.allRecipes')}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                checked={filters.type === 'sweet'}
                onChange={() => handleTypeChange('sweet')}
                className="w-4 h-4"
              />
              <span className="text-sm text-foreground">🍰 {t('breakfast.filter.sweet')}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                checked={filters.type === 'savory'}
                onChange={() => handleTypeChange('savory')}
                className="w-4 h-4"
              />
              <span className="text-sm text-foreground">🥘 {t('breakfast.filter.savory')}</span>
            </label>
          </div>
        </div>

        {/* Prep Time Filter */}
        <div className="mb-6 pb-6 border-b border-border">
          <Label className="text-sm font-semibold text-foreground mb-3 block">
            {t('filter.prepTime', { time: filters.prepTime })}
          </Label>
          <Slider
            value={[filters.prepTime]}
            onValueChange={handlePrepTimeChange}
            min={5}
            max={60}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>5 min</span>
            <span>60 min</span>
          </div>
        </div>

        {/* Favorites Filter */}
        <div className="mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={filters.onlyFavorites}
              onCheckedChange={handleFavoritesChange}
            />
            <span className="text-sm text-foreground">❤️ {t('recipe.details')}</span>
          </label>
        </div>

        {/* Results Count */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm font-semibold text-foreground">
            {recipeCount} {recipeCount === 1 ? t('recipe.found').replace('{{count}}', '') : t('recipe.found').replace('{{count}}', 's')}
          </p>
        </div>
      </div>
    </aside>
  );
}
