import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { GetRecommendationsRequest, GetRecommendationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRecommendationsCommandInput extends GetRecommendationsRequest {
}
export interface GetRecommendationsCommandOutput extends GetRecommendationsResponse, __MetadataBearer {
}
/**
 * <p>
 *             Returns a list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html">
 *                <code>Recommendation</code>
 *             </a>
 *             objects that contain recommendations for a profiling group for a given time period. A list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html">
 *                <code>Anomaly</code>
 *             </a>
 *             objects that contains details about anomalies detected in the profiling group for the same time period is also
 *             returned.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetRecommendationsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetRecommendationsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRecommendationsCommand extends $Command<GetRecommendationsCommandInput, GetRecommendationsCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: GetRecommendationsCommandInput;
    constructor(input: GetRecommendationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRecommendationsCommandInput, GetRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
