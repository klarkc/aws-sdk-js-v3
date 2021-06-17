import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AssociateHostedConnectionRequest, Connection } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateHostedConnectionCommandInput extends AssociateHostedConnectionRequest {
}
export interface AssociateHostedConnectionCommandOutput extends Connection, __MetadataBearer {
}
/**
 * <p>Associates a hosted connection and its virtual interfaces with a link aggregation
 *       group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted
 *       connection with a conflicting VLAN number or IP address, the operation fails. This
 *       action temporarily interrupts the hosted connection's connectivity to AWS as it is being
 *       migrated.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateHostedConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateHostedConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateHostedConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateHostedConnectionCommandInput} for command's `input` shape.
 * @see {@link AssociateHostedConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateHostedConnectionCommand extends $Command<AssociateHostedConnectionCommandInput, AssociateHostedConnectionCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AssociateHostedConnectionCommandInput;
    constructor(input: AssociateHostedConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateHostedConnectionCommandInput, AssociateHostedConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
