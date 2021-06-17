import { __extends } from "tslib";
import { UpdateActionRequest, UpdateActionResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateActionCommand, serializeAws_json1_1UpdateActionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateActionCommandInput} for command's `input` shape.
 * @see {@link UpdateActionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateActionCommand = /** @class */ (function (_super) {
    __extends(UpdateActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateActionCommand(input) {
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
    UpdateActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateActionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateActionCommand(input, context);
    };
    UpdateActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateActionCommand(output, context);
    };
    return UpdateActionCommand;
}($Command));
export { UpdateActionCommand };
//# sourceMappingURL=UpdateActionCommand.js.map