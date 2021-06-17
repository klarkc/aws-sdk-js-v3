import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetContextKeysForPolicyResponse, GetContextKeysForPrincipalPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContextKeysForPrincipalPolicyCommandInput extends GetContextKeysForPrincipalPolicyRequest {
}
export interface GetContextKeysForPrincipalPolicyCommandOutput extends GetContextKeysForPolicyResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of all of the context keys referenced in all the IAM policies that are
 *             attached to the specified IAM entity. The entity can be an IAM user, group, or role.
 *             If you specify a user, then the request also includes all of the policies attached to
 *             groups that the user is a member of.</p>
 *         <p>You can optionally include a list of one or more additional policies, specified as
 *             strings. If you want to include <i>only</i> a list of policies by string,
 *             use <a>GetContextKeysForCustomPolicy</a> instead.</p>
 *         <p>
 *             <b>Note:</b> This operation discloses information about the
 *             permissions granted to other users. If you do not want users to see other user's
 *             permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p>
 *         <p>Context keys are variables maintained by AWS and its services that provide details
 *             about the context of an API query request. Context keys can be evaluated by testing
 *             against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetContextKeysForPrincipalPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetContextKeysForPrincipalPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetContextKeysForPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContextKeysForPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContextKeysForPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContextKeysForPrincipalPolicyCommand extends $Command<GetContextKeysForPrincipalPolicyCommandInput, GetContextKeysForPrincipalPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetContextKeysForPrincipalPolicyCommandInput;
    constructor(input: GetContextKeysForPrincipalPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContextKeysForPrincipalPolicyCommandInput, GetContextKeysForPrincipalPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
