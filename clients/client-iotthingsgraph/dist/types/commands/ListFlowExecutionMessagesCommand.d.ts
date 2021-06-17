import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { ListFlowExecutionMessagesRequest, ListFlowExecutionMessagesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFlowExecutionMessagesCommandInput extends ListFlowExecutionMessagesRequest {
}
export interface ListFlowExecutionMessagesCommandOutput extends ListFlowExecutionMessagesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of objects that contain information about events in a flow execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, ListFlowExecutionMessagesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, ListFlowExecutionMessagesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new ListFlowExecutionMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFlowExecutionMessagesCommandInput} for command's `input` shape.
 * @see {@link ListFlowExecutionMessagesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFlowExecutionMessagesCommand extends $Command<ListFlowExecutionMessagesCommandInput, ListFlowExecutionMessagesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: ListFlowExecutionMessagesCommandInput;
    constructor(input: ListFlowExecutionMessagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFlowExecutionMessagesCommandInput, ListFlowExecutionMessagesCommandOutput>;
    private serialize;
    private deserialize;
}
