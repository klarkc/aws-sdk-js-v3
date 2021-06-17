import { __extends } from "tslib";
import { DescribeProcessingJobRequest, DescribeProcessingJobResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeProcessingJobCommand, serializeAws_json1_1DescribeProcessingJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of a processing job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeProcessingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeProcessingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeProcessingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProcessingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeProcessingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProcessingJobCommand = /** @class */ (function (_super) {
    __extends(DescribeProcessingJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProcessingJobCommand(input) {
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
    DescribeProcessingJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeProcessingJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProcessingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProcessingJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProcessingJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeProcessingJobCommand(input, context);
    };
    DescribeProcessingJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeProcessingJobCommand(output, context);
    };
    return DescribeProcessingJobCommand;
}($Command));
export { DescribeProcessingJobCommand };
//# sourceMappingURL=DescribeProcessingJobCommand.js.map