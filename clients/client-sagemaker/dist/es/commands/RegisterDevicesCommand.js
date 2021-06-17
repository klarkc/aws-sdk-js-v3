import { __extends } from "tslib";
import { RegisterDevicesRequest } from "../models/models_2";
import { deserializeAws_json1_1RegisterDevicesCommand, serializeAws_json1_1RegisterDevicesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Register devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, RegisterDevicesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, RegisterDevicesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new RegisterDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDevicesCommandInput} for command's `input` shape.
 * @see {@link RegisterDevicesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterDevicesCommand = /** @class */ (function (_super) {
    __extends(RegisterDevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterDevicesCommand(input) {
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
    RegisterDevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "RegisterDevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterDevicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterDevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterDevicesCommand(input, context);
    };
    RegisterDevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterDevicesCommand(output, context);
    };
    return RegisterDevicesCommand;
}($Command));
export { RegisterDevicesCommand };
//# sourceMappingURL=RegisterDevicesCommand.js.map