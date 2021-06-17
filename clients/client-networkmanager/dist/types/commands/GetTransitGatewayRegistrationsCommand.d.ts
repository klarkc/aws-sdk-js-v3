import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { GetTransitGatewayRegistrationsRequest, GetTransitGatewayRegistrationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTransitGatewayRegistrationsCommandInput extends GetTransitGatewayRegistrationsRequest {
}
export interface GetTransitGatewayRegistrationsCommandOutput extends GetTransitGatewayRegistrationsResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the transit gateway registrations in a specified
 *             global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayRegistrationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayRegistrationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetTransitGatewayRegistrationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayRegistrationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTransitGatewayRegistrationsCommand extends $Command<GetTransitGatewayRegistrationsCommandInput, GetTransitGatewayRegistrationsCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: GetTransitGatewayRegistrationsCommandInput;
    constructor(input: GetTransitGatewayRegistrationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTransitGatewayRegistrationsCommandInput, GetTransitGatewayRegistrationsCommandOutput>;
    private serialize;
    private deserialize;
}
