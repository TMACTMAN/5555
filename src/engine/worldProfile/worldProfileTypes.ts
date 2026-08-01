export type WorldGenre = 'XIANXIA' | 'STEAM_ARCANUM' | 'CYBERPUNK' | 'WASTELAND';

export interface WorldProfile {
  world_id: string;

  genre: WorldGenre;
  genre_version: number;

  display_name: string;
  world_description: string;

  cosmology: string;
  power_system: string;
  social_structure: string;
  economy_system: string;
  geography_style: string;

  currency_name: string;
  energy_name: string;

  narrator_role: string;
  narration_style: string;

  profession_lexicon: string[];
  faction_lexicon: string[];
  location_lexicon: string[];
  creature_lexicon: string[];
  item_lexicon: string[];

  allowed_concepts: string[];
  forbidden_concepts: string[];

  default_player_origin: string;
  default_player_title: string;

  created_at_epoch: number;
  updated_at_epoch: number;
}

export interface GenreViolation {
  concept: string;
  path?: string;
  reason: string;
}

export interface GenreValidationResult {
  valid: boolean;
  violations: GenreViolation[];
}
