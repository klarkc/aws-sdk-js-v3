import { __extends } from "tslib";
import { DeleteScheduledActionMessage } from "../models/models_0";
import { deserializeAws_queryDeleteScheduledActionCommand, serializeAws_queryDeleteScheduledActionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a scheduled action.
 *              </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteScheduledActionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteScheduledActionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteScheduledActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScheduledActionCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteScheduledActionCommand = /** @class */ (function (_super) {
    __extends(DeleteScheduledActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteScheduledActionCommand(input) {
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
    DeleteScheduledActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeleteScheduledActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteScheduledActionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteScheduledActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteScheduledActionCommand(input, context);
    };
    DeleteScheduledActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteScheduledActionCommand(output, context);
    };
    return DeleteScheduledActionCommand;
}($Command));
export { DeleteScheduledActionCommand };
//# sourceMappingURL=DeleteScheduledActionCommand.js.map