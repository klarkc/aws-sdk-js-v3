"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetDBClusterParameterGroupCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             Modifies the parameters of a DB cluster parameter group to the default value. To
 *             reset specific parameters submit a list of the following: <code>ParameterName</code>
 *             and <code>ApplyMethod</code>. To reset the
 *             entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code>
 *             and <code>ResetAllParameters</code> parameters.
 *         </p>
 *             <p>
 *             When resetting the entire group, dynamic parameters are updated immediately and static parameters
 *             are set to <code>pending-reboot</code> to take effect on the next DB instance restart
 *             or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every
 *             DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
 *
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
 * import { RDSClient, ResetDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ResetDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ResetDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
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
        const clientName = "RDSClient";
        const commandName = "ResetDBClusterParameterGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ResetDBClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.DBClusterParameterGroupNameMessage.filterSensitiveLog,
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