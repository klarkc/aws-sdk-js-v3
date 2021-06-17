import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListInputRoutingsRequest, ListInputRoutingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInputRoutingsCommandInput extends ListInputRoutingsRequest {
}
export interface ListInputRoutingsCommandOutput extends ListInputRoutingsResponse, __MetadataBearer {
}
/**
 * <p>
 *       Lists one or more input routings.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListInputRoutingsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListInputRoutingsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListInputRoutingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputRoutingsCommandInput} for command's `input` shape.
 * @see {@link ListInputRoutingsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInputRoutingsCommand extends $Command<ListInputRoutingsCommandInput, ListInputRoutingsCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: ListInputRoutingsCommandInput;
    constructor(input: ListInputRoutingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInputRoutingsCommandInput, ListInputRoutingsCommandOutput>;
    private serialize;
    private deserialize;
}
