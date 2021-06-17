import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTrafficPolicyInstancesByPolicyRequest, ListTrafficPolicyInstancesByPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTrafficPolicyInstancesByPolicyCommandInput extends ListTrafficPolicyInstancesByPolicyRequest {
}
export interface ListTrafficPolicyInstancesByPolicyCommandOutput extends ListTrafficPolicyInstancesByPolicyResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the traffic policy instances that you created by using a specify traffic policy version.</p>
 * 		       <note>
 * 			         <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request,
 * 				there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For
 * 				more information, see the <code>State</code> response element.</p>
 * 		       </note>
 * 		       <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the
 * 			<code>MaxItems</code> parameter to list them in groups of up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyInstancesByPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyInstancesByPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTrafficPolicyInstancesByPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPolicyInstancesByPolicyCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyInstancesByPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTrafficPolicyInstancesByPolicyCommand extends $Command<ListTrafficPolicyInstancesByPolicyCommandInput, ListTrafficPolicyInstancesByPolicyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListTrafficPolicyInstancesByPolicyCommandInput;
    constructor(input: ListTrafficPolicyInstancesByPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrafficPolicyInstancesByPolicyCommandInput, ListTrafficPolicyInstancesByPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
