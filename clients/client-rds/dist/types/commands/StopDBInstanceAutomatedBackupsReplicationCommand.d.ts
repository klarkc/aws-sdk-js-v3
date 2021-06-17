import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StopDBInstanceAutomatedBackupsReplicationMessage, StopDBInstanceAutomatedBackupsReplicationResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopDBInstanceAutomatedBackupsReplicationCommandInput extends StopDBInstanceAutomatedBackupsReplicationMessage {
}
export interface StopDBInstanceAutomatedBackupsReplicationCommandOutput extends StopDBInstanceAutomatedBackupsReplicationResult, __MetadataBearer {
}
/**
 * <p>Stops automated backup replication for a DB instance.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another AWS Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandInput} for command's `input` shape.
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopDBInstanceAutomatedBackupsReplicationCommand extends $Command<StopDBInstanceAutomatedBackupsReplicationCommandInput, StopDBInstanceAutomatedBackupsReplicationCommandOutput, RDSClientResolvedConfig> {
    readonly input: StopDBInstanceAutomatedBackupsReplicationCommandInput;
    constructor(input: StopDBInstanceAutomatedBackupsReplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDBInstanceAutomatedBackupsReplicationCommandInput, StopDBInstanceAutomatedBackupsReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
