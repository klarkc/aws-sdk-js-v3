import { __extends } from "tslib";
import { DetachSecurityProfileRequest, DetachSecurityProfileResponse } from "../models/models_1";
import { deserializeAws_restJson1DetachSecurityProfileCommand, serializeAws_restJson1DetachSecurityProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a Device Defender security profile from a thing group or from this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DetachSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link DetachSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachSecurityProfileCommand = /** @class */ (function (_super) {
    __extends(DetachSecurityProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachSecurityProfileCommand(input) {
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
    DetachSecurityProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DetachSecurityProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachSecurityProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetachSecurityProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachSecurityProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DetachSecurityProfileCommand(input, context);
    };
    DetachSecurityProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DetachSecurityProfileCommand(output, context);
    };
    return DetachSecurityProfileCommand;
}($Command));
export { DetachSecurityProfileCommand };
//# sourceMappingURL=DetachSecurityProfileCommand.js.map