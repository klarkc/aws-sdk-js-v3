import { ListAnswersCommandInput, ListAnswersCommandOutput } from "../commands/ListAnswersCommand";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAnswers(config: WellArchitectedPaginationConfiguration, input: ListAnswersCommandInput, ...additionalArguments: any): Paginator<ListAnswersCommandOutput>;
