import { __extends } from "tslib";
import { PutAppValidationConfigurationRequest, PutAppValidationConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1PutAppValidationConfigurationCommand, serializeAws_json1_1PutAppValidationConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a validation configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppValidationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppValidationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new PutAppValidationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppValidationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppValidationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAppValidationConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutAppValidationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAppValidationConfigurationCommand(input) {
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
    PutAppValidationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "PutAppValidationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAppValidationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAppValidationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAppValidationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutAppValidationConfigurationCommand(input, context);
    };
    PutAppValidationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutAppValidationConfigurationCommand(output, context);
    };
    return PutAppValidationConfigurationCommand;
}($Command));
export { PutAppValidationConfigurationCommand };
//# sourceMappingURL=PutAppValidationConfigurationCommand.js.map