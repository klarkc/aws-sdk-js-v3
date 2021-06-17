"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreDBClusterToPointInTimeCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point
 *             in time before <code>LatestRestorableTime</code> for up to
 *                 <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the
 *             source DB cluster with the same configuration as the original DB cluster, except that
 *             the new DB cluster is created with the default DB security group. </p>
 *          <note>
 *             <p>This action only restores the DB cluster, not the DB instances for that DB
 *                 cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
 *                 instances for the restored DB cluster, specifying the identifier of the restored DB
 *                 cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
 *                 the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB
 *                 cluster is available.</p>
 *          </note>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBClusterToPointInTimeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBClusterToPointInTimeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RestoreDBClusterToPointInTimeCommand extends smithy_client_1.Command {
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
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "RDSClient";
        const commandName = "RestoreDBClusterToPointInTimeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.RestoreDBClusterToPointInTimeMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.RestoreDBClusterToPointInTimeResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryRestoreDBClusterToPointInTimeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryRestoreDBClusterToPointInTimeCommand(output, context);
    }
}
exports.RestoreDBClusterToPointInTimeCommand = RestoreDBClusterToPointInTimeCommand;
//# sourceMappingURL=RestoreDBClusterToPointInTimeCommand.js.map