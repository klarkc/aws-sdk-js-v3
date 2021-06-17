import { DescribeInstallationMediaCommandInput, DescribeInstallationMediaCommandOutput } from "../commands/DescribeInstallationMediaCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeInstallationMedia(config: RDSPaginationConfiguration, input: DescribeInstallationMediaCommandInput, ...additionalArguments: any): Paginator<DescribeInstallationMediaCommandOutput>;
