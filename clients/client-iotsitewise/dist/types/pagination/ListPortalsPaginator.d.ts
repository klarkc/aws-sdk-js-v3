import { ListPortalsCommandInput, ListPortalsCommandOutput } from "../commands/ListPortalsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPortals(config: IoTSiteWisePaginationConfiguration, input: ListPortalsCommandInput, ...additionalArguments: any): Paginator<ListPortalsCommandOutput>;
