"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreDBClusterFromSnapshotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p>
 *          <p>If a DB snapshot is specified, the target DB cluster is created from the source DB
 *       snapshot with a default configuration and default security group.</p>
 *          <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB
 *       cluster restore point with the same configuration as the original source DB cluster, except
 *       that the new DB cluster is created with the default security group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RestoreDBClusterFromSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RestoreDBClusterFromSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RestoreDBClusterFromSnapshotCommand extends smithy_client_1.Command {
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
        const commandName = "RestoreDBClusterFromSnapshotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RestoreDBClusterFromSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RestoreDBClusterFromSnapshotResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryRestoreDBClusterFromSnapshotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryRestoreDBClusterFromSnapshotCommand(output, context);
    }
}
exports.RestoreDBClusterFromSnapshotCommand = RestoreDBClusterFromSnapshotCommand;
//# sourceMappingURL=RestoreDBClusterFromSnapshotCommand.js.map