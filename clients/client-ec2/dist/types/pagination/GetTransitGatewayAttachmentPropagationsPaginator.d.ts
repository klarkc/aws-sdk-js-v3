import { GetTransitGatewayAttachmentPropagationsCommandInput, GetTransitGatewayAttachmentPropagationsCommandOutput } from "../commands/GetTransitGatewayAttachmentPropagationsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetTransitGatewayAttachmentPropagations(config: EC2PaginationConfiguration, input: GetTransitGatewayAttachmentPropagationsCommandInput, ...additionalArguments: any): Paginator<GetTransitGatewayAttachmentPropagationsCommandOutput>;
