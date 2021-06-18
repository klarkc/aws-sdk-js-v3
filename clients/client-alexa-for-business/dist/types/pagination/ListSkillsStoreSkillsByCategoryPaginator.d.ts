import {
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
} from "../commands/ListSkillsStoreSkillsByCategoryCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSkillsStoreSkillsByCategory(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  ...additionalArguments: any
): Paginator<ListSkillsStoreSkillsByCategoryCommandOutput>;
