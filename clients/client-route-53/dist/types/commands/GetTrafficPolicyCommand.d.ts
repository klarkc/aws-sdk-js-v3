import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetTrafficPolicyRequest, GetTrafficPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTrafficPolicyCommandInput extends GetTrafficPolicyRequest {
}
export interface GetTrafficPolicyCommandOutput extends GetTrafficPolicyResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specific traffic policy version.</p>
 * 		       <p>For information about how of deleting a traffic policy affects the response from <code>GetTrafficPolicy</code>, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTrafficPolicyCommand extends $Command<GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetTrafficPolicyCommandInput;
    constructor(input: GetTrafficPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
