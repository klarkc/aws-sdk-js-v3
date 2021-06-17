import { ListFragmentsCommandInput, ListFragmentsCommandOutput } from "../commands/ListFragmentsCommand";
import { KinesisVideoArchivedMediaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFragments(config: KinesisVideoArchivedMediaPaginationConfiguration, input: ListFragmentsCommandInput, ...additionalArguments: any): Paginator<ListFragmentsCommandOutput>;
