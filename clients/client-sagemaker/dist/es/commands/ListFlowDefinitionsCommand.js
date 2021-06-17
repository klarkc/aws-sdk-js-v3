import { __extends } from "tslib";
import { ListFlowDefinitionsRequest, ListFlowDefinitionsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListFlowDefinitionsCommand, serializeAws_json1_1ListFlowDefinitionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the flow definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListFlowDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListFlowDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListFlowDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFlowDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListFlowDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFlowDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListFlowDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFlowDefinitionsCommand(input) {
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
    ListFlowDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListFlowDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFlowDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFlowDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFlowDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFlowDefinitionsCommand(input, context);
    };
    ListFlowDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFlowDefinitionsCommand(output, context);
    };
    return ListFlowDefinitionsCommand;
}($Command));
export { ListFlowDefinitionsCommand };
//# sourceMappingURL=ListFlowDefinitionsCommand.js.map