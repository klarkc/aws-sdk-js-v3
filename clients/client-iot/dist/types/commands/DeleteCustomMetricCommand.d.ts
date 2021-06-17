import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteCustomMetricRequest, DeleteCustomMetricResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCustomMetricCommandInput extends DeleteCustomMetricRequest {
}
export interface DeleteCustomMetricCommandOutput extends DeleteCustomMetricResponse, __MetadataBearer {
}
/**
 * <note>
 *             <p>Before you can delete a custom metric, you must first remove the custom metric from all
 *         security profiles it's a part of.
 *         The
 *         security
 *         profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a>
 *         API with <code>metricName</code> set to your custom metric name.</p>
 *          </note>
 *          <p>
 *       Deletes a Device Defender detect custom metric.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteCustomMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomMetricCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCustomMetricCommand extends $Command<DeleteCustomMetricCommandInput, DeleteCustomMetricCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteCustomMetricCommandInput;
    constructor(input: DeleteCustomMetricCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomMetricCommandInput, DeleteCustomMetricCommandOutput>;
    private serialize;
    private deserialize;
}
