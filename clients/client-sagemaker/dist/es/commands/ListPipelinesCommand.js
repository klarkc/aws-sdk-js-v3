import { __extends } from "tslib";
import { ListPipelinesRequest, ListPipelinesResponse } from "../models/models_2";
import { deserializeAws_json1_1ListPipelinesCommand, serializeAws_json1_1ListPipelinesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of pipelines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelinesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelinesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPipelinesCommand = /** @class */ (function (_super) {
    __extends(ListPipelinesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPipelinesCommand(input) {
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
    ListPipelinesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListPipelinesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPipelinesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPipelinesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPipelinesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPipelinesCommand(input, context);
    };
    ListPipelinesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPipelinesCommand(output, context);
    };
    return ListPipelinesCommand;
}($Command));
export { ListPipelinesCommand };
//# sourceMappingURL=ListPipelinesCommand.js.map