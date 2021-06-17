import { DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput } from "../commands/DescribeCertificatesCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCertificates(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeCertificatesCommandInput, ...additionalArguments: any): Paginator<DescribeCertificatesCommandOutput>;
