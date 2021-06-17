import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { GetTransitGatewayConnectPeerAssociationsRequest, GetTransitGatewayConnectPeerAssociationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTransitGatewayConnectPeerAssociationsCommandInput extends GetTransitGatewayConnectPeerAssociationsRequest {
}
export interface GetTransitGatewayConnectPeerAssociationsCommandOutput extends GetTransitGatewayConnectPeerAssociationsResponse, __MetadataBearer {
}
/**
 * <p>Gets information about one or more of your transit gateway Connect peer associations in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetTransitGatewayConnectPeerAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayConnectPeerAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayConnectPeerAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTransitGatewayConnectPeerAssociationsCommand extends $Command<GetTransitGatewayConnectPeerAssociationsCommandInput, GetTransitGatewayConnectPeerAssociationsCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: GetTransitGatewayConnectPeerAssociationsCommandInput;
    constructor(input: GetTransitGatewayConnectPeerAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTransitGatewayConnectPeerAssociationsCommandInput, GetTransitGatewayConnectPeerAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
