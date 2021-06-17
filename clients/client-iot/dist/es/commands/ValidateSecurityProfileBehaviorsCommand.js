import { __extends } from "tslib";
import { ValidateSecurityProfileBehaviorsRequest, ValidateSecurityProfileBehaviorsResponse } from "../models/models_2";
import { deserializeAws_restJson1ValidateSecurityProfileBehaviorsCommand, serializeAws_restJson1ValidateSecurityProfileBehaviorsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Validates a Device Defender security profile behaviors specification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ValidateSecurityProfileBehaviorsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ValidateSecurityProfileBehaviorsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ValidateSecurityProfileBehaviorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateSecurityProfileBehaviorsCommandInput} for command's `input` shape.
 * @see {@link ValidateSecurityProfileBehaviorsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ValidateSecurityProfileBehaviorsCommand = /** @class */ (function (_super) {
    __extends(ValidateSecurityProfileBehaviorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ValidateSecurityProfileBehaviorsCommand(input) {
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
    ValidateSecurityProfileBehaviorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ValidateSecurityProfileBehaviorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ValidateSecurityProfileBehaviorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ValidateSecurityProfileBehaviorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ValidateSecurityProfileBehaviorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ValidateSecurityProfileBehaviorsCommand(input, context);
    };
    ValidateSecurityProfileBehaviorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ValidateSecurityProfileBehaviorsCommand(output, context);
    };
    return ValidateSecurityProfileBehaviorsCommand;
}($Command));
export { ValidateSecurityProfileBehaviorsCommand };
//# sourceMappingURL=ValidateSecurityProfileBehaviorsCommand.js.map