import { ListSigningCertificatesCommandInput, ListSigningCertificatesCommandOutput } from "../commands/ListSigningCertificatesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSigningCertificates(config: IAMPaginationConfiguration, input: ListSigningCertificatesCommandInput, ...additionalArguments: any): Paginator<ListSigningCertificatesCommandOutput>;
