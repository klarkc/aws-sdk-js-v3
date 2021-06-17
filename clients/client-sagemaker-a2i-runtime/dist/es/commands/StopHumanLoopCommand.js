import { __extends } from "tslib";
import { StopHumanLoopRequest, StopHumanLoopResponse } from "../models/models_0";
import { deserializeAws_restJson1StopHumanLoopCommand, serializeAws_restJson1StopHumanLoopCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the specified human loop.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, StopHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, StopHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new StopHumanLoopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopHumanLoopCommandInput} for command's `input` shape.
 * @see {@link StopHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopHumanLoopCommand = /** @class */ (function (_super) {
    __extends(StopHumanLoopCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopHumanLoopCommand(input) {
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
    StopHumanLoopCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerA2IRuntimeClient";
        var commandName = "StopHumanLoopCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopHumanLoopRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopHumanLoopResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopHumanLoopCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopHumanLoopCommand(input, context);
    };
    StopHumanLoopCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopHumanLoopCommand(output, context);
    };
    return StopHumanLoopCommand;
}($Command));
export { StopHumanLoopCommand };
//# sourceMappingURL=StopHumanLoopCommand.js.map