"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoteReadReplicaCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Promotes a read replica DB instance to a standalone DB instance.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Backup duration is a function of the amount of changes to the database since the previous
 *                         backup. If you plan to promote a read replica to a standalone instance, we
 *                         recommend that you enable backups and complete at least one backup prior to
 *                         promotion. In addition, a read replica cannot be promoted to a standalone
 *                         instance when it is in the <code>backing-up</code> status. If you have
 *                         enabled backups on your read replica, configure the automated backup window
 *                         so that daily backups do not interfere with read replica
 *                         promotion.</p>
 *                </li>
 *                <li>
 *                   <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p>
 *                </li>
 *             </ul>
 *
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, PromoteReadReplicaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, PromoteReadReplicaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new PromoteReadReplicaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PromoteReadReplicaCommandInput} for command's `input` shape.
 * @see {@link PromoteReadReplicaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PromoteReadReplicaCommand extends smithy_client_1.Command {
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
        const commandName = "PromoteReadReplicaCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.PromoteReadReplicaMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.PromoteReadReplicaResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryPromoteReadReplicaCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryPromoteReadReplicaCommand(output, context);
    }
}
exports.PromoteReadReplicaCommand = PromoteReadReplicaCommand;
//# sourceMappingURL=PromoteReadReplicaCommand.js.map