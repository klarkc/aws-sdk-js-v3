import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteClientVpnRouteRequest, DeleteClientVpnRouteResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteClientVpnRouteCommandInput extends DeleteClientVpnRouteRequest {
}
export interface DeleteClientVpnRouteCommandOutput extends DeleteClientVpnRouteResult, __MetadataBearer {
}
/**
 * <p>Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using
 * 			the <b>CreateClientVpnRoute</b> action. You cannot delete routes that were
 * 			automatically added when associating a subnet. To remove routes that have been automatically added,
 * 			disassociate the target subnet from the Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteClientVpnRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteClientVpnRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteClientVpnRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClientVpnRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteClientVpnRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteClientVpnRouteCommand extends $Command<DeleteClientVpnRouteCommandInput, DeleteClientVpnRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteClientVpnRouteCommandInput;
    constructor(input: DeleteClientVpnRouteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClientVpnRouteCommandInput, DeleteClientVpnRouteCommandOutput>;
    private serialize;
    private deserialize;
}
