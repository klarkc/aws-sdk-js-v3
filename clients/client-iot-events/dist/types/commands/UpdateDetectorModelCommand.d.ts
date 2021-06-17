import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { UpdateDetectorModelRequest, UpdateDetectorModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDetectorModelCommandInput extends UpdateDetectorModelRequest {
}
export interface UpdateDetectorModelCommandOutput extends UpdateDetectorModelResponse, __MetadataBearer {
}
/**
 * <p>Updates a detector model. Detectors (instances) spawned by the previous version are
 *       deleted and then re-created as new inputs arrive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, UpdateDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, UpdateDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new UpdateDetectorModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDetectorModelCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDetectorModelCommand extends $Command<UpdateDetectorModelCommandInput, UpdateDetectorModelCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: UpdateDetectorModelCommandInput;
    constructor(input: UpdateDetectorModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDetectorModelCommandInput, UpdateDetectorModelCommandOutput>;
    private serialize;
    private deserialize;
}
