import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetMetricWidgetImageInput, GetMetricWidgetImageOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMetricWidgetImageCommandInput extends GetMetricWidgetImageInput {
}
export interface GetMetricWidgetImageCommandOutput extends GetMetricWidgetImageOutput, __MetadataBearer {
}
/**
 * <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of
 * 			one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this
 * 			image into your services and products, such as wiki pages, reports, and documents.
 * 			You could also retrieve images regularly, such as every minute, and create your own
 * 			custom live dashboard.</p>
 *
 * 		       <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math
 * 		and horizontal and vertical annotations.</p>
 *
 * 		       <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>As many as 100 metrics in the graph.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Up to 100 KB uncompressed payload.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricWidgetImageCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricWidgetImageCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetMetricWidgetImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricWidgetImageCommandInput} for command's `input` shape.
 * @see {@link GetMetricWidgetImageCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMetricWidgetImageCommand extends $Command<GetMetricWidgetImageCommandInput, GetMetricWidgetImageCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: GetMetricWidgetImageCommandInput;
    constructor(input: GetMetricWidgetImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMetricWidgetImageCommandInput, GetMetricWidgetImageCommandOutput>;
    private serialize;
    private deserialize;
}
