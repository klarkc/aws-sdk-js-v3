import { __extends } from "tslib";
import { DeleteDeviceFleetRequest } from "../models/models_1";
import { deserializeAws_json1_1DeleteDeviceFleetCommand, serializeAws_json1_1DeleteDeviceFleetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteDeviceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDeviceFleetCommand = /** @class */ (function (_super) {
    __extends(DeleteDeviceFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDeviceFleetCommand(input) {
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
    DeleteDeviceFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteDeviceFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDeviceFleetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDeviceFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDeviceFleetCommand(input, context);
    };
    DeleteDeviceFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDeviceFleetCommand(output, context);
    };
    return DeleteDeviceFleetCommand;
}($Command));
export { DeleteDeviceFleetCommand };
//# sourceMappingURL=DeleteDeviceFleetCommand.js.map