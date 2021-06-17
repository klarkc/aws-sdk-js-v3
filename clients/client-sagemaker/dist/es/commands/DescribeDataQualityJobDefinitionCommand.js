import { __extends } from "tslib";
import { DescribeDataQualityJobDefinitionRequest, DescribeDataQualityJobDefinitionResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeDataQualityJobDefinitionCommand, serializeAws_json1_1DescribeDataQualityJobDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the details of a data quality monitoring job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeDataQualityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeDataQualityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeDataQualityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataQualityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeDataQualityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDataQualityJobDefinitionCommand = /** @class */ (function (_super) {
    __extends(DescribeDataQualityJobDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDataQualityJobDefinitionCommand(input) {
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
    DescribeDataQualityJobDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeDataQualityJobDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDataQualityJobDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDataQualityJobDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDataQualityJobDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDataQualityJobDefinitionCommand(input, context);
    };
    DescribeDataQualityJobDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDataQualityJobDefinitionCommand(output, context);
    };
    return DescribeDataQualityJobDefinitionCommand;
}($Command));
export { DescribeDataQualityJobDefinitionCommand };
//# sourceMappingURL=DescribeDataQualityJobDefinitionCommand.js.map