import { __extends } from "tslib";
import { CancelMLTaskRunRequest, CancelMLTaskRunResponse } from "../models/models_0";
import { deserializeAws_json1_1CancelMLTaskRunCommand, serializeAws_json1_1CancelMLTaskRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that AWS
 *       Glue runs on your behalf as part of various machine learning workflows. You can cancel a
 *       machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task
 *       run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CancelMLTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CancelMLTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CancelMLTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelMLTaskRunCommandInput} for command's `input` shape.
 * @see {@link CancelMLTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelMLTaskRunCommand = /** @class */ (function (_super) {
    __extends(CancelMLTaskRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelMLTaskRunCommand(input) {
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
    CancelMLTaskRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CancelMLTaskRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelMLTaskRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelMLTaskRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelMLTaskRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelMLTaskRunCommand(input, context);
    };
    CancelMLTaskRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelMLTaskRunCommand(output, context);
    };
    return CancelMLTaskRunCommand;
}($Command));
export { CancelMLTaskRunCommand };
//# sourceMappingURL=CancelMLTaskRunCommand.js.map