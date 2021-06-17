import { __extends } from "tslib";
import { ListProcessingJobsRequest, ListProcessingJobsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListProcessingJobsCommand, serializeAws_json1_1ListProcessingJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists processing jobs that satisfy various filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListProcessingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListProcessingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListProcessingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProcessingJobsCommandInput} for command's `input` shape.
 * @see {@link ListProcessingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProcessingJobsCommand = /** @class */ (function (_super) {
    __extends(ListProcessingJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProcessingJobsCommand(input) {
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
    ListProcessingJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListProcessingJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProcessingJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProcessingJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProcessingJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListProcessingJobsCommand(input, context);
    };
    ListProcessingJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListProcessingJobsCommand(output, context);
    };
    return ListProcessingJobsCommand;
}($Command));
export { ListProcessingJobsCommand };
//# sourceMappingURL=ListProcessingJobsCommand.js.map