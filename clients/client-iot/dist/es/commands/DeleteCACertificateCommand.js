import { __extends } from "tslib";
import { DeleteCACertificateRequest, DeleteCACertificateResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteCACertificateCommand, serializeAws_restJson1DeleteCACertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a registered CA certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteCACertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCACertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCACertificateCommand = /** @class */ (function (_super) {
    __extends(DeleteCACertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCACertificateCommand(input) {
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
    DeleteCACertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteCACertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCACertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCACertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCACertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCACertificateCommand(input, context);
    };
    DeleteCACertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCACertificateCommand(output, context);
    };
    return DeleteCACertificateCommand;
}($Command));
export { DeleteCACertificateCommand };
//# sourceMappingURL=DeleteCACertificateCommand.js.map