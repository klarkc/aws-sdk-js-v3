import { __extends } from "tslib";
import { StartMLLabelingSetGenerationTaskRunRequest, StartMLLabelingSetGenerationTaskRunResponse, } from "../models/models_1";
import { deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand, serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the active learning workflow for your machine learning transform to improve the
 *       transform's quality by generating label sets and adding labels.</p>
 *
 * 	        <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue will have
 *       generated a "labeling set" or a set of questions for humans to answer.</p>
 *
 *          <p>In the case of the <code>FindMatches</code> transform, these questions are of the form,
 *       “What is the correct way to group these rows together into groups composed entirely of
 *       matching records?” </p>
 *
 *          <p>After the labeling process is finished, you can upload your labels with a call to
 *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
 *       all future runs of the machine learning transform will use the new and improved labels and
 *       perform a higher-quality transformation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartMLLabelingSetGenerationTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMLLabelingSetGenerationTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMLLabelingSetGenerationTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMLLabelingSetGenerationTaskRunCommand = /** @class */ (function (_super) {
    __extends(StartMLLabelingSetGenerationTaskRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMLLabelingSetGenerationTaskRunCommand(input) {
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
    StartMLLabelingSetGenerationTaskRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StartMLLabelingSetGenerationTaskRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMLLabelingSetGenerationTaskRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartMLLabelingSetGenerationTaskRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMLLabelingSetGenerationTaskRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand(input, context);
    };
    StartMLLabelingSetGenerationTaskRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand(output, context);
    };
    return StartMLLabelingSetGenerationTaskRunCommand;
}($Command));
export { StartMLLabelingSetGenerationTaskRunCommand };
//# sourceMappingURL=StartMLLabelingSetGenerationTaskRunCommand.js.map