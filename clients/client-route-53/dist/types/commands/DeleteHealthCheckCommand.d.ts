import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteHealthCheckRequest, DeleteHealthCheckResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteHealthCheckCommandInput extends DeleteHealthCheckRequest {
}
export interface DeleteHealthCheckCommandOutput extends DeleteHealthCheckResponse, __MetadataBearer {
}
/**
 * <p>Deletes a health check.</p>
 * 		       <important>
 * 			         <p>Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more
 * 				resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status
 * 				of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover
 * 				configuration. For more information, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html">Replacing and Deleting Health Checks</a>
 * 				in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       </important>
 *
 * 		       <p>If you're using AWS Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance,
 * 			you can't use the Route 53 <code>DeleteHealthCheck</code> command to delete the health check. The health check is deleted
 * 			automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted
 * 			from Route 53. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHealthCheckCommandInput} for command's `input` shape.
 * @see {@link DeleteHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteHealthCheckCommand extends $Command<DeleteHealthCheckCommandInput, DeleteHealthCheckCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteHealthCheckCommandInput;
    constructor(input: DeleteHealthCheckCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHealthCheckCommandInput, DeleteHealthCheckCommandOutput>;
    private serialize;
    private deserialize;
}
