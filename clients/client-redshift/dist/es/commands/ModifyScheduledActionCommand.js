import { __extends } from "tslib";
import { ScheduledAction } from "../models/models_0";
import { ModifyScheduledActionMessage } from "../models/models_1";
import { deserializeAws_queryModifyScheduledActionCommand, serializeAws_queryModifyScheduledActionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a scheduled action.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyScheduledActionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyScheduledActionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyScheduledActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyScheduledActionCommandInput} for command's `input` shape.
 * @see {@link ModifyScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyScheduledActionCommand = /** @class */ (function (_super) {
    __extends(ModifyScheduledActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyScheduledActionCommand(input) {
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
    ModifyScheduledActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyScheduledActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyScheduledActionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ScheduledAction.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyScheduledActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyScheduledActionCommand(input, context);
    };
    ModifyScheduledActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyScheduledActionCommand(output, context);
    };
    return ModifyScheduledActionCommand;
}($Command));
export { ModifyScheduledActionCommand };
//# sourceMappingURL=ModifyScheduledActionCommand.js.map