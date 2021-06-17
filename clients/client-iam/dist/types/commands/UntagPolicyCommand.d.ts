import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagPolicyRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagPolicyCommandInput extends UntagPolicyRequest {
}
export interface UntagPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagPolicyCommandInput} for command's `input` shape.
 * @see {@link UntagPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagPolicyCommand extends $Command<UntagPolicyCommandInput, UntagPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: UntagPolicyCommandInput;
    constructor(input: UntagPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagPolicyCommandInput, UntagPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
