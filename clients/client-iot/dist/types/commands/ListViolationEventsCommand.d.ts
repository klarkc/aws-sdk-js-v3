import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListViolationEventsRequest, ListViolationEventsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListViolationEventsCommandInput extends ListViolationEventsRequest {
}
export interface ListViolationEventsCommandOutput extends ListViolationEventsResponse, __MetadataBearer {
}
/**
 * <p>Lists the Device Defender security profile violations discovered during the given time period.
 *       You can use filters to limit the results to those alerts issued for a particular security profile,
 *       behavior, or thing (device).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListViolationEventsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListViolationEventsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListViolationEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListViolationEventsCommandInput} for command's `input` shape.
 * @see {@link ListViolationEventsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListViolationEventsCommand extends $Command<ListViolationEventsCommandInput, ListViolationEventsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListViolationEventsCommandInput;
    constructor(input: ListViolationEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListViolationEventsCommandInput, ListViolationEventsCommandOutput>;
    private serialize;
    private deserialize;
}
