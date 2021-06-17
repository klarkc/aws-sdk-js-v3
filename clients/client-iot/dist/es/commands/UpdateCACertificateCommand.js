import { __extends } from "tslib";
import { UpdateCACertificateRequest } from "../models/models_2";
import { deserializeAws_restJson1UpdateCACertificateCommand, serializeAws_restJson1UpdateCACertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a registered CA certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateCACertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCACertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCACertificateCommand = /** @class */ (function (_super) {
    __extends(UpdateCACertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCACertificateCommand(input) {
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
    UpdateCACertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateCACertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCACertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCACertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateCACertificateCommand(input, context);
    };
    UpdateCACertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateCACertificateCommand(output, context);
    };
    return UpdateCACertificateCommand;
}($Command));
export { UpdateCACertificateCommand };
//# sourceMappingURL=UpdateCACertificateCommand.js.map