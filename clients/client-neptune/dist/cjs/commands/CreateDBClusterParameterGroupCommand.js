"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDBClusterParameterGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new DB cluster parameter group.</p>
 *          <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB
 *       cluster.</p>
 *          <p> A DB cluster parameter group is initially created with the default
 *       parameters for the database engine used by instances in the DB cluster.
 *       To provide custom values for any of the parameters, you must modify the
 *       group after creating it using <a>ModifyDBClusterParameterGroup</a>.
 *       Once you've created a DB cluster parameter group, you need to associate it
 *       with your DB cluster using <a>ModifyDBCluster</a>.
 *       When you associate a new DB cluster parameter group with a running DB cluster,
 *       you need to reboot the DB instances in the DB cluster without failover for the
 *       new DB cluster parameter group and associated settings to take effect.</p>
 *          <important>
 *             <p>After you create a DB cluster parameter group, you should wait at least
 *         5 minutes before creating your first DB cluster that uses that DB cluster
 *         parameter group as the default parameter group. This allows Amazon Neptune
 *         to fully complete the create action before the DB cluster parameter group
 *         is used as the default for a new DB cluster. This is especially important for
 *         parameters that are critical when creating the default database for a DB
 *         cluster, such as the character set for the default database defined by the
 *         <code>character_set_database</code> parameter. You can use the <i>Parameter
 *         Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune
 *         console</a> or the <a>DescribeDBClusterParameters</a>
 *         command to verify that your DB cluster parameter group has been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBClusterParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBClusterParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CreateDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDBClusterParameterGroupCommand extends smithy_client_1.Command {
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
        const commandName = "CreateDBClusterParameterGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDBClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDBClusterParameterGroupResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateDBClusterParameterGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateDBClusterParameterGroupCommand(output, context);
    }
}
exports.CreateDBClusterParameterGroupCommand = CreateDBClusterParameterGroupCommand;
//# sourceMappingURL=CreateDBClusterParameterGroupCommand.js.map