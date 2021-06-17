import { __extends } from "tslib";
import { DescribeCompilationJobRequest, DescribeCompilationJobResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeCompilationJobCommand, serializeAws_json1_1DescribeCompilationJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a model compilation job.</p>
 *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
 *             information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeCompilationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeCompilationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeCompilationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCompilationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeCompilationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCompilationJobCommand = /** @class */ (function (_super) {
    __extends(DescribeCompilationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCompilationJobCommand(input) {
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
    DescribeCompilationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeCompilationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCompilationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCompilationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCompilationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCompilationJobCommand(input, context);
    };
    DescribeCompilationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCompilationJobCommand(output, context);
    };
    return DescribeCompilationJobCommand;
}($Command));
export { DescribeCompilationJobCommand };
//# sourceMappingURL=DescribeCompilationJobCommand.js.map