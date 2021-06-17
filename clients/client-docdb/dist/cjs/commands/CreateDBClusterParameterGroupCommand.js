"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDBClusterParameterGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new cluster parameter group.</p>
 *         <p>Parameters in a cluster parameter group apply to all of the
 *             instances in a cluster.</p>
 *         <p>A cluster parameter group is initially created with the default
 *             parameters for the database engine used by instances in the cluster.
 *             In Amazon DocumentDB, you cannot make modifications directly to the
 *             <code>default.docdb3.6</code> cluster parameter group. If your
 *             Amazon DocumentDB cluster is using the default cluster parameter group and you
 *             want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html">
 *                 create a new parameter group</a>
 *             or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html">
 *                 copy an existing parameter group</a>,
 *             modify it, and then apply the modified parameter group to your
 *             cluster. For the new cluster parameter group and associated settings
 *             to take effect, you must then reboot the instances in the cluster
 *             without failover. For more information,
 *             see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html">
 *                 Modifying Amazon DocumentDB Cluster Parameter Groups</a>.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateDBClusterParameterGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateDBClusterParameterGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new CreateDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
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
        const clientName = "DocDBClient";
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