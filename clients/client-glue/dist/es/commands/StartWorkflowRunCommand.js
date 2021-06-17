import { __extends } from "tslib";
import { StartWorkflowRunRequest, StartWorkflowRunResponse } from "../models/models_1";
import { deserializeAws_json1_1StartWorkflowRunCommand, serializeAws_json1_1StartWorkflowRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a new run of the specified workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartWorkflowRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link StartWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartWorkflowRunCommand = /** @class */ (function (_super) {
    __extends(StartWorkflowRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartWorkflowRunCommand(input) {
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
    StartWorkflowRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StartWorkflowRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartWorkflowRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartWorkflowRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartWorkflowRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartWorkflowRunCommand(input, context);
    };
    StartWorkflowRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartWorkflowRunCommand(output, context);
    };
    return StartWorkflowRunCommand;
}($Command));
export { StartWorkflowRunCommand };
//# sourceMappingURL=StartWorkflowRunCommand.js.map