
export interface AnimeEpisodesResponse {
  pagination: EpisodesPagination;
  data: AnimeEpisode[];
}

export interface EpisodesPagination {
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
