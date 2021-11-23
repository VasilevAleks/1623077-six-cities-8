export type Review = {
  comment: string,
  date: string,
  id: string,
  rating: number,
  user: {
    avatarUrl?: string,
    ['avatar_url']?: string,
    id?: string,
    isPro?: boolean,
    ['is_pro']?: boolean,
    name?: string,
  }
};
