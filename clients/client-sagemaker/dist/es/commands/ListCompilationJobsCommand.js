import { __extends } from "tslib";
import { ListCompilationJobsRequest, ListCompilationJobsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListCompilationJobsCommand, serializeAws_json1_1ListCompilationJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists model compilation jobs that satisfy various filters.</p>
 *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
 *             information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListCompilationJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListCompilationJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListCompilationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCompilationJobsCommandInput} for command's `input` shape.
 * @see {@link ListCompilationJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCompilationJobsCommand = /** @class */ (function (_super) {
    __extends(ListCompilationJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCompilationJobsCommand(input) {
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
    ListCompilationJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListCompilationJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCompilationJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCompilationJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCompilationJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCompilationJobsCommand(input, context);
    };
    ListCompilationJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCompilationJobsCommand(output, context);
    };
    return ListCompilationJobsCommand;
}($Command));
export { ListCompilationJobsCommand };
//# sourceMappingURL=ListCompilationJobsCommand.js.map