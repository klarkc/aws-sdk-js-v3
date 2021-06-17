import { __extends } from "tslib";
import { GetMobileDeviceAccessEffectRequest, GetMobileDeviceAccessEffectResponse } from "../models/models_0";
import { deserializeAws_json1_1GetMobileDeviceAccessEffectCommand, serializeAws_json1_1GetMobileDeviceAccessEffectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access
 *          rules for the Amazon WorkMail organization for a particular user's attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMobileDeviceAccessEffectCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetMobileDeviceAccessEffectCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetMobileDeviceAccessEffectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMobileDeviceAccessEffectCommandInput} for command's `input` shape.
 * @see {@link GetMobileDeviceAccessEffectCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMobileDeviceAccessEffectCommand = /** @class */ (function (_super) {
    __extends(GetMobileDeviceAccessEffectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMobileDeviceAccessEffectCommand(input) {
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
    GetMobileDeviceAccessEffectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "GetMobileDeviceAccessEffectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMobileDeviceAccessEffectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMobileDeviceAccessEffectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMobileDeviceAccessEffectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMobileDeviceAccessEffectCommand(input, context);
    };
    GetMobileDeviceAccessEffectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMobileDeviceAccessEffectCommand(output, context);
    };
    return GetMobileDeviceAccessEffectCommand;
}($Command));
export { GetMobileDeviceAccessEffectCommand };
//# sourceMappingURL=GetMobileDeviceAccessEffectCommand.js.map