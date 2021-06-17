import { DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput } from "../commands/DescribeCertificatesCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCertificates(config: DocDBPaginationConfiguration, input: DescribeCertificatesCommandInput, ...additionalArguments: any): Paginator<DescribeCertificatesCommandOutput>;
