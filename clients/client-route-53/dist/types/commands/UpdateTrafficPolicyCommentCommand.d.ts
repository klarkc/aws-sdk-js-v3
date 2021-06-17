import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateTrafficPolicyCommentRequest, UpdateTrafficPolicyCommentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTrafficPolicyCommentCommandInput extends UpdateTrafficPolicyCommentRequest {
}
export interface UpdateTrafficPolicyCommentCommandOutput extends UpdateTrafficPolicyCommentResponse, __MetadataBearer {
}
/**
 * <p>Updates the comment for a specified traffic policy version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateTrafficPolicyCommentCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateTrafficPolicyCommentCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateTrafficPolicyCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrafficPolicyCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficPolicyCommentCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTrafficPolicyCommentCommand extends $Command<UpdateTrafficPolicyCommentCommandInput, UpdateTrafficPolicyCommentCommandOutput, Route53ClientResolvedConfig> {
    readonly input: UpdateTrafficPolicyCommentCommandInput;
    constructor(input: UpdateTrafficPolicyCommentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrafficPolicyCommentCommandInput, UpdateTrafficPolicyCommentCommandOutput>;
    private serialize;
    private deserialize;
}
