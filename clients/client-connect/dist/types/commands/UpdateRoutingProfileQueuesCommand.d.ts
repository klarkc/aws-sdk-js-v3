import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateRoutingProfileQueuesRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRoutingProfileQueuesCommandInput extends UpdateRoutingProfileQueuesRequest {
}
export interface UpdateRoutingProfileQueuesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the properties associated with a set of queues for a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRoutingProfileQueuesCommand extends $Command<UpdateRoutingProfileQueuesCommandInput, UpdateRoutingProfileQueuesCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateRoutingProfileQueuesCommandInput;
    constructor(input: UpdateRoutingProfileQueuesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRoutingProfileQueuesCommandInput, UpdateRoutingProfileQueuesCommandOutput>;
    private serialize;
    private deserialize;
}
