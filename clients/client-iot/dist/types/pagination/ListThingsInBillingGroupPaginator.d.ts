import { ListThingsInBillingGroupCommandInput, ListThingsInBillingGroupCommandOutput } from "../commands/ListThingsInBillingGroupCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThingsInBillingGroup(config: IoTPaginationConfiguration, input: ListThingsInBillingGroupCommandInput, ...additionalArguments: any): Paginator<ListThingsInBillingGroupCommandOutput>;
