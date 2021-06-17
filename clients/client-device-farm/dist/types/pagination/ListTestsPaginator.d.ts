import { ListTestsCommandInput, ListTestsCommandOutput } from "../commands/ListTestsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTests(config: DeviceFarmPaginationConfiguration, input: ListTestsCommandInput, ...additionalArguments: any): Paginator<ListTestsCommandOutput>;
