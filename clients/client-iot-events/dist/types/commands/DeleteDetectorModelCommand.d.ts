import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DeleteDetectorModelRequest, DeleteDetectorModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDetectorModelCommandInput extends DeleteDetectorModelRequest {
}
export interface DeleteDetectorModelCommandOutput extends DeleteDetectorModelResponse, __MetadataBearer {
}
/**
 * <p>Deletes a detector model. Any active instances of the detector model are also
 *       deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DeleteDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DeleteDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DeleteDetectorModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDetectorModelCommandInput} for command's `input` shape.
 * @see {@link DeleteDetectorModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDetectorModelCommand extends $Command<DeleteDetectorModelCommandInput, DeleteDetectorModelCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: DeleteDetectorModelCommandInput;
    constructor(input: DeleteDetectorModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDetectorModelCommandInput, DeleteDetectorModelCommandOutput>;
    private serialize;
    private deserialize;
}
