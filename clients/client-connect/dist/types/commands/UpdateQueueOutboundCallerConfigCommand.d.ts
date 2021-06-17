import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateQueueOutboundCallerConfigRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateQueueOutboundCallerConfigCommandInput extends UpdateQueueOutboundCallerConfigRequest {
}
export interface UpdateQueueOutboundCallerConfigCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the outbound caller ID name, number, and outbound whisper flow for a specified
 *    queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueOutboundCallerConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueOutboundCallerConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateQueueOutboundCallerConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQueueOutboundCallerConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueOutboundCallerConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateQueueOutboundCallerConfigCommand extends $Command<UpdateQueueOutboundCallerConfigCommandInput, UpdateQueueOutboundCallerConfigCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateQueueOutboundCallerConfigCommandInput;
    constructor(input: UpdateQueueOutboundCallerConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateQueueOutboundCallerConfigCommandInput, UpdateQueueOutboundCallerConfigCommandOutput>;
    private serialize;
    private deserialize;
}
