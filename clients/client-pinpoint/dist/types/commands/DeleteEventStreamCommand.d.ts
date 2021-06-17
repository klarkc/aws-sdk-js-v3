import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteEventStreamRequest, DeleteEventStreamResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteEventStreamCommandInput extends DeleteEventStreamRequest {
}
export interface DeleteEventStreamCommandOutput extends DeleteEventStreamResponse, __MetadataBearer {
}
/**
 * <p>Deletes the event stream for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteEventStreamCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteEventStreamCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteEventStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteEventStreamCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteEventStreamCommand extends $Command<DeleteEventStreamCommandInput, DeleteEventStreamCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteEventStreamCommandInput;
    constructor(input: DeleteEventStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventStreamCommandInput, DeleteEventStreamCommandOutput>;
    private serialize;
    private deserialize;
}
