import { ListOutpostsCommandInput, ListOutpostsCommandOutput } from "../commands/ListOutpostsCommand";
import { OutpostsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOutposts(config: OutpostsPaginationConfiguration, input: ListOutpostsCommandInput, ...additionalArguments: any): Paginator<ListOutpostsCommandOutput>;
