import { DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput } from "../commands/DescribeCertificatesCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCertificates(config: RDSPaginationConfiguration, input: DescribeCertificatesCommandInput, ...additionalArguments: any): Paginator<DescribeCertificatesCommandOutput>;
