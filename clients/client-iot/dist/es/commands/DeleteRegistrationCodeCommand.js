import { __extends } from "tslib";
import { DeleteRegistrationCodeRequest, DeleteRegistrationCodeResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteRegistrationCodeCommand, serializeAws_restJson1DeleteRegistrationCodeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a CA certificate registration code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteRegistrationCodeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteRegistrationCodeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteRegistrationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRegistrationCodeCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistrationCodeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRegistrationCodeCommand = /** @class */ (function (_super) {
    __extends(DeleteRegistrationCodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRegistrationCodeCommand(input) {
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
    DeleteRegistrationCodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteRegistrationCodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRegistrationCodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRegistrationCodeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRegistrationCodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRegistrationCodeCommand(input, context);
    };
    DeleteRegistrationCodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRegistrationCodeCommand(output, context);
    };
    return DeleteRegistrationCodeCommand;
}($Command));
export { DeleteRegistrationCodeCommand };
//# sourceMappingURL=DeleteRegistrationCodeCommand.js.map