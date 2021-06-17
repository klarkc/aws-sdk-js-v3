import { __extends } from "tslib";
import { ResumeWorkflowRunRequest, ResumeWorkflowRunResponse } from "../models/models_1";
import { deserializeAws_json1_1ResumeWorkflowRunCommand, serializeAws_json1_1ResumeWorkflowRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ResumeWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ResumeWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ResumeWorkflowRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link ResumeWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResumeWorkflowRunCommand = /** @class */ (function (_super) {
    __extends(ResumeWorkflowRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResumeWorkflowRunCommand(input) {
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
    ResumeWorkflowRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "ResumeWorkflowRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResumeWorkflowRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResumeWorkflowRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResumeWorkflowRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResumeWorkflowRunCommand(input, context);
    };
    ResumeWorkflowRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResumeWorkflowRunCommand(output, context);
    };
    return ResumeWorkflowRunCommand;
}($Command));
export { ResumeWorkflowRunCommand };
//# sourceMappingURL=ResumeWorkflowRunCommand.js.map