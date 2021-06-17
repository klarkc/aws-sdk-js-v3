"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetDBParameterGroupCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the parameters of a DB parameter group to the engine/system default value.
 *             To reset specific parameters, provide a list of the following:
 *                 <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB
 *             parameter group, specify the <code>DBParameterGroup</code> name and
 *                 <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic
 *             parameters are updated immediately and static parameters are set to
 *                 <code>pending-reboot</code> to take effect on the next DB instance restart or
 *                 <code>RebootDBInstance</code> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ResetDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ResetDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ResetDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResetDBParameterGroupCommand extends smithy_client_1.Command {
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
        const commandName = "ResetDBParameterGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ResetDBParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.DBParameterGroupNameMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryResetDBParameterGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryResetDBParameterGroupCommand(output, context);
    }
}
exports.ResetDBParameterGroupCommand = ResetDBParameterGroupCommand;
//# sourceMappingURL=ResetDBParameterGroupCommand.js.map