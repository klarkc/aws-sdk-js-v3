import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateCustomMetricRequest, UpdateCustomMetricResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCustomMetricCommandInput extends UpdateCustomMetricRequest {
}
export interface UpdateCustomMetricCommandOutput extends UpdateCustomMetricResponse, __MetadataBearer {
}
/**
 * <p>Updates a
 *       Device Defender detect custom metric. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateCustomMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomMetricCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCustomMetricCommand extends $Command<UpdateCustomMetricCommandInput, UpdateCustomMetricCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateCustomMetricCommandInput;
    constructor(input: UpdateCustomMetricCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCustomMetricCommandInput, UpdateCustomMetricCommandOutput>;
    private serialize;
    private deserialize;
}
