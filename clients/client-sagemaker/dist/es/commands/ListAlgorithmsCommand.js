import { __extends } from "tslib";
import { ListAlgorithmsInput, ListAlgorithmsOutput } from "../models/models_2";
import { deserializeAws_json1_1ListAlgorithmsCommand, serializeAws_json1_1ListAlgorithmsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the machine learning algorithms that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAlgorithmsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAlgorithmsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListAlgorithmsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlgorithmsCommandInput} for command's `input` shape.
 * @see {@link ListAlgorithmsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAlgorithmsCommand = /** @class */ (function (_super) {
    __extends(ListAlgorithmsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAlgorithmsCommand(input) {
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
    ListAlgorithmsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListAlgorithmsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAlgorithmsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListAlgorithmsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAlgorithmsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAlgorithmsCommand(input, context);
    };
    ListAlgorithmsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAlgorithmsCommand(output, context);
    };
    return ListAlgorithmsCommand;
}($Command));
export { ListAlgorithmsCommand };
//# sourceMappingURL=ListAlgorithmsCommand.js.map