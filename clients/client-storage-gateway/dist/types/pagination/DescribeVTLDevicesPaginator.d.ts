import { DescribeVTLDevicesCommandInput, DescribeVTLDevicesCommandOutput } from "../commands/DescribeVTLDevicesCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeVTLDevices(config: StorageGatewayPaginationConfiguration, input: DescribeVTLDevicesCommandInput, ...additionalArguments: any): Paginator<DescribeVTLDevicesCommandOutput>;
