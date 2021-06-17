import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { UpdateConnectionRequest, UpdateConnectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateConnectionCommandInput extends UpdateConnectionRequest {
}
export interface UpdateConnectionCommandOutput extends UpdateConnectionResponse, __MetadataBearer {
}
/**
 * <p>Updates settings for a connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, UpdateConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, UpdateConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateConnectionCommand extends $Command<UpdateConnectionCommandInput, UpdateConnectionCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: UpdateConnectionCommandInput;
    constructor(input: UpdateConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConnectionCommandInput, UpdateConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
