import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { PutInsightSelectorsRequest, PutInsightSelectorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutInsightSelectorsCommandInput extends PutInsightSelectorsRequest {
}
export interface PutInsightSelectorsCommandOutput extends PutInsightSelectorsResponse, __MetadataBearer {
}
/**
 * <p>Lets you enable Insights event logging by specifying the Insights
 *          selectors that you want to enable on an existing trail. You also use
 *          <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types.
 *          In this release, only <code>ApiCallRateInsight</code> is supported as an Insights selector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, PutInsightSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, PutInsightSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new PutInsightSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInsightSelectorsCommandInput} for command's `input` shape.
 * @see {@link PutInsightSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutInsightSelectorsCommand extends $Command<PutInsightSelectorsCommandInput, PutInsightSelectorsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: PutInsightSelectorsCommandInput;
    constructor(input: PutInsightSelectorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutInsightSelectorsCommandInput, PutInsightSelectorsCommandOutput>;
    private serialize;
    private deserialize;
}
