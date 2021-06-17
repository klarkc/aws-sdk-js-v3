import { __extends } from "tslib";
import { UpdateSecurityProfileRequest, UpdateSecurityProfileResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateSecurityProfileCommand, serializeAws_restJson1UpdateSecurityProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a Device Defender security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSecurityProfileCommand = /** @class */ (function (_super) {
    __extends(UpdateSecurityProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSecurityProfileCommand(input) {
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
    UpdateSecurityProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateSecurityProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSecurityProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSecurityProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSecurityProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSecurityProfileCommand(input, context);
    };
    UpdateSecurityProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSecurityProfileCommand(output, context);
    };
    return UpdateSecurityProfileCommand;
}($Command));
export { UpdateSecurityProfileCommand };
//# sourceMappingURL=UpdateSecurityProfileCommand.js.map