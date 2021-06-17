import { __extends } from "tslib";
import { ModifyDBClusterMessage, ModifyDBClusterResult } from "../models/models_0";
import { deserializeAws_queryModifyDBClusterCommand, serializeAws_queryModifyDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modify a setting for a DB cluster. You can change one or more database configuration
 *       parameters by specifying these parameters and the new values in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new ModifyDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBClusterCommand = /** @class */ (function (_super) {
    __extends(ModifyDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBClusterCommand(input) {
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
    ModifyDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "ModifyDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDBClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBClusterCommand(input, context);
    };
    ModifyDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBClusterCommand(output, context);
    };
    return ModifyDBClusterCommand;
}($Command));
export { ModifyDBClusterCommand };
//# sourceMappingURL=ModifyDBClusterCommand.js.map