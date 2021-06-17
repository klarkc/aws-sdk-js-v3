import { __extends } from "tslib";
import { GetDeviceRegistrationRequest, GetDeviceRegistrationResult } from "../models/models_0";
import { deserializeAws_restJson1GetDeviceRegistrationCommand, serializeAws_restJson1GetDeviceRegistrationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use to check if a device is registered with SageMaker Edge Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, GetDeviceRegistrationCommand } from "@aws-sdk/client-sagemaker-edge"; // ES Modules import
 * // const { SagemakerEdgeClient, GetDeviceRegistrationCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * const client = new SagemakerEdgeClient(config);
 * const command = new GetDeviceRegistrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceRegistrationCommandInput} for command's `input` shape.
 * @see {@link GetDeviceRegistrationCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeviceRegistrationCommand = /** @class */ (function (_super) {
    __extends(GetDeviceRegistrationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeviceRegistrationCommand(input) {
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
    GetDeviceRegistrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SagemakerEdgeClient";
        var commandName = "GetDeviceRegistrationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeviceRegistrationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeviceRegistrationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeviceRegistrationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDeviceRegistrationCommand(input, context);
    };
    GetDeviceRegistrationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDeviceRegistrationCommand(output, context);
    };
    return GetDeviceRegistrationCommand;
}($Command));
export { GetDeviceRegistrationCommand };
//# sourceMappingURL=GetDeviceRegistrationCommand.js.map