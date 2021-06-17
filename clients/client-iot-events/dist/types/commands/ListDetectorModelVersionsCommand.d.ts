import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListDetectorModelVersionsRequest, ListDetectorModelVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDetectorModelVersionsCommandInput extends ListDetectorModelVersionsRequest {
}
export interface ListDetectorModelVersionsCommandOutput extends ListDetectorModelVersionsResponse, __MetadataBearer {
}
/**
 * <p>Lists all the versions of a detector model. Only the metadata associated with each
 *       detector model version is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListDetectorModelVersionsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListDetectorModelVersionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListDetectorModelVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDetectorModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDetectorModelVersionsCommand extends $Command<ListDetectorModelVersionsCommandInput, ListDetectorModelVersionsCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: ListDetectorModelVersionsCommandInput;
    constructor(input: ListDetectorModelVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDetectorModelVersionsCommandInput, ListDetectorModelVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
