const productos = [
    { nombre: "212 vip rose", categoria: "Femenino", nombreImagen: "212 vip rose", extension: "webp" },
    { nombre: "212 vip", categoria: "Femenino", nombreImagen: "212 vip", extension: "jfif" },
    { nombre: "212 glam (WEBP)", categoria: "Femenino", nombreImagen: "212_glam", extension: "webp" },
    { nombre: "A Kiss of Bliss", categoria: "Femenino", nombreImagen: "A Kiss of Bliss", extension: "jpg" },
    { nombre: "Acqua Di Gio", categoria: "Femenino", nombreImagen: "Acqua Di Gio", extension: "webp" },
    { nombre: "Acqua Di Gioa", categoria: "Femenino", nombreImagen: "Acqua Di Gioa", extension: "webp" },
    { nombre: "Addict", categoria: "Femenino", nombreImagen: "Addict", extension: "webp" },
    { nombre: "Alien Goddess", categoria: "Femenino", nombreImagen: "Alien Goddess", extension: "webp" },
    { nombre: "Alien", categoria: "Femenino", nombreImagen: "Alien", extension: "webp" },
    { nombre: "Allure", categoria: "Femenino", nombreImagen: "Allure", extension: "jfif" },
    { nombre: "Alma", categoria: "Femenino", nombreImagen: "Alma", extension: "webp" },
    { nombre: "Amarige", categoria: "Femenino", nombreImagen: "Amarige", extension: "webp" },
    { nombre: "Amor Amor", categoria: "Femenino", nombreImagen: "Amor Amor", extension: "webp" },
    { nombre: "Anais-Anais", categoria: "Femenino", nombreImagen: "Anais-Anais", extension: "webp" },
    { nombre: "Ange ou Demon Le Secret Elixir", categoria: "Femenino", nombreImagen: "Ange ou Demon Le Secret Elixir", extension: "webp" },
    { nombre: "Ange ou Demon Le Secret", categoria: "Femenino", nombreImagen: "Ange ou Demon Le Secret", extension: "jpg" },
    { nombre: "Ange ou Demon", categoria: "Femenino", nombreImagen: "Ange ou Demon", extension: "jpg" },
    { nombre: "Angel Muse", categoria: "Femenino", nombreImagen: "Angel Muse", extension: "webp" },
    { nombre: "Angel Nova", categoria: "Femenino", nombreImagen: "Angel Nova", extension: "webp" },
    { nombre: "Angel", categoria: "Femenino", nombreImagen: "Angel", extension: "webp" },
    { nombre: "Armani Code", categoria: "Femenino", nombreImagen: "Armani Code", extension: "webp" },
    { nombre: "Aura Thierry Mugler", categoria: "Femenino", nombreImagen: "Aura  Thierry Mugler", extension: "webp" },
    { nombre: "Be Delicious D.K.N.Y.", categoria: "Femenino", nombreImagen: "Be Delicious - D.K.N.Y.", extension: "webp" },
    { nombre: "Be Delicious Fresh Blossom", categoria: "Femenino", nombreImagen: "Be Delicious Fresh Blossom  D.K.N.Y", extension: "webp" },
    { nombre: "Black Opium", categoria: "Femenino", nombreImagen: "Black Opium - Yves St. Laurent", extension: "jpg" },
    { nombre: "Black Opium Glowing", categoria: "Femenino", nombreImagen: "Black Opium Glowing - Yves St. Laurent", extension: "jfif" },
    { nombre: "Black Opium Neon", categoria: "Femenino", nombreImagen: "Black Opium Neon - Yves St. Laurent", extension: "webp" },
    { nombre: "Black Opium Over Red", categoria: "Femenino", nombreImagen: "Black Opium Over Red - Yves Saint Laurent", extension: "webp" },
    { nombre: "Black Orchid", categoria: "Femenino", nombreImagen: "Black Orchid - Tom Ford", extension: "webp" },
    { nombre: "Bloom", categoria: "Femenino", nombreImagen: "Bloom - Gucci", extension: "webp" },
    { nombre: "Blue", categoria: "Femenino", nombreImagen: "Blue - Ralph Lauren", extension: "webp" },
    { nombre: "Blue Seduction", categoria: "Femenino", nombreImagen: "Blue Seduction - Antonio Banderas", extension: "webp" },
    { nombre: "Bonbon", categoria: "Femenino", nombreImagen: "Bonbon - Viktor & Rolf", extension: "webp" },
    { nombre: "Boos Intense", categoria: "Femenino", nombreImagen: "Boos Intense - Boos", extension: "jfif" },
    { nombre: "Boos Intense Lumiere", categoria: "Femenino", nombreImagen: "Boos Intense Lumiere - Boos", extension: "webp" },
    { nombre: "Born in Roma Intense", categoria: "Femenino", nombreImagen: "Born in Roma Intense - Valentino", extension: "webp" },
    { nombre: "Bright Cristal", categoria: "Femenino", nombreImagen: "Bright Cristal - Versace", extension: "webp" },
    { nombre: "Cabotine", categoria: "Femenino", nombreImagen: "Cabotine - Gres", extension: "jfif" },
    { nombre: "Carolina Herrera", categoria: "Femenino", nombreImagen: "Carolina Herrera - Carolina Herrera", extension: "webp" },
    { nombre: "CH", categoria: "Femenino", nombreImagen: "CH - Carolina Herrera", extension: "webp" },
    { nombre: "CH L'eau", categoria: "Femenino", nombreImagen: "CH L'eau - Carolina Herrera", extension: "webp" },
    { nombre: "CH Prive", categoria: "Femenino", nombreImagen: "CH Prive - Carolina Herrera", extension: "webp" },
    { nombre: "CH Sublime", categoria: "Femenino", nombreImagen: "CH Sublime - Carolina Herrera", extension: "webp" },
    { nombre: "Chance", categoria: "Femenino", nombreImagen: "Chance - Chanel", extension: "webp" },
    { nombre: "Chanel N°5", categoria: "Femenino", nombreImagen: "Chanel N°5 - Chanel", extension: "webp" },
    { nombre: "CHER 18", categoria: "Femenino", nombreImagen: "CHER 18 - MARIA CHER", extension: "webp" },
    { nombre: "Cherry In The Air", categoria: "Femenino", nombreImagen: "Cherry In The Air - Escada", extension: "webp" },
    { nombre: "Clasique", categoria: "Femenino", nombreImagen: "Clasique - J.P. Gaultier", extension: "jpg" },
    { nombre: "Cloud", categoria: "Femenino", nombreImagen: "Cloud - Ariana Grande", extension: "webp" },
    { nombre: "Coco Chanel", categoria: "Femenino", nombreImagen: "Coco Chanel - Chanel", extension: "webp" },
    { nombre: "Cool Water", categoria: "Femenino", nombreImagen: "Cool Water - Davidoff", extension: "webp" },
    { nombre: "Creed Aventus", categoria: "Femenino", nombreImagen: "Creed Aventus For Her - Creed", extension: "jfif" },
    { nombre: "DKNY", categoria: "Femenino", nombreImagen: "D.K.N.Y. - D.K.N.Y.", extension: "webp" },
    { nombre: "Daisy", categoria: "Femenino", nombreImagen: "Daisy - Marc Jacobs", extension: "webp" },
    { nombre: "Deep Red", categoria: "Femenino", nombreImagen: "Deep Red - Hugo Boss", extension: "webp" },
    { nombre: "Divine", categoria: "Femenino", nombreImagen: "Divine - J.P. Gaultier", extension: "webp" },
    { nombre: "Eclat D'Arpege", categoria: "Femenino", nombreImagen: "Eclat D'Arpege - Lanvin", extension: "jfif" },
    { nombre: "Eden", categoria: "Femenino", nombreImagen: "Eden - Cacharel", extension: "webp" },
    { nombre: "Eros", categoria: "Femenino", nombreImagen: "Eros - Versace", extension: "webp" },
    { nombre: "Eternity", categoria: "Femenino", nombreImagen: "Eternity - Calvin Klein", extension: "webp" },
    { nombre: "Euphoria", categoria: "Femenino", nombreImagen: "Euphoria - Calvin Klein", extension: "jfif" },
    { nombre: "Extravagance", categoria: "Femenino", nombreImagen: "Extravagance - Givenchy", extension: "webp" },
    { nombre: "Fame", categoria: "Femenino", nombreImagen: "Fame - Paco Rabanne", extension: "jfif" },
    { nombre: "Fame Lady Gaga", categoria: "Femenino", nombreImagen: "Fame Lady Gaga - Paco Rabanne", extension: "webp" },
    { nombre: "Fame Parfum", categoria: "Femenino", nombreImagen: "Fame Parfum - Paco Rabanne", extension: "webp" },
    { nombre: "Fantasy", categoria: "Femenino", nombreImagen: "Fantasy - Britney Spears", extension: "webp" },
    { nombre: "Fleur Musc", categoria: "Femenino", nombreImagen: "Fleur Musc - Narciso Rodríguez", extension: "jpg" },
    { nombre: "Flora Gorgeous Gardenia", categoria: "Femenino", nombreImagen: "FloraGorgeousGardeniaGucci", extension: "jpg" },
    { nombre: "Flowerbomb", categoria: "Femenino", nombreImagen: "FlowerbombViktor&Rolf", extension: "webp" },
    { nombre: "Flower Ikebana", categoria: "Femenino", nombreImagen: "FlowerIkebanaKenzo", extension: "jfif" },
    { nombre: "Flower Kenzo", categoria: "Femenino", nombreImagen: "FlowerKenzo", extension: "webp" },
    { nombre: "Flower Poppy", categoria: "Femenino", nombreImagen: "FlowerPoppyKenzo", extension: "webp" },
    { nombre: "Flower Tag", categoria: "Femenino", nombreImagen: "FlowerTagKenzo", extension: "webp" },
    { nombre: "For Ever And Ever", categoria: "Femenino", nombreImagen: "ForEverAndEverDior", extension: "png" },
    { nombre: "Goddess", categoria: "Femenino", nombreImagen: "GoddessBurberry", extension: "webp" },
    { nombre: "Goldea", categoria: "Femenino", nombreImagen: "GoldeaBulgari", extension: "webp" },
    { nombre: "Good Fortune", categoria: "Femenino", nombreImagen: "GoodFortuneViktor&Rolf", extension: "webp" },
    { nombre: "Good Girl Blush", categoria: "Femenino", nombreImagen: "GoodGirlBlushCarolinaHerrera", extension: "webp" },
    { nombre: "Good Girl", categoria: "Femenino", nombreImagen: "GoodGirlCarolinaHerrera", extension: "webp" },
    { nombre: "Good Girl Dazzling Garden", categoria: "Femenino", nombreImagen: "GoodGirlDazzlingGardenCarolinaHerrera", extension: "webp" },
    { nombre: "Good Girl Glorious Gold", categoria: "Femenino", nombreImagen: "GoodGirlGloriousGoldCarolinaHerrera", extension: "webp" },
    { nombre: "Good Girl Supreme", categoria: "Femenino", nombreImagen: "GoodGirlSupremeCarolinaHerrera", extension: "webp" },
    { nombre: "Good Girl Very", categoria: "Femenino", nombreImagen: "GoodGirlVeryCarolinaHerrera", extension: "webp" },
    { nombre: "Good Girl Very Glam", categoria: "Femenino", nombreImagen: "GoodGirlVeryGlamCarolinaHerrera", extension: "webp" },
    { nombre: "Gucci Guilty Black", categoria: "Femenino", nombreImagen: "GucciGuiltyBlackGucci", extension: "webp" },
    { nombre: "Gucci Guilty", categoria: "Femenino", nombreImagen: "GucciGuiltyGucci", extension: "webp" },
    { nombre: "Halloween", categoria: "Femenino", nombreImagen: "HalloweenJDelPozo", extension: "webp" },
    { nombre: "Hugo Boss Orange", categoria: "Femenino", nombreImagen: "HugoBossOrangeHugo Boss", extension: "webp" },
    { nombre: "Humor 1", categoria: "Femenino", nombreImagen: "Humor1Natura", extension: "webp" },
    { nombre: "Humor 5", categoria: "Femenino", nombreImagen: "Humor5Natura", extension: "webp" },
    { nombre: "Hypnose", categoria: "Femenino", nombreImagen: "HypnoseLancome", extension: "webp" },
    { nombre: "Hypnotic Poison", categoria: "Femenino", nombreImagen: "HypnoticPoisonChristianDior", extension: "jpg" },
    { nombre: "Idole Aura", categoria: "Femenino", nombreImagen: "IdoleAuraLancome", extension: "webp" },
    { nombre: "Idole", categoria: "Femenino", nombreImagen: "IdoleLancome", extension: "jfif" },
    { nombre: "IN2U", categoria: "Femenino", nombreImagen: "IN2UCalvinKlein", extension: "jpg" },
    { nombre: "Iris", categoria: "Femenino", nombreImagen: "IrisMaríaCher", extension: "webp" },
    { nombre: "Irresistible", categoria: "Femenino", nombreImagen: "IrresistibleGivenchy", extension: "webp" },
    { nombre: "J Adore Christian Dior", categoria: "Femenino", nombreImagen: "J Adore Christian Dior", extension: "jpg" },
    { nombre: "J Adore Voile Christian Dior", categoria: "Femenino", nombreImagen: "J Adore Voile Christian Dior", extension: "webp" },
    { nombre: "Jimmy Choo Jimmy Choo", categoria: "Femenino", nombreImagen: "Jimmy Choo Jimmy Choo", extension: "webp" },
    { nombre: "Jungle Kenzo", categoria: "Femenino", nombreImagen: "Jungle Kenzo", extension: "webp" },
    { nombre: "Kayak Natura", categoria: "Femenino", nombreImagen: "Kayak Natura", extension: "webp" },
    { nombre: "Kenzo Amour Kenzo", categoria: "Femenino", nombreImagen: "Kenzo Amour Kenzo", extension: "webp" },
    { nombre: "Kenzo D Ete Kenzo", categoria: "Femenino", nombreImagen: "Kenzo D Ete Kenzo", extension: "webp" },
    { nombre: "Kenzo World Kenzo", categoria: "Femenino", nombreImagen: "Kenzo World Kenzo", extension: "webp" },
    { nombre: "L Eau D Issey Issey Miyake", categoria: "Femenino", nombreImagen: "L Eau D Issey Issey Miyake", extension: "webp" },
    { nombre: "L Eau Par Kenzo Kenzo", categoria: "Femenino", nombreImagen: "L Eau Par Kenzo Kenzo", extension: "webp" },
    { nombre: "L Interdit Givenchy", categoria: "Femenino", nombreImagen: "L Interdit Givenchy", extension: "webp" },
    { nombre: "L Interdit Rouge Givenchy", categoria: "Femenino", nombreImagen: "L Interdit Rouge Givenchy", extension: "webp" },
    { nombre: "La Belle JP Gaultier", categoria: "Femenino", nombreImagen: "La Belle JP Gaultier", extension: "webp" },
    { nombre: "La Bomba Carolina Herrera", categoria: "Femenino", nombreImagen: "La Bomba Carolina Herrera", extension: "webp" },
    { nombre: "La Petite Robe Noir Guerlain", categoria: "Femenino", nombreImagen: "La Petite Robe Noir Guerlain", extension: "webp" },
    { nombre: "La Vida es Bella Lancome", categoria: "Femenino", nombreImagen: "La Vida es Bella Lancome", extension: "webp" },
    { nombre: "La Vida es Bella Florale Lancome", categoria: "Femenino", nombreImagen: "La Vida es Bella Florale Lancome", extension: "webp" },
    { nombre: "La Vida es Bella Intense Lancome", categoria: "Femenino", nombreImagen: "La Vida es Bella Intense Lancome", extension: "webp" },
    { nombre: "La vida es Bella L Absolu Givenchy", categoria: "Femenino", nombreImagen: "La vida es Bella L Absolu Givenchy", extension: "webp" },
    { nombre: "La Vida es Bella Rose Lancome", categoria: "Femenino", nombreImagen: "La Vida es Bella Rose Lancome", extension: "jpg" },
    { nombre: "Lady Millon Paco Rabanne", categoria: "Femenino", nombreImagen: "Lady Millon Paco Rabanne", extension: "webp" },
    { nombre: "Lady Millon Empire Paco Rabanne", categoria: "Femenino", nombreImagen: "Lady Millon Empire Paco Rabanne", extension: "webp" },
    { nombre: "Lady Millon Faboulous Paco Rabanne", categoria: "Femenino", nombreImagen: "Lady Millon Faboulous Paco Rabanne", extension: "webp" },
    { nombre: "Lady Millon Prive Paco Rabanne", categoria: "Femenino", nombreImagen: "Lady Millon Prive Paco Rabanne", extension: "webp" },
    { nombre: "Lady Millon Royal Paco Rabanne", categoria: "Femenino", nombreImagen: "Lady Millon Royal Paco Rabanne", extension: "webp" },
    { nombre: "Libre Yves St Lauren", categoria: "Femenino", nombreImagen: "Libre Yves St Lauren", extension: "webp" },
    { nombre: "Light Blue Dolce Gabbana", categoria: "Femenino", nombreImagen: "Light Blue Dolce Gabbana", extension: "webp" },
    { nombre: "Light Blue Intense Dolce Gabbana", categoria: "Femenino", nombreImagen: "Light Blue Intense Dolce Gabbana", extension: "webp" },
    { nombre: "Light Blue Sun Dolce Gabbana", categoria: "Femenino", nombreImagen: "Light Blue Sun Dolce Gabbana", extension: "jpg" },
    { nombre: "Linterdit Absolu Givenchy", categoria: "Femenino", nombreImagen: "Linterdit Absolu Givenchy", extension: "webp" },
    { nombre: "Live Irresistible Givenchy", categoria: "Femenino", nombreImagen: "Live Irresistible Givenchy", extension: "webp" },
    { nombre: "Live Irresistible Rosy Crush Givenchy", categoria: "Femenino", nombreImagen: "Live Irresistible Rosy Crush Givenchy", extension: "jpg" },
    { nombre: "Lolita Lempicka", categoria: "Femenino", nombreImagen: "Lolita Lempicka Lolita Lempicka", extension: "webp" },
    { nombre: "Lou Lou Cacharel", categoria: "Femenino", nombreImagen: "Lou Lou Cacharel", extension: "webp" },
    { nombre: "Love Love Moschino", categoria: "Femenino", nombreImagen: "Love Love Moschino", extension: "webp" },
    { nombre: "Meow Katy Perry", categoria: "Femenino", nombreImagen: "Meow Katy Perry", extension: "webp" },
    { nombre: "Metallique Tom Ford", categoria: "Femenino", nombreImagen: "Metallique Tom Ford", extension: "webp" },
    { nombre: "Midnight Fantasy Britney Spears", categoria: "Femenino", nombreImagen: "Midnight Fantasy Britney Spears", extension: "webp" },
    { nombre: "Midnight Poison Christian Dior", categoria: "Femenino", nombreImagen: "Midnight Poison Christian Dior", extension: "jpg" },
    { nombre: "Million Gold for Her Paco Rabanne", categoria: "Femenino", nombreImagen: "Million Gold for Her Paco Rabanne", extension: "webp" },
    { nombre: "Miss Dior Blooming Christian Dior", categoria: "Femenino", nombreImagen: "Miss Dior Blooming Christian Dior", extension: "webp" },
    { nombre: "Miss Dior Christian Dior", categoria: "Femenino", nombreImagen: "Miss Dior Christian Dior", extension: "webp" },
    { nombre: "Miss Dior Parfum Christian Dior", categoria: "Femenino", nombreImagen: "Miss Dior Parfum Christian Dior", extension: "webp" },
    { nombre: "Miss Dior Rose N Roses Christian Dior", categoria: "Femenino", nombreImagen: "Miss Dior Rose N Roses Christian Dior", extension: "webp" },
    { nombre: "Miu Miu Twist Miu Miu", categoria: "Femenino", nombreImagen: "Miu Miu Twist Miu Miu", extension: "webp" },
    { nombre: "Mon Paris Yves St Lauren", categoria: "Femenino", nombreImagen: "Mon Paris Yves St Lauren", extension: "webp" },
    { nombre: "My Way Armani", categoria: "Femenino", nombreImagen: "My Way Armani", extension: "webp" },
    { nombre: "My Way Intense Armani", categoria: "Femenino", nombreImagen: "My Way Intense Armani", extension: "webp" },
    { nombre: "Narciso Rodriguez", categoria: "Femenino", nombreImagen: "Narciso Rodriguez Narciso Rodriguez", extension: "webp" },
    { nombre: "Narciso Rodriguez Rouge", categoria: "Femenino", nombreImagen: "Narciso Rodriguez Rouge Narciso Rodriguez", extension: "webp" },
    { nombre: "Nina Nina Ricci", categoria: "Femenino", nombreImagen: "Nina Nina Ricci", extension: "webp" },
    { nombre: "Nina Bella Nina Ricci", categoria: "Femenino", nombreImagen: "Nina Bella Nina Ricci", extension: "webp" },
    { nombre: "Nina Luna Nina Ricci", categoria: "Femenino", nombreImagen: "Nina Luna Nina Ricci", extension: "webp" },
    { nombre: "Nina Rouge Nina Ricci", categoria: "Femenino", nombreImagen: "Nina Rouge Nina Ricci", extension: "jfif" },
    { nombre: "O Lancome", categoria: "Femenino", nombreImagen: "O Lancome", extension: "webp" },
    { nombre: "Olympea Paco Rabanne", categoria: "Femenino", nombreImagen: "Olympea Paco Rabanne", extension: "webp" },
    { nombre: "Olympea Acqua Legere Paco Rabanne", categoria: "Femenino", nombreImagen: "Olympea Acqua Legere Paco Rabanne", extension: "webp" },
    { nombre: "Olympea Blossom Paco Rabanne", categoria: "Femenino", nombreImagen: "Olympea Blossom Paco Rabanne", extension: "webp" },
    { nombre: "Olympea Intense Paco Rabanne", categoria: "Femenino", nombreImagen: "Olympea Intense Paco Rabanne", extension: "webp" },
    { nombre: "Olympea Legend Paco Rabanne", categoria: "Femenino", nombreImagen: "Olympea Legend Paco Rabanne", extension: "jpg" },
    { nombre: "Olympea Solar Paco Rabanne", categoria: "Femenino", nombreImagen: "Olympea Solar Paco Rabanne", extension: "webp" },
    { nombre: "Omnia Coral Bulgary", categoria: "Femenino", nombreImagen: "Omnia Coral Bulgary", extension: "webp" },
    { nombre: "Omnia Crystalline Bulgary", categoria: "Femenino", nombreImagen: "Omnia Crystalline Bulgary", extension: "webp" },
    { nombre: "One Shock Calvin Klein", categoria: "Femenino", nombreImagen: "One Shock Calvin Klein", extension: "webp" },
    { nombre: "Onyx Elixir María Cher", categoria: "Femenino", nombreImagen: "Onyx Elixir Maria Cher", extension: "webp" },
    { nombre: "Opium Yves St. Laurent", categoria: "Femenino", nombreImagen: "Opium Yves St Lauren", extension: "webp" },
    { nombre: "Organza Givenchy", categoria: "Femenino", nombreImagen: "Organza Givenchy", extension: "webp" },
    { nombre: "Oscar De La Renta", categoria: "Femenino", nombreImagen: "Oscar De La Renta Oscar de la Renta", extension: "webp" },
    { nombre: "Oui La Vie Est Belle Lancome", categoria: "Femenino", nombreImagen: "Oui La Vie Est Belle Givenchy", extension: "webp" },
    { nombre: "Play Givenchy", categoria: "Femenino", nombreImagen: "Play Givenchy", extension: "webp" },
    { nombre: "Play Intense Givenchy", categoria: "Femenino", nombreImagen: "Play Intense Givenchy", extension: "webp" },
    { nombre: "Poison Christian Dior", categoria: "Femenino", nombreImagen: "Poison Christian Dior", extension: "webp" },
    { nombre: "Poison Girl Christian Dior", categoria: "Femenino", nombreImagen: "Poison Girl Christian Dior", extension: "webp" },
    { nombre: "Pure Poison Christian Dior", categoria: "Femenino", nombreImagen: "Pure Poison Christian Dior", extension: "webp" },
    { nombre: "Pure Turquoise Ralph Lauren", categoria: "Femenino", nombreImagen: "Pure Turquoise Ralph Lauren", extension: "webp" },
    { nombre: "Pure XS Paco Rabanne", categoria: "Femenino", nombreImagen: "Pure XS Paco Rabanne", extension: "webp" },
    { nombre: "Q Dolce & Gabbana", categoria: "Femenino", nombreImagen: "Q Dolce Gabbana", extension: "webp" },
    { nombre: "Radiance Britney Spears", categoria: "Femenino", nombreImagen: "Radiance Britney Spears", extension: "webp" },
    { nombre: "Ralph Ralph Lauren", categoria: "Femenino", nombreImagen: "Ralph Ralph Lauren", extension: "webp" },
    { nombre: "Ralph Wild Ralph Lauren", categoria: "Femenino", nombreImagen: "Ralph Wild Ralph Lauren", extension: "webp" },
    { nombre: "Ricci Ricci Nina Ricci", categoria: "Femenino", nombreImagen: "Ricci Ricci Nina Ricci", extension: "webp" },
    { nombre: "Rumba Ted Lapidus", categoria: "Femenino", nombreImagen: "Rumba Ted Lapidus", extension: "webp" },
    { nombre: "Santal Blush Tom Ford", categoria: "Femenino", nombreImagen: "Santal Blush Tom Ford", extension: "webp" },
    { nombre: "Scandal by Night J. P. Gaultier", categoria: "Femenino", nombreImagen: "Scandal by Night J P Gaultier", extension: "webp" },
    { nombre: "Scandal J. P. Gaultier", categoria: "Femenino", nombreImagen: "Scandal J P Gaultier", extension: "webp" },
    { nombre: "Scandal a Paris J. P. Gaultier", categoria: "Femenino", nombreImagen: "Scandal a Paris J P Gaultier", extension: "webp" },
    { nombre: "Shakira Elixir Shakira", categoria: "Femenino", nombreImagen: "Shakira Elixir Shakira", extension: "webp" },
    { nombre: "Shakira Rock Shakira", categoria: "Femenino", nombreImagen: "Shakira Rock Shakira", extension: "webp" },
    { nombre: "Si Armani", categoria: "Femenino", nombreImagen: "Si Armani", extension: "webp" },
    { nombre: "Si Intense Armani", categoria: "Femenino", nombreImagen: "Si Intense Armani", extension: "webp" },
    { nombre: "Si Passione Armani", categoria: "Femenino", nombreImagen: "Si Passione Armani", extension: "webp" },
    { nombre: "Summer Daze Victoria Secrets", categoria: "Femenino", nombreImagen: "Summer Daze Victoria Secrets", extension: "jpg" },
    { nombre: "Sweet Like Candy Ariana Grande", categoria: "Femenino", nombreImagen: "Sweet Like Candy Ariana Grande", extension: "webp" },
    { nombre: "The One Dolce & Gabbana", categoria: "Femenino", nombreImagen: "The One Dolce Gabbana", extension: "webp" },
    { nombre: "The Only One Dolce & Gabbana", categoria: "Femenino", nombreImagen: "The Only One Dolce Gabbana", extension: "webp" },
    { nombre: "The Only One Intense Dolce & Gabbana", categoria: "Femenino", nombreImagen: "The Only One Intense Dolce Gabbana", extension: "webp" },
    { nombre: "Tommy Girl Tommy Hilfiger", categoria: "Femenino", nombreImagen: "Tommy Girl Tommy Hilfiger", extension: "webp" },
    { nombre: "Touch of Pink Lacoste", categoria: "Femenino", nombreImagen: "Touch of Pink Lacoste", extension: "webp" },
    { nombre: "Toy 2 Moschino", categoria: "Femenino", nombreImagen: "Toy 2 Moschino", extension: "webp" },
    { nombre: "Toy 2 Bubble Gum Moschino", categoria: "Femenino", nombreImagen: "Toy 2 Bubble Gum Moschino", extension: "webp" },
    { nombre: "Tresor Midnight Rose Lancome", categoria: "Femenino", nombreImagen: "Tresor Midnight Rose Lancome", extension: "webp" },
    { nombre: "Tressor Lancome", categoria: "Femenino", nombreImagen: "Tressor Lancome", extension: "jfif" },
    { nombre: "Tressor Le Nuit Lancome", categoria: "Femenino", nombreImagen: "Tressor Le Nuit Lancome", extension: "webp" },
    { nombre: "Twilly d'Hermes Hermes", categoria: "Femenino", nombreImagen: "Twilly d Hermes Hermes", extension: "webp" },
    { nombre: "Ultraviolet Paco Rabanne", categoria: "Femenino", nombreImagen: "Ultraviolet Paco Rabanne", extension: "webp" },
    { nombre: "Venus Nina Ricci", categoria: "Femenino", nombreImagen: "Venus Nina Ricci", extension: "webp" },
    { nombre: "Very Irresistible Givenchy", categoria: "Femenino", nombreImagen: "Very Irresistible Givenchy", extension: "webp" },
    { nombre: "Very Sexy Victoria Secrets", categoria: "Femenino", nombreImagen: "Very Sexy Victoria Secrets", extension: "webp" },
    { nombre: "Wanted Girl Azzaro", categoria: "Femenino", nombreImagen: "Wanted Girl Azzaro", extension: "webp" },
    { nombre: "XS Aphrodisiaque Paco Rabanne", categoria: "Femenino", nombreImagen: "XS Aphrodisiaque Paco Rabanne", extension: "webp" },
    { nombre: "XS Be a Legend Paco Rabanne", categoria: "Femenino", nombreImagen: "XS Be a Legend Paco Rabanne", extension: "webp" },
    { nombre: "XS Black Paco Rabanne", categoria: "Femenino", nombreImagen: "XS Black Paco Rabanne", extension: "webp" },
    { nombre: "XS Black Potion Paco Rabanne", categoria: "Femenino", nombreImagen: "XS Black Potion Paco Rabanne", extension: "webp" },
    { nombre: "Yellow Diamond Versace", categoria: "Femenino", nombreImagen: "Yellow Diamond Versace", extension: "webp" },
    { nombre: "Yes I Am Cacharel", categoria: "Femenino", nombreImagen: "Yes I Am Cacharel", extension: "webp" },
    { nombre: "You Armani", categoria: "Femenino", nombreImagen: "You Armani", extension: "webp" },
];

