import { __extends } from "tslib";
import { UpdateDevicesRequest } from "../models/models_2";
import { deserializeAws_json1_1UpdateDevicesCommand, serializeAws_json1_1UpdateDevicesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates one or more devices in a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateDevicesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateDevicesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDevicesCommandInput} for command's `input` shape.
 * @see {@link UpdateDevicesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDevicesCommand = /** @class */ (function (_super) {
    __extends(UpdateDevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDevicesCommand(input) {
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
    UpdateDevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateDevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDevicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDevicesCommand(input, context);
    };
    UpdateDevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDevicesCommand(output, context);
    };
    return UpdateDevicesCommand;
}($Command));
export { UpdateDevicesCommand };
//# sourceMappingURL=UpdateDevicesCommand.js.map