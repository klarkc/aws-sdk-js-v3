import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DeregisterTransitGatewayRequest, DeregisterTransitGatewayResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterTransitGatewayCommandInput extends DeregisterTransitGatewayRequest {
}
export interface DeregisterTransitGatewayCommandOutput extends DeregisterTransitGatewayResponse, __MetadataBearer {
}
/**
 * <p>Deregisters a transit gateway from your global network. This action does not delete
 *             your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeregisterTransitGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeregisterTransitGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeregisterTransitGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link DeregisterTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterTransitGatewayCommand extends $Command<DeregisterTransitGatewayCommandInput, DeregisterTransitGatewayCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: DeregisterTransitGatewayCommandInput;
    constructor(input: DeregisterTransitGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTransitGatewayCommandInput, DeregisterTransitGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
