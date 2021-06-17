import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DisassociateTransitGatewayConnectPeerRequest, DisassociateTransitGatewayConnectPeerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateTransitGatewayConnectPeerCommandInput extends DisassociateTransitGatewayConnectPeerRequest {
}
export interface DisassociateTransitGatewayConnectPeerCommandOutput extends DisassociateTransitGatewayConnectPeerResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a transit gateway Connect peer from a device and link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateTransitGatewayConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DisassociateTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateTransitGatewayConnectPeerCommand extends $Command<DisassociateTransitGatewayConnectPeerCommandInput, DisassociateTransitGatewayConnectPeerCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: DisassociateTransitGatewayConnectPeerCommandInput;
    constructor(input: DisassociateTransitGatewayConnectPeerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTransitGatewayConnectPeerCommandInput, DisassociateTransitGatewayConnectPeerCommandOutput>;
    private serialize;
    private deserialize;
}
