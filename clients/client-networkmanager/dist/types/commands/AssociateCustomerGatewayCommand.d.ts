import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { AssociateCustomerGatewayRequest, AssociateCustomerGatewayResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateCustomerGatewayCommandInput extends AssociateCustomerGatewayRequest {
}
export interface AssociateCustomerGatewayCommandOutput extends AssociateCustomerGatewayResponse, __MetadataBearer {
}
/**
 * <p>Associates a customer gateway with a device and optionally, with a link. If you
 *             specify a link, it must be associated with the specified device. </p>
 *         <p>You can only associate customer gateways that are connected to a VPN attachment on a
 *             transit gateway. The transit gateway must be registered in your global network. When
 *             you register a transit gateway, customer gateways that are connected to the transit
 *             gateway are automatically included in the global network. To list customer gateways
 *             that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by
 *                 <code>transit-gateway-id</code>.</p>
 *         <p>You cannot associate a customer gateway with more than one device and link. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateCustomerGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateCustomerGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new AssociateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link AssociateCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateCustomerGatewayCommand extends $Command<AssociateCustomerGatewayCommandInput, AssociateCustomerGatewayCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: AssociateCustomerGatewayCommandInput;
    constructor(input: AssociateCustomerGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateCustomerGatewayCommandInput, AssociateCustomerGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
