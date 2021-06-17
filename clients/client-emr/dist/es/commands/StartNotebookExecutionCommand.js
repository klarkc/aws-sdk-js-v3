import { __extends } from "tslib";
import { StartNotebookExecutionInput, StartNotebookExecutionOutput } from "../models/models_0";
import { deserializeAws_json1_1StartNotebookExecutionCommand, serializeAws_json1_1StartNotebookExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, StartNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, StartNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new StartNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link StartNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartNotebookExecutionCommand = /** @class */ (function (_super) {
    __extends(StartNotebookExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartNotebookExecutionCommand(input) {
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
    StartNotebookExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "StartNotebookExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartNotebookExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartNotebookExecutionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartNotebookExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartNotebookExecutionCommand(input, context);
    };
    StartNotebookExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartNotebookExecutionCommand(output, context);
    };
    return StartNotebookExecutionCommand;
}($Command));
export { StartNotebookExecutionCommand };
//# sourceMappingURL=StartNotebookExecutionCommand.js.map