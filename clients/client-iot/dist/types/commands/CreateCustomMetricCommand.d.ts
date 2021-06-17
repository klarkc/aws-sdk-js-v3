import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateCustomMetricRequest, CreateCustomMetricResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCustomMetricCommandInput extends CreateCustomMetricRequest {
}
export interface CreateCustomMetricCommandOutput extends CreateCustomMetricResponse, __MetadataBearer {
}
/**
 * <p> Use this API to define a
 *       Custom
 *       Metric
 *       published by your devices to Device Defender. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateCustomMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomMetricCommandInput} for command's `input` shape.
 * @see {@link CreateCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCustomMetricCommand extends $Command<CreateCustomMetricCommandInput, CreateCustomMetricCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateCustomMetricCommandInput;
    constructor(input: CreateCustomMetricCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomMetricCommandInput, CreateCustomMetricCommandOutput>;
    private serialize;
    private deserialize;
}
