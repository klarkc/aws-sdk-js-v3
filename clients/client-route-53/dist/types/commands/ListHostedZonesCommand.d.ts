import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListHostedZonesRequest, ListHostedZonesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHostedZonesCommandInput extends ListHostedZonesRequest {
}
export interface ListHostedZonesCommandOutput extends ListHostedZonesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of the public and private hosted zones that are associated with the current AWS account. The response
 * 			includes a <code>HostedZones</code> child element for each hosted zone.</p>
 * 		       <p>Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the
 * 			<code>maxitems</code> parameter to list them in groups of up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHostedZonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostedZonesCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHostedZonesCommand extends $Command<ListHostedZonesCommandInput, ListHostedZonesCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListHostedZonesCommandInput;
    constructor(input: ListHostedZonesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHostedZonesCommandInput, ListHostedZonesCommandOutput>;
    private serialize;
    private deserialize;
}
