import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetContextKeysForCustomPolicyRequest, GetContextKeysForPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContextKeysForCustomPolicyCommandInput extends GetContextKeysForCustomPolicyRequest {
}
export interface GetContextKeysForCustomPolicyCommandOutput extends GetContextKeysForPolicyResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of all of the context keys referenced in the input policies. The policies
 *             are supplied as a list of one or more strings. To get the context keys from policies
 *             associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
 *         <p>Context keys are variables maintained by AWS and its services that provide details
 *             about the context of an API query request. Context keys can be evaluated by testing
 *             against a value specified in an IAM policy. Use
 *                 <code>GetContextKeysForCustomPolicy</code> to understand what key names and values
 *             you must supply when you call <a>SimulateCustomPolicy</a>. Note that all
 *             parameters are shown in unencoded form here for clarity but must be URL encoded to be
 *             included as a part of a real HTML request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetContextKeysForCustomPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetContextKeysForCustomPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetContextKeysForCustomPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContextKeysForCustomPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContextKeysForCustomPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContextKeysForCustomPolicyCommand extends $Command<GetContextKeysForCustomPolicyCommandInput, GetContextKeysForCustomPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetContextKeysForCustomPolicyCommandInput;
    constructor(input: GetContextKeysForCustomPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContextKeysForCustomPolicyCommandInput, GetContextKeysForCustomPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
