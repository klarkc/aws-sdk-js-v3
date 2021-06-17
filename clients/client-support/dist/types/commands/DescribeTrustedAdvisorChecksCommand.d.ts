import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeTrustedAdvisorChecksRequest, DescribeTrustedAdvisorChecksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTrustedAdvisorChecksCommandInput extends DescribeTrustedAdvisorChecksRequest {
}
export interface DescribeTrustedAdvisorChecksCommandOutput extends DescribeTrustedAdvisorChecksResponse, __MetadataBearer {
}
/**
 * <p>Returns information about all available AWS Trusted Advisor checks, including the name, ID,
 *             category, description, and metadata. You must specify a language code. The AWS Support API
 *             currently supports English ("en") and Japanese ("ja"). The response contains a <a>TrustedAdvisorCheckDescription</a> object for each check. You must set the
 *             AWS Region to us-east-1.</p>
 *
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
 *                         <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *                <li>
 *                     <p>The names and descriptions for Trusted Advisor checks are subject to change. We recommend
 *                         that you specify the check ID in your code to uniquely identify a check.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeTrustedAdvisorChecksCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorChecksCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeTrustedAdvisorChecksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrustedAdvisorChecksCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorChecksCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTrustedAdvisorChecksCommand extends $Command<DescribeTrustedAdvisorChecksCommandInput, DescribeTrustedAdvisorChecksCommandOutput, SupportClientResolvedConfig> {
    readonly input: DescribeTrustedAdvisorChecksCommandInput;
    constructor(input: DescribeTrustedAdvisorChecksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrustedAdvisorChecksCommandInput, DescribeTrustedAdvisorChecksCommandOutput>;
    private serialize;
    private deserialize;
}
