import {
  ListSkillsStoreCategoriesCommandInput,
  ListSkillsStoreCategoriesCommandOutput,
} from "../commands/ListSkillsStoreCategoriesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSkillsStoreCategories(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsStoreCategoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListSkillsStoreCategoriesCommandOutput>;
