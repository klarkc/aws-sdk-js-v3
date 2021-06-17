import { __extends } from "tslib";
import { DescribeModelQualityJobDefinitionRequest, DescribeModelQualityJobDefinitionResponse, } from "../models/models_1";
import { deserializeAws_json1_1DescribeModelQualityJobDefinitionCommand, serializeAws_json1_1DescribeModelQualityJobDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of a model quality job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelQualityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelQualityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeModelQualityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelQualityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeModelQualityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeModelQualityJobDefinitionCommand = /** @class */ (function (_super) {
    __extends(DescribeModelQualityJobDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeModelQualityJobDefinitionCommand(input) {
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
    DescribeModelQualityJobDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeModelQualityJobDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeModelQualityJobDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeModelQualityJobDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeModelQualityJobDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeModelQualityJobDefinitionCommand(input, context);
    };
    DescribeModelQualityJobDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeModelQualityJobDefinitionCommand(output, context);
    };
    return DescribeModelQualityJobDefinitionCommand;
}($Command));
export { DescribeModelQualityJobDefinitionCommand };
//# sourceMappingURL=DescribeModelQualityJobDefinitionCommand.js.map