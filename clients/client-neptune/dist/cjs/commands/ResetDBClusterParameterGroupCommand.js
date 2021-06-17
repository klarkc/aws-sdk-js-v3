"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetDBClusterParameterGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset
 *       specific parameters submit a list of the following: <code>ParameterName</code> and
 *       <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the
 *       <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p>
 *          <p> When resetting the entire group, dynamic parameters are updated immediately and static
 *       parameters are set to <code>pending-reboot</code> to take effect on the next DB instance
 *       restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster
 *       that you want the updated static parameter to apply to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ResetDBClusterParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ResetDBClusterParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new ResetDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResetDBClusterParameterGroupCommand extends smithy_client_1.Command {
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
        const commandName = "ResetDBClusterParameterGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ResetDBClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DBClusterParameterGroupNameMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryResetDBClusterParameterGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryResetDBClusterParameterGroupCommand(output, context);
    }
}
exports.ResetDBClusterParameterGroupCommand = ResetDBClusterParameterGroupCommand;
//# sourceMappingURL=ResetDBClusterParameterGroupCommand.js.map