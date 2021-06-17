import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DisconnectFromServiceRequest, SourceServer } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisconnectFromServiceCommandInput extends DisconnectFromServiceRequest {
}
export interface DisconnectFromServiceCommandOutput extends SourceServer, __MetadataBearer {
}
/**
 * <p>Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communciating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DisconnectFromServiceCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DisconnectFromServiceCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DisconnectFromServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisconnectFromServiceCommandInput} for command's `input` shape.
 * @see {@link DisconnectFromServiceCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisconnectFromServiceCommand extends $Command<DisconnectFromServiceCommandInput, DisconnectFromServiceCommandOutput, MgnClientResolvedConfig> {
    readonly input: DisconnectFromServiceCommandInput;
    constructor(input: DisconnectFromServiceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisconnectFromServiceCommandInput, DisconnectFromServiceCommandOutput>;
    private serialize;
    private deserialize;
}
