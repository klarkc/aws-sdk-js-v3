import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetTrafficPolicyInstanceRequest, GetTrafficPolicyInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTrafficPolicyInstanceCommandInput extends GetTrafficPolicyInstanceRequest {
}
export interface GetTrafficPolicyInstanceCommandOutput extends GetTrafficPolicyInstanceResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specified traffic policy instance.</p>
 * 		       <note>
 * 			         <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request,
 * 				there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For
 * 				more information, see the <code>State</code> response element.</p>
 * 		       </note>
 * 		       <note>
 * 			         <p>In the Route 53 console, traffic policy instances are known as policy records.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTrafficPolicyInstanceCommand extends $Command<GetTrafficPolicyInstanceCommandInput, GetTrafficPolicyInstanceCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetTrafficPolicyInstanceCommandInput;
    constructor(input: GetTrafficPolicyInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTrafficPolicyInstanceCommandInput, GetTrafficPolicyInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
