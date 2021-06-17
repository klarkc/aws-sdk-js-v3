import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DeleteSiteRequest, DeleteSiteResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSiteCommandInput extends DeleteSiteRequest {
}
export interface DeleteSiteCommandOutput extends DeleteSiteResponse, __MetadataBearer {
}
/**
 * <p>Deletes an existing site. The site cannot be associated with any device or link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteSiteCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteSiteCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeleteSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSiteCommandInput} for command's `input` shape.
 * @see {@link DeleteSiteCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSiteCommand extends $Command<DeleteSiteCommandInput, DeleteSiteCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: DeleteSiteCommandInput;
    constructor(input: DeleteSiteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSiteCommandInput, DeleteSiteCommandOutput>;
    private serialize;
    private deserialize;
}
