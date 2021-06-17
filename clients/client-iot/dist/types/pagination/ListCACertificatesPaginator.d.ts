import { ListCACertificatesCommandInput, ListCACertificatesCommandOutput } from "../commands/ListCACertificatesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCACertificates(config: IoTPaginationConfiguration, input: ListCACertificatesCommandInput, ...additionalArguments: any): Paginator<ListCACertificatesCommandOutput>;
