import { __extends } from "tslib";
import { DeleteEvaluationInput, DeleteEvaluationOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteEvaluationCommand, serializeAws_json1_1DeleteEvaluationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p>
 *
 *         <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the
 *           <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p>
 *         <p>
 *             <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DeleteEvaluationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEvaluationCommandInput} for command's `input` shape.
 * @see {@link DeleteEvaluationCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEvaluationCommand = /** @class */ (function (_super) {
    __extends(DeleteEvaluationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEvaluationCommand(input) {
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
    DeleteEvaluationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "DeleteEvaluationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEvaluationInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEvaluationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEvaluationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEvaluationCommand(input, context);
    };
    DeleteEvaluationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEvaluationCommand(output, context);
    };
    return DeleteEvaluationCommand;
}($Command));
export { DeleteEvaluationCommand };
//# sourceMappingURL=DeleteEvaluationCommand.js.map