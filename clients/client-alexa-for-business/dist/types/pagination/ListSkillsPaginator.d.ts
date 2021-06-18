import { ListSkillsCommandInput, ListSkillsCommandOutput } from "../commands/ListSkillsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSkills(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsCommandInput,
  ...additionalArguments: any
): Paginator<ListSkillsCommandOutput>;
