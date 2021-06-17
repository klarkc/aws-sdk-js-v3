import { __extends } from "tslib";
import { GetMLTaskRunRequest, GetMLTaskRunResponse } from "../models/models_1";
import { deserializeAws_json1_1GetMLTaskRunCommand, serializeAws_json1_1GetMLTaskRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets details for a specific task run on a machine learning transform. Machine learning
 *       task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine
 *       learning workflows. You can check the stats of any task run by calling
 *         <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's
 *         <code>TransformID</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetMLTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMLTaskRunCommandInput} for command's `input` shape.
 * @see {@link GetMLTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMLTaskRunCommand = /** @class */ (function (_super) {
    __extends(GetMLTaskRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMLTaskRunCommand(input) {
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
    GetMLTaskRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetMLTaskRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMLTaskRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMLTaskRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMLTaskRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMLTaskRunCommand(input, context);
    };
    GetMLTaskRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMLTaskRunCommand(output, context);
    };
    return GetMLTaskRunCommand;
}($Command));
export { GetMLTaskRunCommand };
//# sourceMappingURL=GetMLTaskRunCommand.js.map