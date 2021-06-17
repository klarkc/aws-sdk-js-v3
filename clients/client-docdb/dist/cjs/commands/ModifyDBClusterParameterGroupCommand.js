"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyDBClusterParameterGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p> Modifies the parameters of a cluster parameter group. To modify more than one
 *             parameter, submit a list of the following: <code>ParameterName</code>,
 *                 <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20
 *             parameters can be modified in a single request. </p>
 *         <note>
 *             <p>Changes to dynamic parameters are applied immediately. Changes to static
 *                 parameters require a reboot or maintenance window
 *
 *                 before the change can take effect.</p>
 *         </note>
 *         <important>
 *             <p>After you create a cluster parameter group, you should wait at least 5 minutes
 *                 before creating your first cluster that uses that cluster parameter group as
 *                 the default parameter group. This allows Amazon DocumentDB to fully complete the create action
 *                 before the parameter group is used as the default for a new cluster. This step is
 *                 especially important for parameters that are critical when creating the default
 *                 database for a cluster, such as the character set for the default database
 *                 defined by the <code>character_set_database</code> parameter.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyDBClusterParameterGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyDBClusterParameterGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ModifyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyDBClusterParameterGroupCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyDBClusterParameterGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ModifyDBClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DBClusterParameterGroupNameMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryModifyDBClusterParameterGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryModifyDBClusterParameterGroupCommand(output, context);
    }
}
exports.ModifyDBClusterParameterGroupCommand = ModifyDBClusterParameterGroupCommand;
//# sourceMappingURL=ModifyDBClusterParameterGroupCommand.js.map