import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateRoutingProfileDefaultOutboundQueueRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRoutingProfileDefaultOutboundQueueCommandInput extends UpdateRoutingProfileDefaultOutboundQueueRequest {
}
export interface UpdateRoutingProfileDefaultOutboundQueueCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the default outbound queue of a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileDefaultOutboundQueueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileDefaultOutboundQueueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateRoutingProfileDefaultOutboundQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoutingProfileDefaultOutboundQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileDefaultOutboundQueueCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRoutingProfileDefaultOutboundQueueCommand extends $Command<UpdateRoutingProfileDefaultOutboundQueueCommandInput, UpdateRoutingProfileDefaultOutboundQueueCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateRoutingProfileDefaultOutboundQueueCommandInput;
    constructor(input: UpdateRoutingProfileDefaultOutboundQueueCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRoutingProfileDefaultOutboundQueueCommandInput, UpdateRoutingProfileDefaultOutboundQueueCommandOutput>;
    private serialize;
    private deserialize;
}
