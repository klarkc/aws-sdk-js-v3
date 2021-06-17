import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartDBInstanceAutomatedBackupsReplicationMessage, StartDBInstanceAutomatedBackupsReplicationResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDBInstanceAutomatedBackupsReplicationCommandInput extends StartDBInstanceAutomatedBackupsReplicationMessage {
}
export interface StartDBInstanceAutomatedBackupsReplicationCommandOutput extends StartDBInstanceAutomatedBackupsReplicationResult, __MetadataBearer {
}
/**
 * <p>Enables replication of automated backups to a different AWS Region.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another AWS Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartDBInstanceAutomatedBackupsReplicationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartDBInstanceAutomatedBackupsReplicationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDBInstanceAutomatedBackupsReplicationCommandInput} for command's `input` shape.
 * @see {@link StartDBInstanceAutomatedBackupsReplicationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDBInstanceAutomatedBackupsReplicationCommand extends $Command<StartDBInstanceAutomatedBackupsReplicationCommandInput, StartDBInstanceAutomatedBackupsReplicationCommandOutput, RDSClientResolvedConfig> {
    readonly input: StartDBInstanceAutomatedBackupsReplicationCommandInput;
    constructor(input: StartDBInstanceAutomatedBackupsReplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDBInstanceAutomatedBackupsReplicationCommandInput, StartDBInstanceAutomatedBackupsReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
