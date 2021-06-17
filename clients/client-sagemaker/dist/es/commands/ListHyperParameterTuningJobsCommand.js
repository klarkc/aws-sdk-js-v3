import { __extends } from "tslib";
import { ListHyperParameterTuningJobsRequest, ListHyperParameterTuningJobsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListHyperParameterTuningJobsCommand, serializeAws_json1_1ListHyperParameterTuningJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of <a>HyperParameterTuningJobSummary</a> objects that
 *             describe
 *             the hyperparameter tuning jobs launched in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHyperParameterTuningJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHyperParameterTuningJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListHyperParameterTuningJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHyperParameterTuningJobsCommandInput} for command's `input` shape.
 * @see {@link ListHyperParameterTuningJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHyperParameterTuningJobsCommand = /** @class */ (function (_super) {
    __extends(ListHyperParameterTuningJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHyperParameterTuningJobsCommand(input) {
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
    ListHyperParameterTuningJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListHyperParameterTuningJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHyperParameterTuningJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHyperParameterTuningJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHyperParameterTuningJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListHyperParameterTuningJobsCommand(input, context);
    };
    ListHyperParameterTuningJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListHyperParameterTuningJobsCommand(output, context);
    };
    return ListHyperParameterTuningJobsCommand;
}($Command));
export { ListHyperParameterTuningJobsCommand };
//# sourceMappingURL=ListHyperParameterTuningJobsCommand.js.map