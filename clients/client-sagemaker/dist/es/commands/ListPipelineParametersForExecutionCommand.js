import { __extends } from "tslib";
import { ListPipelineParametersForExecutionRequest, ListPipelineParametersForExecutionResponse, } from "../models/models_2";
import { deserializeAws_json1_1ListPipelineParametersForExecutionCommand, serializeAws_json1_1ListPipelineParametersForExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of parameters for a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelineParametersForExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelineParametersForExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListPipelineParametersForExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelineParametersForExecutionCommandInput} for command's `input` shape.
 * @see {@link ListPipelineParametersForExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPipelineParametersForExecutionCommand = /** @class */ (function (_super) {
    __extends(ListPipelineParametersForExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPipelineParametersForExecutionCommand(input) {
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
    ListPipelineParametersForExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListPipelineParametersForExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPipelineParametersForExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPipelineParametersForExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPipelineParametersForExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPipelineParametersForExecutionCommand(input, context);
    };
    ListPipelineParametersForExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPipelineParametersForExecutionCommand(output, context);
    };
    return ListPipelineParametersForExecutionCommand;
}($Command));
export { ListPipelineParametersForExecutionCommand };
//# sourceMappingURL=ListPipelineParametersForExecutionCommand.js.map