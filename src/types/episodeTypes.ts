
export interface AnimeEpisodesResponse {
  pagination: Pagination;
  data: AnimeEpisode[];
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
}

export interface AnimeEpisode {
  mal_id: number;
  url: string;
  title: string;
  title_japanese: string | null;
  title_romanji: string | null;
  aired: string | null; 
  score: number | null;
  filler: boolean;
  recap: boolean;
  forum_url: string;
}
