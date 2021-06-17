import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { GetPermissionPolicyRequest, GetPermissionPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPermissionPolicyCommandInput extends GetPermissionPolicyRequest {
}
export interface GetPermissionPolicyCommandOutput extends GetPermissionPolicyResponse, __MetadataBearer {
}
/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns the IAM policy attached to the RuleGroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetPermissionPolicyCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetPermissionPolicyCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new GetPermissionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPermissionPolicyCommand extends $Command<GetPermissionPolicyCommandInput, GetPermissionPolicyCommandOutput, WAFClientResolvedConfig> {
    readonly input: GetPermissionPolicyCommandInput;
    constructor(input: GetPermissionPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPermissionPolicyCommandInput, GetPermissionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
