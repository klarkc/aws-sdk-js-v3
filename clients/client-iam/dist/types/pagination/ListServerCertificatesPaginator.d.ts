import { ListServerCertificatesCommandInput, ListServerCertificatesCommandOutput } from "../commands/ListServerCertificatesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServerCertificates(config: IAMPaginationConfiguration, input: ListServerCertificatesCommandInput, ...additionalArguments: any): Paginator<ListServerCertificatesCommandOutput>;
