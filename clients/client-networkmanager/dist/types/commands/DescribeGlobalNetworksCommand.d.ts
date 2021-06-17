import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DescribeGlobalNetworksRequest, DescribeGlobalNetworksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeGlobalNetworksCommandInput extends DescribeGlobalNetworksRequest {
}
export interface DescribeGlobalNetworksCommandOutput extends DescribeGlobalNetworksResponse, __MetadataBearer {
}
/**
 * <p>Describes one or more global networks. By default, all global networks are
 *             described. To describe the objects in your global network, you must use the appropriate
 *                 <code>Get*</code> action. For example, to list the transit gateways in your global
 *             network, use <a>GetTransitGatewayRegistrations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DescribeGlobalNetworksCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DescribeGlobalNetworksCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DescribeGlobalNetworksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalNetworksCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGlobalNetworksCommand extends $Command<DescribeGlobalNetworksCommandInput, DescribeGlobalNetworksCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: DescribeGlobalNetworksCommandInput;
    constructor(input: DescribeGlobalNetworksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGlobalNetworksCommandInput, DescribeGlobalNetworksCommandOutput>;
    private serialize;
    private deserialize;
}
