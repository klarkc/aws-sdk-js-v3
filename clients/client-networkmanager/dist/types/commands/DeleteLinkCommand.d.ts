import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DeleteLinkRequest, DeleteLinkResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLinkCommandInput extends DeleteLinkRequest {
}
export interface DeleteLinkCommandOutput extends DeleteLinkResponse, __MetadataBearer {
}
/**
 * <p>Deletes an existing link. You must first disassociate the link from any devices and
 *             customer gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeleteLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLinkCommandInput} for command's `input` shape.
 * @see {@link DeleteLinkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLinkCommand extends $Command<DeleteLinkCommandInput, DeleteLinkCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: DeleteLinkCommandInput;
    constructor(input: DeleteLinkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLinkCommandInput, DeleteLinkCommandOutput>;
    private serialize;
    private deserialize;
}
