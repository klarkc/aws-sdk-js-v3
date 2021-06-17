import { __extends } from "tslib";
import { ListLabelingJobsRequest, ListLabelingJobsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListLabelingJobsCommand, serializeAws_json1_1ListLabelingJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of labeling jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListLabelingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListLabelingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListLabelingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLabelingJobsCommandInput} for command's `input` shape.
 * @see {@link ListLabelingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLabelingJobsCommand = /** @class */ (function (_super) {
    __extends(ListLabelingJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLabelingJobsCommand(input) {
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
    ListLabelingJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListLabelingJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLabelingJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLabelingJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLabelingJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLabelingJobsCommand(input, context);
    };
    ListLabelingJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLabelingJobsCommand(output, context);
    };
    return ListLabelingJobsCommand;
}($Command));
export { ListLabelingJobsCommand };
//# sourceMappingURL=ListLabelingJobsCommand.js.map