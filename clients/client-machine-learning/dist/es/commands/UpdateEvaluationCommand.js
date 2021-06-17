import { __extends } from "tslib";
import { UpdateEvaluationInput, UpdateEvaluationOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateEvaluationCommand, serializeAws_json1_1UpdateEvaluationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p>
 *         <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new UpdateEvaluationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEvaluationCommandInput} for command's `input` shape.
 * @see {@link UpdateEvaluationCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEvaluationCommand = /** @class */ (function (_super) {
    __extends(UpdateEvaluationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEvaluationCommand(input) {
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
    UpdateEvaluationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "UpdateEvaluationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEvaluationInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEvaluationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEvaluationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateEvaluationCommand(input, context);
    };
    UpdateEvaluationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateEvaluationCommand(output, context);
    };
    return UpdateEvaluationCommand;
}($Command));
export { UpdateEvaluationCommand };
//# sourceMappingURL=UpdateEvaluationCommand.js.map