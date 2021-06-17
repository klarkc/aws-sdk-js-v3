import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "../commands/ListCertificatesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCertificates(config: IoTPaginationConfiguration, input: ListCertificatesCommandInput, ...additionalArguments: any): Paginator<ListCertificatesCommandOutput>;
