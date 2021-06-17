import { __extends } from "tslib";
import { ListUniqueProblemsRequest, ListUniqueProblemsResult } from "../models/models_0";
import { deserializeAws_json1_1ListUniqueProblemsCommand, serializeAws_json1_1ListUniqueProblemsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about unique problems, such as exceptions or crashes.</p>
 *         <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example,
 *             if a call in your application consistently raises an exception (<code>OutOfBoundsException in
 *                 MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many
 *             individual entries for that exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListUniqueProblemsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListUniqueProblemsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListUniqueProblemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUniqueProblemsCommandInput} for command's `input` shape.
 * @see {@link ListUniqueProblemsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUniqueProblemsCommand = /** @class */ (function (_super) {
    __extends(ListUniqueProblemsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUniqueProblemsCommand(input) {
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
    ListUniqueProblemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListUniqueProblemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUniqueProblemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUniqueProblemsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUniqueProblemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListUniqueProblemsCommand(input, context);
    };
    ListUniqueProblemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListUniqueProblemsCommand(output, context);
    };
    return ListUniqueProblemsCommand;
}($Command));
export { ListUniqueProblemsCommand };
//# sourceMappingURL=ListUniqueProblemsCommand.js.map