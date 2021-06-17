import { ListFHIRDatastoresCommandInput, ListFHIRDatastoresCommandOutput } from "../commands/ListFHIRDatastoresCommand";
import { HealthLakePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFHIRDatastores(config: HealthLakePaginationConfiguration, input: ListFHIRDatastoresCommandInput, ...additionalArguments: any): Paginator<ListFHIRDatastoresCommandOutput>;
