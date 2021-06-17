import { __extends } from "tslib";
import { ListModelExplainabilityJobDefinitionsRequest, ListModelExplainabilityJobDefinitionsResponse, } from "../models/models_2";
import { deserializeAws_json1_1ListModelExplainabilityJobDefinitionsCommand, serializeAws_json1_1ListModelExplainabilityJobDefinitionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists model explainability job definitions that satisfy various filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelExplainabilityJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelExplainabilityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListModelExplainabilityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelExplainabilityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListModelExplainabilityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListModelExplainabilityJobDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListModelExplainabilityJobDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListModelExplainabilityJobDefinitionsCommand(input) {
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
    ListModelExplainabilityJobDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListModelExplainabilityJobDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListModelExplainabilityJobDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListModelExplainabilityJobDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListModelExplainabilityJobDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListModelExplainabilityJobDefinitionsCommand(input, context);
    };
    ListModelExplainabilityJobDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListModelExplainabilityJobDefinitionsCommand(output, context);
    };
    return ListModelExplainabilityJobDefinitionsCommand;
}($Command));
export { ListModelExplainabilityJobDefinitionsCommand };
//# sourceMappingURL=ListModelExplainabilityJobDefinitionsCommand.js.map