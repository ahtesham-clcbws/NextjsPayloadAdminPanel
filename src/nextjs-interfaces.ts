import type { Media } from "@/payload-types";

export interface headerDataInterface {
  title: string | null | undefined,
  logo: NextMedia,
  LogoDark: NextMedia,
  Favicon: NextMedia
}
export interface NextMedia extends Omit<Media, 'url'> {
    url: string; // Override the 'url' property to be a string
  }
  