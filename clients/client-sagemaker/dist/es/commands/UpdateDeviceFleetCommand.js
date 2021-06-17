import { __extends } from "tslib";
import { UpdateDeviceFleetRequest } from "../models/models_2";
import { deserializeAws_json1_1UpdateDeviceFleetCommand, serializeAws_json1_1UpdateDeviceFleetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a fleet of devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateDeviceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDeviceFleetCommand = /** @class */ (function (_super) {
    __extends(UpdateDeviceFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDeviceFleetCommand(input) {
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
    UpdateDeviceFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateDeviceFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDeviceFleetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDeviceFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDeviceFleetCommand(input, context);
    };
    UpdateDeviceFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDeviceFleetCommand(output, context);
    };
    return UpdateDeviceFleetCommand;
}($Command));
export { UpdateDeviceFleetCommand };
//# sourceMappingURL=UpdateDeviceFleetCommand.js.map