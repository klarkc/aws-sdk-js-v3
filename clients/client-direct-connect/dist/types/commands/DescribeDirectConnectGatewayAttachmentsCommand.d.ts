import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeDirectConnectGatewayAttachmentsRequest, DescribeDirectConnectGatewayAttachmentsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDirectConnectGatewayAttachmentsCommandInput extends DescribeDirectConnectGatewayAttachmentsRequest {
}
export interface DescribeDirectConnectGatewayAttachmentsCommandOutput extends DescribeDirectConnectGatewayAttachmentsResult, __MetadataBearer {
}
/**
 * <p>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify
 *       a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
 *       all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the
 *       response contains all Direct Connect gateways attached to the virtual interface. If you specify both,
 *       the response contains the attachment between the Direct Connect gateway and the virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeDirectConnectGatewayAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDirectConnectGatewayAttachmentsCommand extends $Command<DescribeDirectConnectGatewayAttachmentsCommandInput, DescribeDirectConnectGatewayAttachmentsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeDirectConnectGatewayAttachmentsCommandInput;
    constructor(input: DescribeDirectConnectGatewayAttachmentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDirectConnectGatewayAttachmentsCommandInput, DescribeDirectConnectGatewayAttachmentsCommandOutput>;
    private serialize;
    private deserialize;
}
