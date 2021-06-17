"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreDBClusterToPointInTimeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in
 *       time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code>
 *       days. The target DB cluster is created from the source DB cluster with the same configuration
 *       as the original DB cluster, except that the new DB cluster is created with the default DB
 *       security group.</p>
 *          <note>
 *             <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You
 *         must invoke the <a>CreateDBInstance</a> action to create DB instances for the
 *         restored DB cluster, specifying the identifier of the restored DB cluster in
 *         <code>DBClusterIdentifier</code>. You can create DB instances only after the
 *         <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is
 *         available.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RestoreDBClusterToPointInTimeCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RestoreDBClusterToPointInTimeCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
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
        const clientName = "NeptuneClient";
        const commandName = "RestoreDBClusterToPointInTimeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RestoreDBClusterToPointInTimeMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RestoreDBClusterToPointInTimeResult.filterSensitiveLog,
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