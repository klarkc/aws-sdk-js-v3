import { __extends } from "tslib";
import { DescribeHumanLoopRequest, DescribeHumanLoopResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeHumanLoopCommand, serializeAws_restJson1DescribeHumanLoopCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the specified human loop. If the human loop was deleted, this
 *       operation will return a <code>ResourceNotFoundException</code> error. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, DescribeHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, DescribeHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new DescribeHumanLoopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHumanLoopCommandInput} for command's `input` shape.
 * @see {@link DescribeHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHumanLoopCommand = /** @class */ (function (_super) {
    __extends(DescribeHumanLoopCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHumanLoopCommand(input) {
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
    DescribeHumanLoopCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerA2IRuntimeClient";
        var commandName = "DescribeHumanLoopCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHumanLoopRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHumanLoopResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHumanLoopCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeHumanLoopCommand(input, context);
    };
    DescribeHumanLoopCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeHumanLoopCommand(output, context);
    };
    return DescribeHumanLoopCommand;
}($Command));
export { DescribeHumanLoopCommand };
//# sourceMappingURL=DescribeHumanLoopCommand.js.map