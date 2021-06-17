import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDomains(config: SageMakerPaginationConfiguration, input: ListDomainsCommandInput, ...additionalArguments: any): Paginator<ListDomainsCommandOutput>;
