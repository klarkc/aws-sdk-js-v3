import { __extends } from "tslib";
import { ListPipelineExecutionStepsRequest, ListPipelineExecutionStepsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListPipelineExecutionStepsCommand, serializeAws_json1_1ListPipelineExecutionStepsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of <code>PipeLineExecutionStep</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelineExecutionStepsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelineExecutionStepsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListPipelineExecutionStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelineExecutionStepsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineExecutionStepsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPipelineExecutionStepsCommand = /** @class */ (function (_super) {
    __extends(ListPipelineExecutionStepsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPipelineExecutionStepsCommand(input) {
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
    ListPipelineExecutionStepsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListPipelineExecutionStepsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPipelineExecutionStepsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPipelineExecutionStepsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPipelineExecutionStepsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPipelineExecutionStepsCommand(input, context);
    };
    ListPipelineExecutionStepsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPipelineExecutionStepsCommand(output, context);
    };
    return ListPipelineExecutionStepsCommand;
}($Command));
export { ListPipelineExecutionStepsCommand };
//# sourceMappingURL=ListPipelineExecutionStepsCommand.js.map