import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTrafficPoliciesRequest, ListTrafficPoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTrafficPoliciesCommandInput extends ListTrafficPoliciesRequest {
}
export interface ListTrafficPoliciesCommandOutput extends ListTrafficPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the latest version for every traffic policy that is associated with the current AWS account.
 * 			Policies are listed in the order that they were created in. </p>
 *
 * 		       <p>For information about how of deleting a traffic policy affects the response from <code>ListTrafficPolicies</code>, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>.
 *
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPoliciesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPoliciesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTrafficPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPoliciesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTrafficPoliciesCommand extends $Command<ListTrafficPoliciesCommandInput, ListTrafficPoliciesCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListTrafficPoliciesCommandInput;
    constructor(input: ListTrafficPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrafficPoliciesCommandInput, ListTrafficPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
