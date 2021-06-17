import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DeleteGlobalNetworkRequest, DeleteGlobalNetworkResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteGlobalNetworkCommandInput extends DeleteGlobalNetworkRequest {
}
export interface DeleteGlobalNetworkCommandOutput extends DeleteGlobalNetworkResponse, __MetadataBearer {
}
/**
 * <p>Deletes an existing global network. You must first delete all global network objects
 *             (devices, links, and sites) and deregister all transit gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteGlobalNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteGlobalNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeleteGlobalNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGlobalNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalNetworkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGlobalNetworkCommand extends $Command<DeleteGlobalNetworkCommandInput, DeleteGlobalNetworkCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: DeleteGlobalNetworkCommandInput;
    constructor(input: DeleteGlobalNetworkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGlobalNetworkCommandInput, DeleteGlobalNetworkCommandOutput>;
    private serialize;
    private deserialize;
}
