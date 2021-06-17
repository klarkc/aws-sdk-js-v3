import { __extends } from "tslib";
import { ListNotebookExecutionsInput, ListNotebookExecutionsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListNotebookExecutionsCommand, serializeAws_json1_1ListNotebookExecutionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides summaries of all notebook executions. You can filter the list based on multiple
 *          criteria such as status, time range, and editor id. Returns a maximum of 50 notebook
 *          executions and a marker to track the paging of a longer notebook execution list across
 *          multiple <code>ListNotebookExecution</code> calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListNotebookExecutionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListNotebookExecutionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListNotebookExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotebookExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookExecutionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListNotebookExecutionsCommand = /** @class */ (function (_super) {
    __extends(ListNotebookExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListNotebookExecutionsCommand(input) {
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
    ListNotebookExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ListNotebookExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListNotebookExecutionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListNotebookExecutionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListNotebookExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListNotebookExecutionsCommand(input, context);
    };
    ListNotebookExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListNotebookExecutionsCommand(output, context);
    };
    return ListNotebookExecutionsCommand;
}($Command));
export { ListNotebookExecutionsCommand };
//# sourceMappingURL=ListNotebookExecutionsCommand.js.map