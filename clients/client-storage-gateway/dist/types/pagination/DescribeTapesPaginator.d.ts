import { DescribeTapesCommandInput, DescribeTapesCommandOutput } from "../commands/DescribeTapesCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTapes(config: StorageGatewayPaginationConfiguration, input: DescribeTapesCommandInput, ...additionalArguments: any): Paginator<DescribeTapesCommandOutput>;
