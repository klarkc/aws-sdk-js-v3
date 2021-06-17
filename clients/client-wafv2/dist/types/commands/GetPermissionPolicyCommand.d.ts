import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { GetPermissionPolicyRequest, GetPermissionPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPermissionPolicyCommandInput extends GetPermissionPolicyRequest {
}
export interface GetPermissionPolicyCommandOutput extends GetPermissionPolicyResponse, __MetadataBearer {
}
/**
 * <p>Returns the IAM policy that is attached to the specified rule group.</p>
 *         <p>You must be the owner of the rule group to perform this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetPermissionPolicyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetPermissionPolicyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetPermissionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPermissionPolicyCommand extends $Command<GetPermissionPolicyCommandInput, GetPermissionPolicyCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: GetPermissionPolicyCommandInput;
    constructor(input: GetPermissionPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPermissionPolicyCommandInput, GetPermissionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
