import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { PutEventsRequest, PutEventsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutEventsCommandInput extends PutEventsRequest {
}
export interface PutEventsCommandOutput extends PutEventsResponse, __MetadataBearer {
}
/**
 * <p>Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PutEventsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PutEventsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new PutEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEventsCommandInput} for command's `input` shape.
 * @see {@link PutEventsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutEventsCommand extends $Command<PutEventsCommandInput, PutEventsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: PutEventsCommandInput;
    constructor(input: PutEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEventsCommandInput, PutEventsCommandOutput>;
    private serialize;
    private deserialize;
}
