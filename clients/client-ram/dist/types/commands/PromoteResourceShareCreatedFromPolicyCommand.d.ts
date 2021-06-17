import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { PromoteResourceShareCreatedFromPolicyRequest, PromoteResourceShareCreatedFromPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PromoteResourceShareCreatedFromPolicyCommandInput extends PromoteResourceShareCreatedFromPolicyRequest {
}
export interface PromoteResourceShareCreatedFromPolicyCommandOutput extends PromoteResourceShareCreatedFromPolicyResponse, __MetadataBearer {
}
/**
 * <p>Resource shares that were created by attaching a policy to a resource are visible only to
 * 			the resource share owner, and the resource share cannot be modified in AWS RAM.</p>
 *
 *     	    <p>Use this API action to promote the resource share. When you promote the resource share,
 * 			it becomes:</p>
 *     	    <ul>
 *             <li>
 *     			        <p>Visible to all principals that it is shared with.</p>
 *     		      </li>
 *             <li>
 *     			        <p>Modifiable in AWS RAM.</p>
 *     		      </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, PromoteResourceShareCreatedFromPolicyCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, PromoteResourceShareCreatedFromPolicyCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new PromoteResourceShareCreatedFromPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PromoteResourceShareCreatedFromPolicyCommandInput} for command's `input` shape.
 * @see {@link PromoteResourceShareCreatedFromPolicyCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PromoteResourceShareCreatedFromPolicyCommand extends $Command<PromoteResourceShareCreatedFromPolicyCommandInput, PromoteResourceShareCreatedFromPolicyCommandOutput, RAMClientResolvedConfig> {
    readonly input: PromoteResourceShareCreatedFromPolicyCommandInput;
    constructor(input: PromoteResourceShareCreatedFromPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PromoteResourceShareCreatedFromPolicyCommandInput, PromoteResourceShareCreatedFromPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
