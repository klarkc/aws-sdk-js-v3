import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { VirtualGateways } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeVirtualGatewaysCommandInput {
}
export interface DescribeVirtualGatewaysCommandOutput extends VirtualGateways, __MetadataBearer {
}
/**
 * <p>Lists the virtual private gateways owned by the AWS account.</p>
 *          <p>You can create one or more AWS Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeVirtualGatewaysCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeVirtualGatewaysCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeVirtualGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualGatewaysCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVirtualGatewaysCommand extends $Command<DescribeVirtualGatewaysCommandInput, DescribeVirtualGatewaysCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeVirtualGatewaysCommandInput;
    constructor(input: DescribeVirtualGatewaysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVirtualGatewaysCommandInput, DescribeVirtualGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
