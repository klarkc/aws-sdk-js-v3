import { __extends } from "tslib";
import { DescribeTransformJobRequest, DescribeTransformJobResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeTransformJobCommand, serializeAws_json1_1DescribeTransformJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a transform job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTransformJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTransformJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeTransformJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransformJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTransformJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTransformJobCommand = /** @class */ (function (_super) {
    __extends(DescribeTransformJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTransformJobCommand(input) {
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
    DescribeTransformJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeTransformJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTransformJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTransformJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTransformJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTransformJobCommand(input, context);
    };
    DescribeTransformJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTransformJobCommand(output, context);
    };
    return DescribeTransformJobCommand;
}($Command));
export { DescribeTransformJobCommand };
//# sourceMappingURL=DescribeTransformJobCommand.js.map