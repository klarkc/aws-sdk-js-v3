import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { CreateDetectorModelRequest, CreateDetectorModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDetectorModelCommandInput extends CreateDetectorModelRequest {
}
export interface CreateDetectorModelCommandOutput extends CreateDetectorModelResponse, __MetadataBearer {
}
/**
 * <p>Creates a detector model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, CreateDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, CreateDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new CreateDetectorModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDetectorModelCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDetectorModelCommand extends $Command<CreateDetectorModelCommandInput, CreateDetectorModelCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: CreateDetectorModelCommandInput;
    constructor(input: CreateDetectorModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDetectorModelCommandInput, CreateDetectorModelCommandOutput>;
    private serialize;
    private deserialize;
}
