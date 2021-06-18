import { SearchSkillGroupsCommandInput, SearchSkillGroupsCommandOutput } from "../commands/SearchSkillGroupsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchSkillGroups(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchSkillGroupsCommandInput,
  ...additionalArguments: any
): Paginator<SearchSkillGroupsCommandOutput>;
