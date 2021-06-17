import { __extends } from "tslib";
import { StartExportLabelsTaskRunRequest, StartExportLabelsTaskRunResponse } from "../models/models_1";
import { deserializeAws_json1_1StartExportLabelsTaskRunCommand, serializeAws_json1_1StartExportLabelsTaskRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Begins an asynchronous task to export all labeled data for a particular transform. This
 *       task is the only label-related API call that is not part of the typical active learning
 *       workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with
 *       all of your existing labels at the same time, such as when you want to remove or change labels
 *       that were previously submitted as truth. This API operation accepts the
 *         <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage
 *       Service (Amazon S3) path to export the labels to. The operation returns a
 *         <code>TaskRunId</code>. You can check on the status of your task run by calling the
 *         <code>GetMLTaskRun</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartExportLabelsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartExportLabelsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartExportLabelsTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExportLabelsTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartExportLabelsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartExportLabelsTaskRunCommand = /** @class */ (function (_super) {
    __extends(StartExportLabelsTaskRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartExportLabelsTaskRunCommand(input) {
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
    StartExportLabelsTaskRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StartExportLabelsTaskRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartExportLabelsTaskRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartExportLabelsTaskRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartExportLabelsTaskRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartExportLabelsTaskRunCommand(input, context);
    };
    StartExportLabelsTaskRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartExportLabelsTaskRunCommand(output, context);
    };
    return StartExportLabelsTaskRunCommand;
}($Command));
export { StartExportLabelsTaskRunCommand };
//# sourceMappingURL=StartExportLabelsTaskRunCommand.js.map