import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateDimensionRequest, CreateDimensionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDimensionCommandInput extends CreateDimensionRequest {
}
export interface CreateDimensionCommandOutput extends CreateDimensionResponse, __MetadataBearer {
}
/**
 * <p>Create a dimension that you can use to limit the scope of a metric used in a security profile for AWS IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateDimensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDimensionCommandInput} for command's `input` shape.
 * @see {@link CreateDimensionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDimensionCommand extends $Command<CreateDimensionCommandInput, CreateDimensionCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateDimensionCommandInput;
    constructor(input: CreateDimensionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDimensionCommandInput, CreateDimensionCommandOutput>;
    private serialize;
    private deserialize;
}
