import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { UpdateSiteRequest, UpdateSiteResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSiteCommandInput extends UpdateSiteRequest {
}
export interface UpdateSiteCommandOutput extends UpdateSiteResponse, __MetadataBearer {
}
/**
 * <p>Updates the information for an existing site. To remove information for any of the
 *             parameters, specify an empty string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateSiteCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateSiteCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new UpdateSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSiteCommandInput} for command's `input` shape.
 * @see {@link UpdateSiteCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSiteCommand extends $Command<UpdateSiteCommandInput, UpdateSiteCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: UpdateSiteCommandInput;
    constructor(input: UpdateSiteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSiteCommandInput, UpdateSiteCommandOutput>;
    private serialize;
    private deserialize;
}
