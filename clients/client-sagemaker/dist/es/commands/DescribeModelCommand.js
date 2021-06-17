import { __extends } from "tslib";
import { DescribeModelInput, DescribeModelOutput } from "../models/models_1";
import { deserializeAws_json1_1DescribeModelCommand, serializeAws_json1_1DescribeModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a model that you created using the <code>CreateModel</code>
 *             API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelCommandInput} for command's `input` shape.
 * @see {@link DescribeModelCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeModelCommand = /** @class */ (function (_super) {
    __extends(DescribeModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeModelCommand(input) {
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
    DescribeModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeModelInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeModelOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeModelCommand(input, context);
    };
    DescribeModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeModelCommand(output, context);
    };
    return DescribeModelCommand;
}($Command));
export { DescribeModelCommand };
//# sourceMappingURL=DescribeModelCommand.js.map