import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetEventStreamRequest, GetEventStreamResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEventStreamCommandInput extends GetEventStreamRequest {
}
export interface GetEventStreamCommandOutput extends GetEventStreamResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the event stream settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEventStreamCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEventStreamCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetEventStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventStreamCommandInput} for command's `input` shape.
 * @see {@link GetEventStreamCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEventStreamCommand extends $Command<GetEventStreamCommandInput, GetEventStreamCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetEventStreamCommandInput;
    constructor(input: GetEventStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEventStreamCommandInput, GetEventStreamCommandOutput>;
    private serialize;
    private deserialize;
}
