import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListVPCAssociationAuthorizationsRequest, ListVPCAssociationAuthorizationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListVPCAssociationAuthorizationsCommandInput extends ListVPCAssociationAuthorizationsRequest {
}
export interface ListVPCAssociationAuthorizationsCommandOutput extends ListVPCAssociationAuthorizationsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of the VPCs that were created by other accounts and that can be associated with a
 * 			specified hosted zone because you've submitted one or more <code>CreateVPCAssociationAuthorization</code> requests. </p>
 * 		       <p>The response includes a <code>VPCs</code> element with a <code>VPC</code> child element for each VPC
 * 			that can be associated with the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListVPCAssociationAuthorizationsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListVPCAssociationAuthorizationsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListVPCAssociationAuthorizationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVPCAssociationAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link ListVPCAssociationAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVPCAssociationAuthorizationsCommand extends $Command<ListVPCAssociationAuthorizationsCommandInput, ListVPCAssociationAuthorizationsCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListVPCAssociationAuthorizationsCommandInput;
    constructor(input: ListVPCAssociationAuthorizationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVPCAssociationAuthorizationsCommandInput, ListVPCAssociationAuthorizationsCommandOutput>;
    private serialize;
    private deserialize;
}
