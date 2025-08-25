import type { BaseTitleInfo } from "./BaseTitleInfo";
import type { Title } from "./Title";

export type TitleDetails = BaseTitleInfo & {
  creators: string[];
  length: number;
} & Title;
