import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerServiceMetricDataRequest, GetContainerServiceMetricDataResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContainerServiceMetricDataCommandInput extends GetContainerServiceMetricDataRequest {
}
export interface GetContainerServiceMetricDataCommandOutput extends GetContainerServiceMetricDataResult, __MetadataBearer {
}
/**
 * <p>Returns the data points of a specific metric of your Amazon Lightsail container
 *       service.</p>
 *
 *          <p>Metrics report the utilization of your resources. Monitor and collect metric data
 *       regularly to maintain the reliability, availability, and performance of your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServiceMetricDataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServiceMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServiceMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServiceMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetContainerServiceMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContainerServiceMetricDataCommand extends $Command<GetContainerServiceMetricDataCommandInput, GetContainerServiceMetricDataCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetContainerServiceMetricDataCommandInput;
    constructor(input: GetContainerServiceMetricDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContainerServiceMetricDataCommandInput, GetContainerServiceMetricDataCommandOutput>;
    private serialize;
    private deserialize;
}
