import { __extends } from "tslib";
import { StartHumanLoopRequest, StartHumanLoopResponse } from "../models/models_0";
import { deserializeAws_restJson1StartHumanLoopCommand, serializeAws_restJson1StartHumanLoopCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a human loop, provided that at least one activation condition is met.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, StartHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, StartHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new StartHumanLoopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartHumanLoopCommandInput} for command's `input` shape.
 * @see {@link StartHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartHumanLoopCommand = /** @class */ (function (_super) {
    __extends(StartHumanLoopCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartHumanLoopCommand(input) {
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
    StartHumanLoopCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerA2IRuntimeClient";
        var commandName = "StartHumanLoopCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartHumanLoopRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartHumanLoopResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartHumanLoopCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartHumanLoopCommand(input, context);
    };
    StartHumanLoopCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartHumanLoopCommand(output, context);
    };
    return StartHumanLoopCommand;
}($Command));
export { StartHumanLoopCommand };
//# sourceMappingURL=StartHumanLoopCommand.js.map