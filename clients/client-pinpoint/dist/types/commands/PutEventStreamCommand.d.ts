import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { PutEventStreamRequest, PutEventStreamResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutEventStreamCommandInput extends PutEventStreamRequest {
}
export interface PutEventStreamCommandOutput extends PutEventStreamResponse, __MetadataBearer {
}
/**
 * <p>Creates a new event stream for an application or updates the settings of an existing event stream for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PutEventStreamCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PutEventStreamCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new PutEventStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEventStreamCommandInput} for command's `input` shape.
 * @see {@link PutEventStreamCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutEventStreamCommand extends $Command<PutEventStreamCommandInput, PutEventStreamCommandOutput, PinpointClientResolvedConfig> {
    readonly input: PutEventStreamCommandInput;
    constructor(input: PutEventStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEventStreamCommandInput, PutEventStreamCommandOutput>;
    private serialize;
    private deserialize;
}
