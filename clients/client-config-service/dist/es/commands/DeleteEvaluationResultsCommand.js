import { __extends } from "tslib";
import { DeleteEvaluationResultsRequest, DeleteEvaluationResultsResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteEvaluationResultsCommand, serializeAws_json1_1DeleteEvaluationResultsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the evaluation results for the specified AWS Config
 * 			rule. You can specify one AWS Config rule per request. After you
 * 			delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating
 * 			your AWS resources against the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteEvaluationResultsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteEvaluationResultsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteEvaluationResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEvaluationResultsCommandInput} for command's `input` shape.
 * @see {@link DeleteEvaluationResultsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEvaluationResultsCommand = /** @class */ (function (_super) {
    __extends(DeleteEvaluationResultsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEvaluationResultsCommand(input) {
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
    DeleteEvaluationResultsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteEvaluationResultsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEvaluationResultsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEvaluationResultsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEvaluationResultsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEvaluationResultsCommand(input, context);
    };
    DeleteEvaluationResultsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEvaluationResultsCommand(output, context);
    };
    return DeleteEvaluationResultsCommand;
}($Command));
export { DeleteEvaluationResultsCommand };
//# sourceMappingURL=DeleteEvaluationResultsCommand.js.map