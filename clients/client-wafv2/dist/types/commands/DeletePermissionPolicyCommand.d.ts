import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { DeletePermissionPolicyRequest, DeletePermissionPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePermissionPolicyCommandInput extends DeletePermissionPolicyRequest {
}
export interface DeletePermissionPolicyCommandOutput extends DeletePermissionPolicyResponse, __MetadataBearer {
}
/**
 * <p>Permanently deletes an IAM policy from the specified rule group.</p>
 *         <p>You must be the owner of the rule group to perform this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeletePermissionPolicyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeletePermissionPolicyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeletePermissionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePermissionPolicyCommand extends $Command<DeletePermissionPolicyCommandInput, DeletePermissionPolicyCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: DeletePermissionPolicyCommandInput;
    constructor(input: DeletePermissionPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePermissionPolicyCommandInput, DeletePermissionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
