import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeDirectConnectGatewayAssociationProposalsRequest, DescribeDirectConnectGatewayAssociationProposalsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDirectConnectGatewayAssociationProposalsCommandInput extends DescribeDirectConnectGatewayAssociationProposalsRequest {
}
export interface DescribeDirectConnectGatewayAssociationProposalsCommandOutput extends DescribeDirectConnectGatewayAssociationProposalsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAssociationProposalsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAssociationProposalsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeDirectConnectGatewayAssociationProposalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectConnectGatewayAssociationProposalsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAssociationProposalsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDirectConnectGatewayAssociationProposalsCommand extends $Command<DescribeDirectConnectGatewayAssociationProposalsCommandInput, DescribeDirectConnectGatewayAssociationProposalsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeDirectConnectGatewayAssociationProposalsCommandInput;
    constructor(input: DescribeDirectConnectGatewayAssociationProposalsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDirectConnectGatewayAssociationProposalsCommandInput, DescribeDirectConnectGatewayAssociationProposalsCommandOutput>;
    private serialize;
    private deserialize;
}
