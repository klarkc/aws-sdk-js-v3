import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListDetectorModelsRequest, ListDetectorModelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDetectorModelsCommandInput extends ListDetectorModelsRequest {
}
export interface ListDetectorModelsCommandOutput extends ListDetectorModelsResponse, __MetadataBearer {
}
/**
 * <p>Lists the detector models you have created. Only the metadata associated with each
 *       detector model is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListDetectorModelsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListDetectorModelsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListDetectorModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDetectorModelsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorModelsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDetectorModelsCommand extends $Command<ListDetectorModelsCommandInput, ListDetectorModelsCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: ListDetectorModelsCommandInput;
    constructor(input: ListDetectorModelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDetectorModelsCommandInput, ListDetectorModelsCommandOutput>;
    private serialize;
    private deserialize;
}
