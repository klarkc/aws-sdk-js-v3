import { __extends } from "tslib";
import { UpdateAppImageConfigRequest, UpdateAppImageConfigResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateAppImageConfigCommand, serializeAws_json1_1UpdateAppImageConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the properties of an AppImageConfig.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateAppImageConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateAppImageConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateAppImageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAppImageConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateAppImageConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAppImageConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateAppImageConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAppImageConfigCommand(input) {
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
    UpdateAppImageConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateAppImageConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAppImageConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAppImageConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAppImageConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAppImageConfigCommand(input, context);
    };
    UpdateAppImageConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAppImageConfigCommand(output, context);
    };
    return UpdateAppImageConfigCommand;
}($Command));
export { UpdateAppImageConfigCommand };
//# sourceMappingURL=UpdateAppImageConfigCommand.js.map