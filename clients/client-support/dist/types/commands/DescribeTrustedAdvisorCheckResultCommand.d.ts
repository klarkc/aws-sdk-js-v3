import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeTrustedAdvisorCheckResultRequest, DescribeTrustedAdvisorCheckResultResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTrustedAdvisorCheckResultCommandInput extends DescribeTrustedAdvisorCheckResultRequest {
}
export interface DescribeTrustedAdvisorCheckResultCommandOutput extends DescribeTrustedAdvisorCheckResultResponse, __MetadataBearer {
}
/**
 * <p>Returns the results of the AWS Trusted Advisor check that has the specified check ID. You
 *             can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
 *             operation.</p>
 *         <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which
 *             contains these three objects:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>TrustedAdvisorCategorySpecificSummary</a>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>TrustedAdvisorResourceDetail</a>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>TrustedAdvisorResourcesSummary</a>
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>In addition, the response contains these fields:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>status</b> - The alert status of the check
 *                     can be <code>ok</code> (green), <code>warning</code> (yellow),
 *                         <code>error</code> (red), or <code>not_available</code>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>timestamp</b> - The time of the last refresh
 *                     of the check.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>checkId</b> - The unique identifier for the
 *                     check.</p>
 *             </li>
 *          </ul>
 *
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeTrustedAdvisorCheckResultCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorCheckResultCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeTrustedAdvisorCheckResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrustedAdvisorCheckResultCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorCheckResultCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTrustedAdvisorCheckResultCommand extends $Command<DescribeTrustedAdvisorCheckResultCommandInput, DescribeTrustedAdvisorCheckResultCommandOutput, SupportClientResolvedConfig> {
    readonly input: DescribeTrustedAdvisorCheckResultCommandInput;
    constructor(input: DescribeTrustedAdvisorCheckResultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrustedAdvisorCheckResultCommandInput, DescribeTrustedAdvisorCheckResultCommandOutput>;
    private serialize;
    private deserialize;
}
