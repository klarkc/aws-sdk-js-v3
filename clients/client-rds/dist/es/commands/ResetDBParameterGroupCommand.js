import { __extends } from "tslib";
import { DBParameterGroupNameMessage, ResetDBParameterGroupMessage } from "../models/models_1";
import { deserializeAws_queryResetDBParameterGroupCommand, serializeAws_queryResetDBParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ResetDBParameterGroupCommand = /** @class */ (function (_super) {
    __extends(ResetDBParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetDBParameterGroupCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ResetDBParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ResetDBParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetDBParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBParameterGroupNameMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetDBParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryResetDBParameterGroupCommand(input, context);
    };
    ResetDBParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryResetDBParameterGroupCommand(output, context);
    };
    return ResetDBParameterGroupCommand;
}($Command));
export { ResetDBParameterGroupCommand };
//# sourceMappingURL=ResetDBParameterGroupCommand.js.map