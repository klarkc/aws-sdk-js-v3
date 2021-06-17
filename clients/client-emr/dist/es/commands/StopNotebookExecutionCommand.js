import { __extends } from "tslib";
import { StopNotebookExecutionInput } from "../models/models_0";
import { deserializeAws_json1_1StopNotebookExecutionCommand, serializeAws_json1_1StopNotebookExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, StopNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, StopNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new StopNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link StopNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopNotebookExecutionCommand = /** @class */ (function (_super) {
    __extends(StopNotebookExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopNotebookExecutionCommand(input) {
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
    StopNotebookExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "StopNotebookExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopNotebookExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopNotebookExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopNotebookExecutionCommand(input, context);
    };
    StopNotebookExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopNotebookExecutionCommand(output, context);
    };
    return StopNotebookExecutionCommand;
}($Command));
export { StopNotebookExecutionCommand };
//# sourceMappingURL=StopNotebookExecutionCommand.js.map