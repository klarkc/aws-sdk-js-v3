import { __extends } from "tslib";
import { GetEvaluationInput, GetEvaluationOutput } from "../models/models_0";
import { deserializeAws_json1_1GetEvaluationCommand, serializeAws_json1_1GetEvaluationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new GetEvaluationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEvaluationCommandInput} for command's `input` shape.
 * @see {@link GetEvaluationCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEvaluationCommand = /** @class */ (function (_super) {
    __extends(GetEvaluationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEvaluationCommand(input) {
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
    GetEvaluationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "GetEvaluationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEvaluationInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetEvaluationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEvaluationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetEvaluationCommand(input, context);
    };
    GetEvaluationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetEvaluationCommand(output, context);
    };
    return GetEvaluationCommand;
}($Command));
export { GetEvaluationCommand };
//# sourceMappingURL=GetEvaluationCommand.js.map