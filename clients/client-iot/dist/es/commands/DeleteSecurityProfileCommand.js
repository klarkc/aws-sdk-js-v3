import { __extends } from "tslib";
import { DeleteSecurityProfileRequest, DeleteSecurityProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSecurityProfileCommand, serializeAws_restJson1DeleteSecurityProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a Device Defender security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSecurityProfileCommand = /** @class */ (function (_super) {
    __extends(DeleteSecurityProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSecurityProfileCommand(input) {
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
    DeleteSecurityProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteSecurityProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSecurityProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSecurityProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSecurityProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSecurityProfileCommand(input, context);
    };
    DeleteSecurityProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSecurityProfileCommand(output, context);
    };
    return DeleteSecurityProfileCommand;
}($Command));
export { DeleteSecurityProfileCommand };
//# sourceMappingURL=DeleteSecurityProfileCommand.js.map