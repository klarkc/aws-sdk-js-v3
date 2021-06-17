import { __extends } from "tslib";
import { AttachSecurityProfileRequest, AttachSecurityProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1AttachSecurityProfileCommand, serializeAws_restJson1AttachSecurityProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a Device Defender security profile with a thing group or this account. Each
 *         thing group or account can have up to five security profiles associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AttachSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link AttachSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachSecurityProfileCommand = /** @class */ (function (_super) {
    __extends(AttachSecurityProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachSecurityProfileCommand(input) {
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
    AttachSecurityProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "AttachSecurityProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachSecurityProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachSecurityProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachSecurityProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AttachSecurityProfileCommand(input, context);
    };
    AttachSecurityProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AttachSecurityProfileCommand(output, context);
    };
    return AttachSecurityProfileCommand;
}($Command));
export { AttachSecurityProfileCommand };
//# sourceMappingURL=AttachSecurityProfileCommand.js.map