import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { PutComponentPolicyRequest, PutComponentPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutComponentPolicyCommandInput extends PutComponentPolicyRequest {
}
export interface PutComponentPolicyCommandOutput extends PutComponentPolicyResponse, __MetadataBearer {
}
/**
 * <p> Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API
 *         <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to
 *       all principals with whom the resource is shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, PutComponentPolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, PutComponentPolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new PutComponentPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutComponentPolicyCommandInput} for command's `input` shape.
 * @see {@link PutComponentPolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutComponentPolicyCommand extends $Command<PutComponentPolicyCommandInput, PutComponentPolicyCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: PutComponentPolicyCommandInput;
    constructor(input: PutComponentPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutComponentPolicyCommandInput, PutComponentPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
