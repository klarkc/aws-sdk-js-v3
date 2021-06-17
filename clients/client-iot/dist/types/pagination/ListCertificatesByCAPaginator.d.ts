import { ListCertificatesByCACommandInput, ListCertificatesByCACommandOutput } from "../commands/ListCertificatesByCACommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCertificatesByCA(config: IoTPaginationConfiguration, input: ListCertificatesByCACommandInput, ...additionalArguments: any): Paginator<ListCertificatesByCACommandOutput>;