let carrito = [];
const PRECIO_UNITARIO = 22000;

// ====================================
// RENDER PRODUCTOS
// ====================================
function renderProductos(filtro) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    const filtrados = filtro === 'Todos' ? productos : productos.filter(p => p.categoria === filtro);

    filtrados.forEach(prod => {
        const safeNombre = prod.nombre.replace(/'/g, "\\'");
        const safeImgName = prod.nombreImagen.replace(/'/g, "\\'");

        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img 
                src="imagenes/${prod.nombreImagen}.${prod.extension}" 
                alt="${prod.nombre}" 
                onerror="this.src='imagenes/placeholder.jpg';"
                onclick="abrirModalProducto('${safeNombre}', '${safeImgName}', '${prod.extension}')"
            >
            <h3>${prod.nombre}</h3>
            <p class="precio">$22.000</p>
            <button 
                class="add-btn"
                onclick="agregarAlCarrito('${safeNombre}', '${safeImgName}', '${prod.extension}')"
            >
                Agregar al carrito
            </button>
        `;
        grid.appendChild(card);
    });
}

// ====================================
// MODAL PRODUCTO
// ====================================
function abrirModalProducto(nombre, imgName, ext) {
    document.getElementById('modal-producto-nombre').innerHTML = `${nombre}`;
    document.getElementById('modal-add-btn').onclick = function () {
        agregarAlCarrito(nombre, imgName, ext);
        document.getElementById('caja-modal').style.display = 'none';
    };
    document.getElementById('caja-modal').style.display = 'block';
}

// ====================================
// AGREGAR AL CARRITO
// ====================================
function agregarAlCarrito(nombre, imgName, ext) {
    const itemExistente = carrito.find(item => item.nombre === nombre);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({ nombre: nombre, imgName: imgName, ext: ext, cantidad: 1 });
    }

    actualizarCarrito();
    document.getElementById('img-producto-agregado').src = `imagenes/${imgName}.${ext}`;
    document.getElementById('confirmacion-modal').style.display = 'block';
}

// ====================================
// CAMBIAR CANTIDAD
// ====================================
function cambiarCantidad(nombre, delta) {
    const item = carrito.find(item => item.nombre === nombre);

    if (item) {
        item.cantidad += delta;
        if (item.cantidad <= 0) {
            carrito = carrito.filter(i => i.nombre !== nombre);
        }
        actualizarCarrito();
    }
}

// ====================================
// ACTUALIZAR CARRITO
// ====================================
function actualizarCarrito() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const totalPrecio = totalItems * PRECIO_UNITARIO;

    document.getElementById('cart-count').innerText = totalItems;
    document.getElementById('cart-total-price').innerText = totalPrecio.toLocaleString('es-AR');

    const lista = document.getElementById('cart-items');
    const totalContainer = document.getElementById('cart-total-container');
    lista.innerHTML = '';

    if (carrito.length === 0) {
        lista.innerHTML = '<li style="color:#333; justify-content:center;">El carrito está vacío</li>';
        totalContainer.style.display = 'none';
    } else {
        carrito.forEach(item => {
            const safeNombre = item.nombre.replace(/'/g, "\\'");

            const li = document.createElement('li');
            li.innerHTML = `
                <div class="cart-item-info">
                    <img 
                        src="imagenes/${item.imgName}.${item.ext}" 
                        alt="${item.nombre}" 
                        class="cart-thumbnail"
                        onerror="this.src='imagenes/placeholder.jpg';"
                    >
                    <span class="cart-item-name">${item.nombre}</span>
                </div>
                <div class="cart-item-controls">
                    <button onclick="cambiarCantidad('${safeNombre}', -1)">-</button>
                    <span>${item.cantidad}</span>
                    <button onclick="cambiarCantidad('${safeNombre}', 1)">+</button>
                </div>
            `;
            lista.appendChild(li);
        });
        totalContainer.style.display = 'block';
    }
}

// ====================================
// ABRIR / CERRAR CARRITO
// ====================================
document.getElementById('cart-btn').onclick = () => {
    document.getElementById('cart-dropdown').classList.toggle('hidden');
};

// ====================================
// ENVIAR WHATSAPP
// ====================================
document.getElementById('checkout-btn').onclick = () => {
    if (carrito.length === 0) {
        alert("Agrega al menos un perfume al carrito.");
        return;
    }

    const totalPrecio = carrito.reduce((sum, item) => sum + item.cantidad, 0) * PRECIO_UNITARIO;
    const detallesPedido = carrito.map(item => `- ${item.cantidad}x ${item.nombre}`).join("\n");
    const msg = `Hola, quiero realizar el siguiente pedido en Tienda Rosita:\n\n${detallesPedido}\n\n*Total a pagar: $${totalPrecio.toLocaleString('es-AR')}*`;

    window.open(`https://wa.me/5491160375700?text=${encodeURIComponent(msg)}`, '_blank');
};

// ====================================
// INICIALIZACIÓN
// ====================================
renderProductos('Todos');

// ====================================
// FILTROS
// ====================================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderProductos(e.target.dataset.filter);
    });
});