
export interface Recipe {
  id: string;
  name: string;
  type: 'sweet' | 'savory';
  prepTime: number; // in minutes
  image: string;
  ingredients: { name: string; amount: string }[];
  instructions: string[];
  nutrition: {
    carbs: number; // grams
    protein: number; // grams
    fat: number; // grams
    calories: number;
    fiber: number; // grams
    specialNutrients: string[];
  };
  description: string;
}

export const recipes: Recipe[] = [
  // SWEET RECIPES
  {
    id: 'sweet_01',
    name: 'Vanille-Quark mit Beeren',
    type: 'sweet',
    prepTime: 5,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/IDsYpLciQaOAGkFZ.png',
    ingredients: [
      { name: 'Quark (20% Fett)', amount: '200g' },
      { name: 'Vanilleextrakt', amount: '1 TL' },
      { name: 'Blaubeeren', amount: '100g' },
      { name: 'Himbeeren', amount: '80g' },
      { name: 'Mandeln (gehackt)', amount: '30g' },
      { name: 'Honig', amount: '1 TL' }
    ],
    instructions: [
      'Quark in eine Schüssel geben',
      'Vanilleextrakt einrühren',
      'Beeren vorsichtig unterheben',
      'Mit gehackten Mandeln und Honig toppen',
      'Sofort servieren'
    ],
    nutrition: {
      carbs: 18,
      protein: 32,
      fat: 12,
      calories: 310,
      fiber: 4,
      specialNutrients: ['Vitamin C', 'Kalzium', 'Probiotika']
    },
    description: 'Ein cremiger, fruchtiger Frühstück mit hohem Proteingehalt'
  },
  {
    id: 'sweet_02',
    name: 'Schoko-Bananen-Shake',
    type: 'sweet',
    prepTime: 5,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/mQjEZRIMKHvddqfr.png',
    ingredients: [
      { name: 'Griechischer Joghurt', amount: '150g' },
      { name: 'Banane', amount: '1 kleine' },
      { name: 'Kakaopulver (ungesüßt)', amount: '2 EL' },
      { name: 'Mandelmilch', amount: '200ml' },
      { name: 'Proteinpulver (Vanilla)', amount: '1 Scoop' },
      { name: 'Eiswürfel', amount: 'eine Handvoll' }
    ],
    instructions: [
      'Alle Zutaten in einen Mixer geben',
      '30 Sekunden mixen bis cremig',
      'In ein Glas gießen',
      'Mit einer Bananenscheibe garnieren',
      'Sofort trinken'
    ],
    nutrition: {
      carbs: 22,
      protein: 35,
      fat: 8,
      calories: 320,
      fiber: 3,
      specialNutrients: ['Magnesium', 'Vitamin B12', 'Antioxidantien']
    },
    description: 'Ein cremiger Protein-Shake mit Schokolade und Banane'
  },
  {
    id: 'sweet_03',
    name: 'Joghurt mit Walnüssen und Zimt',
    type: 'sweet',
    prepTime: 5,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/pJAHAfBBfVWzTQQU.png',
    ingredients: [
      { name: 'Griechischer Joghurt (0% Fett)', amount: '200g' },
      { name: 'Walnüsse (gehackt)', amount: '40g' },
      { name: 'Zimt', amount: '1/2 TL' },
      { name: 'Apfel (gerieben)', amount: '1 kleine' },
      { name: 'Honig', amount: '1 TL' }
    ],
    instructions: [
      'Joghurt in eine Schüssel geben',
      'Geriebenen Apfel einrühren',
      'Walnüsse darüber streuen',
      'Mit Zimt bestreuen',
      'Mit Honig drizzeln'
    ],
    nutrition: {
      carbs: 16,
      protein: 30,
      fat: 14,
      calories: 310,
      fiber: 3,
      specialNutrients: ['Omega-3-Fettsäuren', 'Kalzium', 'Antioxidantien']
    },
    description: 'Ein klassisches, einfaches Frühstück mit Nüssen'
  },
  {
    id: 'sweet_04',
    name: 'Chia-Pudding mit Himbeeren',
    type: 'sweet',
    prepTime: 10,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/rFVImoBBGcINexOu.png',
    ingredients: [
      { name: 'Kokosmilch (vollfett)', amount: '150ml' },
      { name: 'Mandelmilch', amount: '100ml' },
      { name: 'Chia-Samen', amount: '3 EL' },
      { name: 'Himbeeren (frisch)', amount: '100g' },
      { name: 'Vanilleextrakt', amount: '1/2 TL' }
    ],
    instructions: [
      'Kokosmilch und Mandelmilch mischen',
      'Chia-Samen hinzufügen',
      'Vanilleextrakt einrühren',
      'Über Nacht im Kühlschrank stehen lassen',
      'Mit Himbeeren toppen und servieren'
    ],
    nutrition: {
      carbs: 20,
      protein: 28,
      fat: 16,
      calories: 340,
      fiber: 8,
      specialNutrients: ['Omega-3-Fettsäuren', 'Ballaststoffe', 'Kalzium']
    },
    description: 'Ein Over-Night-Pudding, perfekt für die Vorbereitung'
  },
  {
    id: 'sweet_05',
    name: 'Hüttenkäse mit Apfel und Zimt',
    type: 'sweet',
    prepTime: 5,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/CJLZXrdRmAtAbdcY.png',
    ingredients: [
      { name: 'Hüttenkäse (2% Fett)', amount: '200g' },
      { name: 'Apfel (gewürfelt)', amount: '1 mittel' },
      { name: 'Zimt', amount: '1/2 TL' },
      { name: 'Walnüsse (gehackt)', amount: '25g' },
      { name: 'Honig', amount: '1 TL' }
    ],
    instructions: [
      'Hüttenkäse in eine Schüssel geben',
      'Apfelwürfel hinzufügen',
      'Mit Zimt bestreuen',
      'Walnüsse darüber streuen',
      'Mit Honig drizzeln'
    ],
    nutrition: {
      carbs: 17,
      protein: 32,
      fat: 10,
      calories: 300,
      fiber: 2,
      specialNutrients: ['Kalzium', 'Selen', 'Vitamin B12']
    },
    description: 'Ein cremiges, fruchtiges Frühstück mit viel Protein'
  },
  {
    id: 'sweet_06',
    name: 'Beeren-Crumble',
    type: 'sweet',
    prepTime: 20,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/MqTnxATfLfJmahiC.png',
    ingredients: [
      { name: 'Blaubeeren', amount: '100g' },
      { name: 'Himbeeren', amount: '80g' },
      { name: 'Haferflocken', amount: '50g' },
      { name: 'Mandeln (gehackt)', amount: '30g' },
      { name: 'Butter', amount: '2 EL' },
      { name: 'Honig', amount: '1 TL' }
    ],
    instructions: [
      'Beeren in eine Auflaufform geben',
      'Haferflocken, Mandeln, Butter und Honig mischen',
      'Mischung über den Beeren verteilen',
      '15 Minuten bei 180°C backen',
      'Mit Joghurt servieren'
    ],
    nutrition: {
      carbs: 28,
      protein: 30,
      fat: 12,
      calories: 360,
      fiber: 5,
      specialNutrients: ['Antioxidantien', 'Ballaststoffe', 'Vitamin C']
    },
    description: 'Ein warmes, knuspriges Frühstück mit Beeren'
  },
  {
    id: 'sweet_07',
    name: 'Espresso-Frappe',
    type: 'sweet',
    prepTime: 5,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/baTuNqxmNTQbmZYn.png',
    ingredients: [
      { name: 'Espresso (stark)', amount: '60ml' },
      { name: 'Griechischer Joghurt', amount: '150g' },
      { name: 'Mandelmilch', amount: '100ml' },
      { name: 'Proteinpulver (Vanilla)', amount: '1 Scoop' },
      { name: 'Eiswürfel', amount: 'eine Handvoll' },
      { name: 'Kakao (zum Toppen)', amount: '1 Prise' }
    ],
    instructions: [
      'Espresso zubereiten und abkühlen lassen',
      'Joghurt, Mandelmilch, Proteinpulver und Eiswürfel mischen',
      'Espresso hinzufügen',
      'Alles mixen bis cremig',
      'Mit Kakao toppen'
    ],
    nutrition: {
      carbs: 16,
      protein: 32,
      fat: 6,
      calories: 280,
      fiber: 1,
      specialNutrients: ['Koffein', 'Antioxidantien', 'Vitamin B12']
    },
    description: 'Ein belebender Kaffee-Protein-Shake'
  },
  {
    id: 'sweet_08',
    name: 'Kokosjogurt mit Mango',
    type: 'sweet',
    prepTime: 5,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/RKXNDVytfKxwoQvV.png',
    ingredients: [
      { name: 'Kokosjogurt', amount: '200g' },
      { name: 'Mango (gewürfelt)', amount: '150g' },
      { name: 'Hanfsamen', amount: '2 EL' },
      { name: 'Kokosflocken (ungesüßt)', amount: '2 EL' },
      { name: 'Honig', amount: '1 TL' }
    ],
    instructions: [
      'Kokosjogurt in eine Schüssel geben',
      'Mangowürfel hinzufügen',
      'Hanfsamen darüber streuen',
      'Mit Kokosflocken toppen',
      'Mit Honig drizzeln'
    ],
    nutrition: {
      carbs: 24,
      protein: 30,
      fat: 14,
      calories: 360,
      fiber: 3,
      specialNutrients: ['Vitamin C', 'Magnesium', 'Omega-3-Fettsäuren']
    },
    description: 'Ein tropisches Frühstück mit Kokosnote'
  },
  {
    id: 'sweet_09',
    name: 'Protein-Brötchen',
    type: 'sweet',
    prepTime: 25,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/PRorfTkBGdxVEOJE.png',
    ingredients: [
      { name: 'Quark (20% Fett)', amount: '250g' },
      { name: 'Eier', amount: '3' },
      { name: 'Proteinpulver (Vanilla)', amount: '2 Scoops' },
      { name: 'Backpulver', amount: '1 TL' },
      { name: 'Vanilleextrakt', amount: '1 TL' },
    ],
    instructions: [
      'Quark, Eier, Proteinpulver, Backpulver und Vanilleextrakt mischen',
      'Teig in Muffinformen geben',
      '20 Minuten bei 180°C backen',
      'Abkühlen lassen',
      'Mit Frischkäse oder Marmelade servieren'
    ],
    nutrition: {
      carbs: 12,
      protein: 36,
      fat: 10,
      calories: 310,
      fiber: 0,
      specialNutrients: ['Kalzium', 'Vitamin B12', 'Selen']
    },
    description: 'Fluffige Protein-Brötchen, perfekt zum Mitnehmen'
  },
  {
    id: 'sweet_10',
    name: 'Ricotta mit Pfirsich',
    type: 'sweet',
    prepTime: 10,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/YPBxKywUqWJTNoKV.png',
    ingredients: [
      { name: 'Ricotta', amount: '200g' },
      { name: 'Pfirsich (gegrillt)', amount: '2 Hälften' },
      { name: 'Pistazien (gehackt)', amount: '30g' },
      { name: 'Honig', amount: '1 TL' },
      { name: 'Minze (frisch)', amount: 'einige Blätter' }
    ],
    instructions: [
      'Pfirsiche halbieren und entkernen',
      'Pfirsiche 3 Minuten pro Seite grillen',
      'Ricotta auf einen Teller geben',
      'Gegrillte Pfirsiche darauf anrichten',
      'Mit Pistazien toppen und mit Honig drizzeln'
    ],
    nutrition: {
      carbs: 20,
      protein: 32,
      fat: 12,
      calories: 340,
      fiber: 2,
      specialNutrients: ['Vitamin A', 'Kalzium', 'Vitamin C']
    },
    description: 'Ein elegantes, sommerliches Frühstück'
  },
  {
    id: 'sweet_11',
    name: 'Protein-Waffeln mit Kirschen',
    type: 'sweet',
    prepTime: 20,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/NCnEhYfCWrIjLfet.png',
    ingredients: [
      { name: 'Eier', amount: '3' },
      { name: 'Griechischer Joghurt', amount: '150g' },
      { name: 'Proteinpulver (Vanilla)', amount: '1 Scoop' },
      { name: 'Backpulver', amount: '1/2 TL' },
      { name: 'Kirschen (frisch)', amount: '100g' },
      { name: 'Honig', amount: '1 TL' }
    ],
    instructions: [
      'Eier, Joghurt, Proteinpulver und Backpulver mischen',
      'Teig in das Waffeleisen geben',
      'Waffeln goldbraun backen',
      'Mit Kirschen toppen',
      'Mit Honig drizzeln'
    ],
    nutrition: {
      carbs: 18,
      protein: 34,
      fat: 10,
      calories: 320,
      fiber: 2,
      specialNutrients: ['Antioxidantien', 'Kalzium', 'Vitamin B12']
    },
    description: 'Fluffige Protein-Waffeln mit frischen Kirschen'
  },
  {
    id: 'sweet_12',
    name: 'Baked Oats mit Apfel',
    type: 'sweet',
    prepTime: 30,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/YmrdMPdIrIDiJkRU.png',
    ingredients: [
      { name: 'Haferflocken (Großblatt)', amount: '80g' },
      { name: 'Eier', amount: '2' },
      { name: 'Griechischer Joghurt', amount: '100g' },
      { name: 'Apfel (gewürfelt)', amount: '1 mittel' },
      { name: 'Pekannüsse (gehackt)', amount: '30g' },
      { name: 'Zimt', amount: '1/2 TL' }
    ],
    instructions: [
      'Haferflocken, Eier, Joghurt und Zimt mischen',
      'Apfelwürfel einrühren',
      'In eine Auflaufform geben',
      '25 Minuten bei 180°C backen',
      'Mit Pekannüssen toppen'
    ],
    nutrition: {
      carbs: 32,
      protein: 30,
      fat: 12,
      calories: 380,
      fiber: 5,
      specialNutrients: ['Ballaststoffe', 'Magnesium', 'Vitamin B']
    },
    description: 'Ein warmes, sättigendes Frühstück'
  },
  {
    id: 'sweet_13',
    name: 'Milchreis mit Vanille',
    type: 'sweet',
    prepTime: 20,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/wehnvXJdnzwVQtuU.png',
    ingredients: [
      { name: 'Vollkornreis', amount: '60g' },
      { name: 'Milch (2% Fett)', amount: '300ml' },
      { name: 'Proteinpulver (Vanilla)', amount: '1 Scoop' },
      { name: 'Vanilleextrakt', amount: '1 TL' },
      { name: 'Zimt', amount: '1/4 TL' },
      { name: 'Honig', amount: '1 TL' }
    ],
    instructions: [
      'Reis in Milch kochen bis weich (ca. 15 Min)',
      'Proteinpulver und Vanilleextrakt einrühren',
      'Mit Zimt bestreuen',
      'Mit Honig drizzeln',
      'Warm servieren'
    ],
    nutrition: {
      carbs: 38,
      protein: 30,
      fat: 6,
      calories: 340,
      fiber: 2,
      specialNutrients: ['Kalzium', 'Vitamin B', 'Magnesium']
    },
    description: 'Ein klassisches, beruhigendes Frühstück'
  },
  {
    id: 'sweet_14',
    name: 'Frühstückspizza mit Früchten',
    type: 'sweet',
    prepTime: 25,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/jMnzTryDBEkSMosD.png',
    ingredients: [
      { name: 'Fladen/Pita-Brot', amount: '1' },
      { name: 'Quark (20% Fett)', amount: '150g' },
      { name: 'Erdbeeren (geschnitten)', amount: '100g' },
      { name: 'Blaubeeren', amount: '50g' },
      { name: 'Kiwi (geschnitten)', amount: '1' },
      { name: 'Honig', amount: '1 TL' }
    ],
    instructions: [
      'Fladen im Ofen kurz aufwärmen',
      'Quark als Basis verteilen',
      'Früchte dekorativ anordnen',
      'Mit Honig drizzeln',
      'Servieren'
    ],
    nutrition: {
      carbs: 28,
      protein: 28,
      fat: 8,
      calories: 320,
      fiber: 3,
      specialNutrients: ['Vitamin C', 'Kalzium', 'Antioxidantien']
    },
    description: 'Eine kreative, bunte Frühstücksvariante'
  },

  // SAVORY RECIPES
  {
    id: 'savory_01',
    name: 'Rührei mit Spinat und Feta',
    type: 'savory',
    prepTime: 10,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/frcKAneYwrpgGqEg.png',
    ingredients: [
      { name: 'Eier', amount: '3' },
      { name: 'Spinat (frisch)', amount: '150g' },
      { name: 'Feta-Käse (gewürfelt)', amount: '50g' },
      { name: 'Olivenöl', amount: '1 EL' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' },
      { name: 'Schnittlauch', amount: '1 EL' }
    ],
    instructions: [
      'Olivenöl in einer Pfanne erhitzen',
      'Spinat kurz anbraten',
      'Eier verquirlen und in die Pfanne geben',
      'Rühren bis die Eier gar sind',
      'Feta und Schnittlauch hinzufügen',
      'Mit Salz und Pfeffer würzen'
    ],
    nutrition: {
      carbs: 8,
      protein: 32,
      fat: 18,
      calories: 340,
      fiber: 2,
      specialNutrients: ['Eisen', 'Kalzium', 'Vitamin K']
    },
    description: 'Ein klassisches, schnelles Frühstück mit viel Protein'
  },
  {
    id: 'savory_02',
    name: 'Hüttenkäse mit Tomate und Kräutern',
    type: 'savory',
    prepTime: 5,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/wHLJyTPGZEsTFWHO.png',
    ingredients: [
      { name: 'Hüttenkäse (2% Fett)', amount: '200g' },
      { name: 'Kirschtomaten (halbiert)', amount: '150g' },
      { name: 'Schnittlauch (gehackt)', amount: '2 EL' },
      { name: 'Petersilie (gehackt)', amount: '1 EL' },
      { name: 'Olivenöl', amount: '1 TL' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
    ],
    instructions: [
      'Hüttenkäse in eine Schüssel geben',
      'Kirschtomaten hinzufügen',
      'Schnittlauch und Petersilie einrühren',
      'Mit Olivenöl drizzeln',
      'Mit Salz und Pfeffer würzen'
    ],
    nutrition: {
      carbs: 10,
      protein: 32,
      fat: 8,
      calories: 280,
      fiber: 2,
      specialNutrients: ['Lycopin', 'Kalzium', 'Vitamin C']
    },
    description: 'Ein frisches, leichtes Frühstück'
  },
  {
    id: 'savory_03',
    name: 'Tofu-Rührei Asia-Style',
    type: 'savory',
    prepTime: 10,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/pyKigyVxaufhsbTk.png',
    ingredients: [
      { name: 'Tofu (fest)', amount: '250g' },
      { name: 'Kurkuma', amount: '1/2 TL' },
      { name: 'Sojasauce', amount: '1 TL' },
      { name: 'Ingwer (gerieben)', amount: '1/2 TL' },
      { name: 'Sesamöl', amount: '1 TL' },
      { name: 'Frühlingszwiebeln', amount: '2' }
    ],
    instructions: [
      'Tofu mit den Händen in Stücke zerkrümeln',
      'Sesamöl in einer Pfanne erhitzen',
      'Tofu anbraten',
      'Kurkuma, Sojasauce und Ingwer hinzufügen',
      'Frühlingszwiebeln darüber streuen',
      'Servieren'
    ],
    nutrition: {
      carbs: 6,
      protein: 32,
      fat: 14,
      calories: 310,
      fiber: 2,
      specialNutrients: ['Eisen', 'Kalzium', 'Antioxidantien']
    },
    description: 'Ein würziges, veganes Frühstück'
  },
  {
    id: 'savory_04',
    name: 'Ei-Muffins mit Gemüse',
    type: 'savory',
    prepTime: 25,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/ScBjXEiiAQbIDcrU.png',
    ingredients: [
      { name: 'Eier', amount: '6' },
      { name: 'Paprika (rot, gewürfelt)', amount: '1' },
      { name: 'Zucchini (gewürfelt)', amount: '100g' },
      { name: 'Käse (gerieben)', amount: '50g' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' },
      { name: 'Kräuter (Thymian)', amount: '1 TL' }
    ],
    instructions: [
      'Eier verquirlen',
      'Gemüse und Käse hinzufügen',
      'Mit Salz, Pfeffer und Thymian würzen',
      'In Muffinformen gießen',
      '20 Minuten bei 180°C backen',
      'Abkühlen lassen und servieren'
    ],
    nutrition: {
      carbs: 6,
      protein: 30,
      fat: 16,
      calories: 320,
      fiber: 1,
      specialNutrients: ['Cholin', 'Selen', 'Vitamin B12']
    },
    description: 'Praktische Ei-Muffins zum Mitnehmen'
  },
  {
    id: 'savory_05',
    name: 'Avocado-Toast mit Ei',
    type: 'savory',
    prepTime: 10,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/FoDmmNJESjBVACCF.png',
    ingredients: [
      { name: 'Vollkornbrot', amount: '1 Scheibe' },
      { name: 'Avocado', amount: '1/2' },
      { name: 'Eier', amount: '2' },
      { name: 'Chili-Flocken', amount: '1 Prise' },
      { name: 'Zitronensaft', amount: '1 TL' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
    ],
    instructions: [
      'Brot toasten',
      'Avocado zerdrücken und auf Toast verteilen',
      'Mit Zitronensaft beträufeln',
      'Eier braten (Spiegelei)',
      'Eier auf Toast legen',
      'Mit Chili-Flocken würzen'
    ],
    nutrition: {
      carbs: 24,
      protein: 30,
      fat: 18,
      calories: 400,
      fiber: 5,
      specialNutrients: ['Kalium', 'Vitamin E', 'Folsäure']
    },
    description: 'Ein klassisches, nahrhaftes Frühstück'
  },
  {
    id: 'savory_06',
    name: 'Joghurt-Gurken-Dip',
    type: 'savory',
    prepTime: 10,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/XxknVBwBmJcwCKXv.png',
    ingredients: [
      { name: 'Griechischer Joghurt', amount: '200g' },
      { name: 'Gurke (gerieben)', amount: '150g' },
      { name: 'Dill (frisch)', amount: '2 EL' },
      { name: 'Knoblauch (gehackt)', amount: '1 Zehe' },
      { name: 'Zitronensaft', amount: '1 TL' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
    ],
    instructions: [
      'Joghurt in eine Schüssel geben',
      'Geriebene Gurke hinzufügen',
      'Dill und Knoblauch einrühren',
      'Mit Zitronensaft beträufeln',
      'Mit Salz und Pfeffer würzen',
      'Mit Gemüsesticks servieren'
    ],
    nutrition: {
      carbs: 8,
      protein: 30,
      fat: 6,
      calories: 240,
      fiber: 1,
      specialNutrients: ['Probiotika', 'Kalzium', 'Vitamin K']
    },
    description: 'Ein erfrischender, leichter Dip'
  },
  {
    id: 'savory_07',
    name: 'Geräucherter Tofu mit Senf',
    type: 'savory',
    prepTime: 10,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/LGPdhyYWFmcCoPCV.png',
    ingredients: [
      { name: 'Geräucherter Tofu', amount: '200g' },
      { name: 'Vollkornbrot', amount: '2 Scheiben' },
      { name: 'Senf (Dijon)', amount: '1 EL' },
      { name: 'Salatgurke (geschnitten)', amount: '1/4' },
      { name: 'Tomaten (geschnitten)', amount: '1' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
    ],
    instructions: [
      'Brot toasten',
      'Senf auf das Brot streichen',
      'Tofu in Scheiben schneiden',
      'Tofu auf das Brot legen',
      'Mit Gurke und Tomate belegen',
      'Mit Salz und Pfeffer würzen'
    ],
    nutrition: {
      carbs: 28,
      protein: 32,
      fat: 10,
      calories: 360,
      fiber: 4,
      specialNutrients: ['Eisen', 'Kalzium', 'Vitamin B']
    },
    description: 'Ein einfaches, schnelles Frühstück'
  },
  {
    id: 'savory_08',
    name: 'Kichererbsen-Salat',
    type: 'savory',
    prepTime: 10,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/JmXiGqDFwCPgDadJ.png',
    ingredients: [
      { name: 'Kichererbsen (gekocht)', amount: '150g' },
      { name: 'Sellerie (gehackt)', amount: '100g' },
      { name: 'Rote Zwiebel (gehackt)', amount: '1/4' },
      { name: 'Mayonnaise (light)', amount: '2 EL' },
      { name: 'Dill (frisch)', amount: '1 EL' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
    ],
    instructions: [
      'Kichererbsen in eine Schüssel geben',
      'Sellerie und Zwiebel hinzufügen',
      'Mayonnaise einrühren',
      'Dill hinzufügen',
      'Mit Salz und Pfeffer würzen',
      'Mit Vollkornbrot servieren'
    ],
    nutrition: {
      carbs: 24,
      protein: 30,
      fat: 10,
      calories: 320,
      fiber: 6,
      specialNutrients: ['Folsäure', 'Ballaststoffe', 'Eisen']
    },
    description: 'Ein proteinreicher Salat'
  },
  {
    id: 'savory_09',
    name: 'Caprese-Salat',
    type: 'savory',
    prepTime: 10,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/yFWZjNfiFWQMZoAe.png',
    ingredients: [
      { name: 'Mozzarella (frisch)', amount: '150g' },
      { name: 'Tomaten (geschnitten)', amount: '2 mittel' },
      { name: 'Basilikum (frisch)', amount: '10 Blätter' },
      { name: 'Pesto', amount: '2 EL' },
      { name: 'Olivenöl', amount: '1 EL' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
    ],
    instructions: [
      'Mozzarella und Tomaten in Scheiben schneiden',
      'Alternierend auf einem Teller anrichten',
      'Basilikum-Blätter darüber legen',
      'Mit Pesto drizzeln',
      'Mit Olivenöl beträufeln',
      'Mit Salz und Pfeffer würzen'
    ],
    nutrition: {
      carbs: 8,
      protein: 30,
      fat: 20,
      calories: 360,
      fiber: 2,
      specialNutrients: ['Kalzium', 'Lycopin', 'Vitamin K']
    },
    description: 'Ein klassischer, italienischer Salat'
  },
  {
    id: 'savory_10',
    name: 'Linsen-Dip mit Gemüse',
    type: 'savory',
    prepTime: 15,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/ImujmdVFWdsHvKBD.png',
    ingredients: [
      { name: 'Rote Linsen (gekocht)', amount: '150g' },
      { name: 'Tahini', amount: '2 EL' },
      { name: 'Zitronensaft', amount: '2 TL' },
      { name: 'Knoblauch (gehackt)', amount: '1 Zehe' },
      { name: 'Olivenöl', amount: '1 TL' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
    ],
    instructions: [
      'Linsen, Tahini, Zitronensaft und Knoblauch mischen',
      'Mit Olivenöl drizzeln',
      'Mit Salz und Pfeffer würzen',
      'Mit Gemüsesticks servieren',
      'Alternativ mit Vollkornbrot'
    ],
    nutrition: {
      carbs: 20,
      protein: 32,
      fat: 12,
      calories: 320,
      fiber: 6,
      specialNutrients: ['Eisen', 'Folsäure', 'Ballaststoffe']
    },
    description: 'Ein proteinreicher, nahrhafter Dip'
  },
  {
    id: 'savory_11',
    name: 'Shakshuka',
    type: 'savory',
    prepTime: 20,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/TvTqOxCuBVRYvOqn.png',
    ingredients: [
      { name: 'Tomaten (gehackt)', amount: '400g' },
      { name: 'Kichererbsen (gekocht)', amount: '100g' },
      { name: 'Eier', amount: '3' },
      { name: 'Spinat (frisch)', amount: '100g' },
      { name: 'Paprika (Pulver)', amount: '1 TL' },
      { name: 'Knoblauch (gehackt)', amount: '2 Zehen' }
    ],
    instructions: [
      'Knoblauch in Olivenöl anbraten',
      'Tomaten und Paprika hinzufügen',
      'Kichererbsen und Spinat einrühren',
      'Eier vorsichtig in die Sauce schlagen',
      'Bis die Eier gar sind köcheln lassen',
      'Mit Brot servieren'
    ],
    nutrition: {
      carbs: 20,
      protein: 32,
      fat: 14,
      calories: 360,
      fiber: 5,
      specialNutrients: ['Lycopin', 'Eisen', 'Vitamin C']
    },
    description: 'Ein würziges, nahrhaftes Frühstück'
  },
  {
    id: 'savory_12',
    name: 'Pilz-Pfannkuchen mit Frischkäse',
    type: 'savory',
    prepTime: 20,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/bQwJrIxqvgNSxrQl.png',
    ingredients: [
      { name: 'Kichererbsenmehl', amount: '100g' },
      { name: 'Eier', amount: '2' },
      { name: 'Wasser', amount: '100ml' },
      { name: 'Pilze (geschnitten)', amount: '200g' },
      { name: 'Frischkäse', amount: '50g' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
    ],
    instructions: [
      'Kichererbsenmehl, Eier und Wasser mischen',
      'Teig ruhen lassen',
      'Pilze anbraten',
      'Pfannkuchen in einer Pfanne backen',
      'Mit Frischkäse und Pilzen füllen',
      'Falten und servieren'
    ],
    nutrition: {
      carbs: 18,
      protein: 32,
      fat: 12,
      calories: 340,
      fiber: 4,
      specialNutrients: ['Vitamin D', 'Kalzium', 'Ballaststoffe']
    },
    description: 'Ein herzhafter, würziger Pfannkuchen'
  },
  {
    id: 'savory_13',
    name: 'Spinat-Feta-Muffins',
    type: 'savory',
    prepTime: 25,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/dLcEMDRkSpMLrMXi.png',
    ingredients: [
      { name: 'Eier', amount: '6' },
      { name: 'Spinat (gefroren)', amount: '150g' },
      { name: 'Feta-Käse (gewürfelt)', amount: '80g' },
      { name: 'Zwiebel (gehackt)', amount: '1/4' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' },
      { name: 'Kräuter (Oregano)', amount: '1/2 TL' }
    ],
    instructions: [
      'Eier verquirlen',
      'Spinat, Feta und Zwiebel hinzufügen',
      'Mit Salz, Pfeffer und Oregano würzen',
      'In Muffinformen gießen',
      '20 Minuten bei 180°C backen',
      'Abkühlen lassen'
    ],
    nutrition: {
      carbs: 6,
      protein: 32,
      fat: 16,
      calories: 330,
      fiber: 2,
      specialNutrients: ['Eisen', 'Kalzium', 'Vitamin K']
    },
    description: 'Praktische, herzhafte Muffins'
  },
  {
    id: 'savory_14',
    name: 'Zucchini-Puffer mit Kräuter-Quark',
    type: 'savory',
    prepTime: 20,
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663171267902/zplRJOJuwHIGBWUd.png',
    ingredients: [
      { name: 'Zucchini (gerieben)', amount: '300g' },
      { name: 'Eier', amount: '2' },
      { name: 'Quark (20% Fett)', amount: '100g' },
      { name: 'Kräuter (Dill, Petersilie)', amount: '2 EL' },
      { name: 'Paniermehl', amount: '50g' },
      { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
    ],
    instructions: [
      'Zucchini auspressen',
      'Mit Eiern und Paniermehl mischen',
      'Mit Salz und Pfeffer würzen',
      'Puffer in einer Pfanne braten',
      'Quark mit Kräutern mischen',
      'Puffer mit Kräuter-Quark servieren'
    ],
    nutrition: {
      carbs: 12,
      protein: 32,
      fat: 10,
      calories: 300,
      fiber: 2,
      specialNutrients: ['Vitamin C', 'Kalzium', 'Vitamin K']
    },
    description: 'Knusprige Zucchini-Puffer mit cremigem Dip'
  }
];
