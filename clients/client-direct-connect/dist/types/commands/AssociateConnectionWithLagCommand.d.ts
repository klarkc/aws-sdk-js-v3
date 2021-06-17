import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AssociateConnectionWithLagRequest, Connection } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateConnectionWithLagCommandInput extends AssociateConnectionWithLagRequest {
}
export interface AssociateConnectionWithLagCommandOutput extends Connection, __MetadataBearer {
}
/**
 * <p>Associates an existing connection with a link aggregation group (LAG). The connection
 *       is interrupted and re-established as a member of the LAG (connectivity to AWS is
 *       interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its
 *       bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's
 *       currently associated with a different LAG; however, if removing the connection would cause
 *       the original LAG to fall below its setting for minimum number of operational connections,
 *       the request fails.</p>
 *          <p>Any virtual interfaces that are directly associated with the connection are
 *       automatically re-associated with the LAG. If the connection was originally associated
 *       with a different LAG, the virtual interfaces remain associated with the original
 *       LAG.</p>
 *          <p>For interconnects, any hosted connections are automatically re-associated with the
 *       LAG. If the interconnect was originally associated with a different LAG, the hosted
 *       connections remain associated with the original LAG.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateConnectionWithLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateConnectionWithLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateConnectionWithLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateConnectionWithLagCommandInput} for command's `input` shape.
 * @see {@link AssociateConnectionWithLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateConnectionWithLagCommand extends $Command<AssociateConnectionWithLagCommandInput, AssociateConnectionWithLagCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AssociateConnectionWithLagCommandInput;
    constructor(input: AssociateConnectionWithLagCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateConnectionWithLagCommandInput, AssociateConnectionWithLagCommandOutput>;
    private serialize;
    private deserialize;
}
