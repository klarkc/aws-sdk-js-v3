import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { GetLinkAssociationsRequest, GetLinkAssociationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLinkAssociationsCommandInput extends GetLinkAssociationsRequest {
}
export interface GetLinkAssociationsCommandOutput extends GetLinkAssociationsResponse, __MetadataBearer {
}
/**
 * <p>Gets the link associations for a device or a link. Either the device ID or the link ID
 *             must be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetLinkAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetLinkAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetLinkAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLinkAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetLinkAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLinkAssociationsCommand extends $Command<GetLinkAssociationsCommandInput, GetLinkAssociationsCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: GetLinkAssociationsCommandInput;
    constructor(input: GetLinkAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLinkAssociationsCommandInput, GetLinkAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
