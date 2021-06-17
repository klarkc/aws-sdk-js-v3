import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { ListDetectorsRequest, ListDetectorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDetectorsCommandInput extends ListDetectorsRequest {
}
export interface ListDetectorsCommandOutput extends ListDetectorsResponse, __MetadataBearer {
}
/**
 * <p>Lists detectors (the instances of a detector model).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, ListDetectorsCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, ListDetectorsCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new ListDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDetectorsCommand extends $Command<ListDetectorsCommandInput, ListDetectorsCommandOutput, IoTEventsDataClientResolvedConfig> {
    readonly input: ListDetectorsCommandInput;
    constructor(input: ListDetectorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDetectorsCommandInput, ListDetectorsCommandOutput>;
    private serialize;
    private deserialize;
}
