interface PlaceType {
  id?: number;
  created_at: string;
  updated_at: string;
  published: boolean;
  text: string;
}

interface Informant {
  id?: number;
}

interface Language {
  id: number;
  created_at: string;
  updated_at: string;
  published: true;
  name: string;
  abbreviation: string;
}

interface Name {
  id?: number;
  created_at: string;
  updated_at: string;
  published: boolean;
  informants: Array<Informant>;
  languages: Array<Language>;
  referent: number;
  text: string;
  note: string;
}

interface Place {
  id?: number;
  comment: string | null;
  corrected: boolean;
  description: string;
  published: boolean;
  is_existing: boolean;
  is_iconic: boolean;
  is_private: boolean;
  names: Array<Name>;
  type: PlaceType;
}

export type { Place, PlaceType, Name, Informant, Language };
