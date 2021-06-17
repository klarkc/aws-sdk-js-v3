import { __extends } from "tslib";
import { DeleteJobTemplateRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteJobTemplateCommand, serializeAws_restJson1DeleteJobTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified job template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteJobTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteJobTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteJobTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteJobTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteJobTemplateCommand(input) {
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
    DeleteJobTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteJobTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteJobTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteJobTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteJobTemplateCommand(input, context);
    };
    DeleteJobTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteJobTemplateCommand(output, context);
    };
    return DeleteJobTemplateCommand;
}($Command));
export { DeleteJobTemplateCommand };
//# sourceMappingURL=DeleteJobTemplateCommand.js.map