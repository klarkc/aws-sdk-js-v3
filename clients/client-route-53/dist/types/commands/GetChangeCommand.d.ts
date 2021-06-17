import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetChangeRequest, GetChangeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetChangeCommandInput extends GetChangeRequest {
}
export interface GetChangeCommandOutput extends GetChangeResponse, __MetadataBearer {
}
/**
 * <p>Returns the current status of a change batch request. The status is one of the
 * 			following values:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>PENDING</code> indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers.
 * 					This is the initial status of all change batch requests.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>INSYNC</code> indicates that the changes have propagated to all Route 53 DNS servers. </p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetChangeCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetChangeCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChangeCommandInput} for command's `input` shape.
 * @see {@link GetChangeCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetChangeCommand extends $Command<GetChangeCommandInput, GetChangeCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetChangeCommandInput;
    constructor(input: GetChangeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetChangeCommandInput, GetChangeCommandOutput>;
    private serialize;
    private deserialize;
}
