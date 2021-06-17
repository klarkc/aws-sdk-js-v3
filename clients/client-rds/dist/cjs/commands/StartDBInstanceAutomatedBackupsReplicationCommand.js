"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartDBInstanceAutomatedBackupsReplicationCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_sdk_rds_1 = require("@aws-sdk/middleware-sdk-rds");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class StartDBInstanceAutomatedBackupsReplicationCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(middleware_sdk_rds_1.getCrossRegionPresignedUrlPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "RDSClient";
        const commandName = "StartDBInstanceAutomatedBackupsReplicationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.StartDBInstanceAutomatedBackupsReplicationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.StartDBInstanceAutomatedBackupsReplicationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand(output, context);
    }
}
exports.StartDBInstanceAutomatedBackupsReplicationCommand = StartDBInstanceAutomatedBackupsReplicationCommand;
//# sourceMappingURL=StartDBInstanceAutomatedBackupsReplicationCommand.js.map