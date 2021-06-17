import { DescribeDomainControllersCommandInput, DescribeDomainControllersCommandOutput } from "../commands/DescribeDomainControllersCommand";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDomainControllers(config: DirectoryServicePaginationConfiguration, input: DescribeDomainControllersCommandInput, ...additionalArguments: any): Paginator<DescribeDomainControllersCommandOutput>;
