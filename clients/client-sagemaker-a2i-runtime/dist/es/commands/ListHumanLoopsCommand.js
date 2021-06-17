import { __extends } from "tslib";
import { ListHumanLoopsRequest, ListHumanLoopsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListHumanLoopsCommand, serializeAws_restJson1ListHumanLoopsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, ListHumanLoopsCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, ListHumanLoopsCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new ListHumanLoopsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHumanLoopsCommandInput} for command's `input` shape.
 * @see {@link ListHumanLoopsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHumanLoopsCommand = /** @class */ (function (_super) {
    __extends(ListHumanLoopsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHumanLoopsCommand(input) {
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
    ListHumanLoopsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerA2IRuntimeClient";
        var commandName = "ListHumanLoopsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHumanLoopsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHumanLoopsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHumanLoopsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListHumanLoopsCommand(input, context);
    };
    ListHumanLoopsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListHumanLoopsCommand(output, context);
    };
    return ListHumanLoopsCommand;
}($Command));
export { ListHumanLoopsCommand };
//# sourceMappingURL=ListHumanLoopsCommand.js.map