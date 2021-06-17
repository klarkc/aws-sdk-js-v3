import { ListMilestonesCommandInput, ListMilestonesCommandOutput } from "../commands/ListMilestonesCommand";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMilestones(config: WellArchitectedPaginationConfiguration, input: ListMilestonesCommandInput, ...additionalArguments: any): Paginator<ListMilestonesCommandOutput>;
