import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListHostedZonesByVPCRequest, ListHostedZonesByVPCResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHostedZonesByVPCCommandInput extends ListHostedZonesByVPCRequest {
}
export interface ListHostedZonesByVPCCommandOutput extends ListHostedZonesByVPCResponse, __MetadataBearer {
}
/**
 * <p>Lists all the private hosted zones that a specified VPC is associated with, regardless of which AWS account or AWS service owns the
 * 			hosted zones. The <code>HostedZoneOwner</code> structure in the response contains one of the following values:</p>
 * 		       <ul>
 *             <li>
 *                <p>An <code>OwningAccount</code> element, which contains the account number of either the current AWS account or
 * 				another AWS account. Some services, such as AWS Cloud Map, create hosted zones using the current account. </p>
 * 			         </li>
 *             <li>
 *                <p>An <code>OwningService</code> element, which identifies the AWS service that created and owns the hosted zone.
 * 				For example, if a hosted zone was created by Amazon Elastic File System (Amazon EFS), the value of <code>Owner</code> is
 * 				<code>efs.amazonaws.com</code>. </p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesByVPCCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesByVPCCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHostedZonesByVPCCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostedZonesByVPCCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesByVPCCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHostedZonesByVPCCommand extends $Command<ListHostedZonesByVPCCommandInput, ListHostedZonesByVPCCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListHostedZonesByVPCCommandInput;
    constructor(input: ListHostedZonesByVPCCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHostedZonesByVPCCommandInput, ListHostedZonesByVPCCommandOutput>;
    private serialize;
    private deserialize;
}
