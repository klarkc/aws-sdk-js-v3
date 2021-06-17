import { __extends } from "tslib";
import { DBClusterParameterGroupNameMessage, ResetDBClusterParameterGroupMessage } from "../models/models_0";
import { deserializeAws_queryResetDBClusterParameterGroupCommand, serializeAws_queryResetDBClusterParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Modifies the parameters of a cluster parameter group to the default value. To
 *             reset specific parameters, submit a list of the following: <code>ParameterName</code>
 *             and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify
 *             the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code>
 *             parameters. </p>
 *         <p> When you reset the entire group, dynamic parameters are updated immediately and
 *             static parameters are set to <code>pending-reboot</code> to take effect on the next DB
 *             instance reboot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ResetDBClusterParameterGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ResetDBClusterParameterGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ResetDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetDBClusterParameterGroupCommand = /** @class */ (function (_super) {
    __extends(ResetDBClusterParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetDBClusterParameterGroupCommand(input) {
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
    ResetDBClusterParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "ResetDBClusterParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetDBClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBClusterParameterGroupNameMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetDBClusterParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryResetDBClusterParameterGroupCommand(input, context);
    };
    ResetDBClusterParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryResetDBClusterParameterGroupCommand(output, context);
    };
    return ResetDBClusterParameterGroupCommand;
}($Command));
export { ResetDBClusterParameterGroupCommand };
//# sourceMappingURL=ResetDBClusterParameterGroupCommand.js.map