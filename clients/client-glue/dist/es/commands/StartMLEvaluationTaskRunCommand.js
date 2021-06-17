import { __extends } from "tslib";
import { StartMLEvaluationTaskRunRequest, StartMLEvaluationTaskRunResponse } from "../models/models_1";
import { deserializeAws_json1_1StartMLEvaluationTaskRunCommand, serializeAws_json1_1StartMLEvaluationTaskRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a task to estimate the quality of the transform. </p>
 *
 * 	        <p>When you provide label sets as examples of truth, AWS Glue machine learning uses some of
 *       those examples to learn from them. The rest of the labels are used as a test to estimate
 *       quality.</p>
 *
 * 	        <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more
 *       information about the stats of the <code>EvaluationTaskRun</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLEvaluationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLEvaluationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartMLEvaluationTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMLEvaluationTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMLEvaluationTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMLEvaluationTaskRunCommand = /** @class */ (function (_super) {
    __extends(StartMLEvaluationTaskRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMLEvaluationTaskRunCommand(input) {
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
    StartMLEvaluationTaskRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StartMLEvaluationTaskRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMLEvaluationTaskRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartMLEvaluationTaskRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMLEvaluationTaskRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartMLEvaluationTaskRunCommand(input, context);
    };
    StartMLEvaluationTaskRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartMLEvaluationTaskRunCommand(output, context);
    };
    return StartMLEvaluationTaskRunCommand;
}($Command));
export { StartMLEvaluationTaskRunCommand };
//# sourceMappingURL=StartMLEvaluationTaskRunCommand.js.map