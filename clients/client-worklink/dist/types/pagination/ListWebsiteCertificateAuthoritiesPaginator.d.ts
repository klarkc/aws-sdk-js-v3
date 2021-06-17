import { ListWebsiteCertificateAuthoritiesCommandInput, ListWebsiteCertificateAuthoritiesCommandOutput } from "../commands/ListWebsiteCertificateAuthoritiesCommand";
import { WorkLinkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWebsiteCertificateAuthorities(config: WorkLinkPaginationConfiguration, input: ListWebsiteCertificateAuthoritiesCommandInput, ...additionalArguments: any): Paginator<ListWebsiteCertificateAuthoritiesCommandOutput>;
