export type Image = {
  id: string;
  urls: {
    small?: string;
    regular?: string;
  };
};

export type Images = Image[];
