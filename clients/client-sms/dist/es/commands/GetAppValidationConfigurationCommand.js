import { __extends } from "tslib";
import { GetAppValidationConfigurationRequest, GetAppValidationConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAppValidationConfigurationCommand, serializeAws_json1_1GetAppValidationConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a configuration for validating an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppValidationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppValidationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppValidationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppValidationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppValidationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAppValidationConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetAppValidationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAppValidationConfigurationCommand(input) {
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
    GetAppValidationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "GetAppValidationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAppValidationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAppValidationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAppValidationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAppValidationConfigurationCommand(input, context);
    };
    GetAppValidationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAppValidationConfigurationCommand(output, context);
    };
    return GetAppValidationConfigurationCommand;
}($Command));
export { GetAppValidationConfigurationCommand };
//# sourceMappingURL=GetAppValidationConfigurationCommand.js.map