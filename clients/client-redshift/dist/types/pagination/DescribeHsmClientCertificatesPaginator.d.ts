import { DescribeHsmClientCertificatesCommandInput, DescribeHsmClientCertificatesCommandOutput } from "../commands/DescribeHsmClientCertificatesCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeHsmClientCertificates(config: RedshiftPaginationConfiguration, input: DescribeHsmClientCertificatesCommandInput, ...additionalArguments: any): Paginator<DescribeHsmClientCertificatesCommandOutput>;
