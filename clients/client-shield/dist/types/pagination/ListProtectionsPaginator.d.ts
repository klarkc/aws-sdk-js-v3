import { ListProtectionsCommandInput, ListProtectionsCommandOutput } from "../commands/ListProtectionsCommand";
import { ShieldPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProtections(config: ShieldPaginationConfiguration, input: ListProtectionsCommandInput, ...additionalArguments: any): Paginator<ListProtectionsCommandOutput>;
