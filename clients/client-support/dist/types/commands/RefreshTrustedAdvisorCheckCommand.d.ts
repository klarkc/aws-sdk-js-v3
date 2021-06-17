import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { RefreshTrustedAdvisorCheckRequest, RefreshTrustedAdvisorCheckResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RefreshTrustedAdvisorCheckCommandInput extends RefreshTrustedAdvisorCheckRequest {
}
export interface RefreshTrustedAdvisorCheckCommandOutput extends RefreshTrustedAdvisorCheckResponse, __MetadataBearer {
}
/**
 * <p>Refreshes the AWS Trusted Advisor check that you specify using the check ID. You can get the
 *             check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
 *             operation.</p>
 *         <note>
 *             <p>Some checks are refreshed automatically. If you call the
 *                     <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see
 *                 the <code>InvalidParameterValue</code> error.</p>
 *         </note>
 *         <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a>
 *             object.</p>
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
 * import { SupportClient, RefreshTrustedAdvisorCheckCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, RefreshTrustedAdvisorCheckCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new RefreshTrustedAdvisorCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RefreshTrustedAdvisorCheckCommandInput} for command's `input` shape.
 * @see {@link RefreshTrustedAdvisorCheckCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RefreshTrustedAdvisorCheckCommand extends $Command<RefreshTrustedAdvisorCheckCommandInput, RefreshTrustedAdvisorCheckCommandOutput, SupportClientResolvedConfig> {
    readonly input: RefreshTrustedAdvisorCheckCommandInput;
    constructor(input: RefreshTrustedAdvisorCheckCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RefreshTrustedAdvisorCheckCommandInput, RefreshTrustedAdvisorCheckCommandOutput>;
    private serialize;
    private deserialize;
}
