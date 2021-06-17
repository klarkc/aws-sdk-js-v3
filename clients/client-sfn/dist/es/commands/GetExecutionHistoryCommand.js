import { __extends } from "tslib";
import { GetExecutionHistoryInput, GetExecutionHistoryOutput } from "../models/models_0";
import { deserializeAws_json1_0GetExecutionHistoryCommand, serializeAws_json1_0GetExecutionHistoryCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the history of the specified execution as a list of events. By default, the
 *       results are returned in ascending order of the <code>timeStamp</code> of the events. Use the
 *         <code>reverseOrder</code> parameter to get the latest events first.</p>
 *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
 *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, GetExecutionHistoryCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, GetExecutionHistoryCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new GetExecutionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExecutionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetExecutionHistoryCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetExecutionHistoryCommand = /** @class */ (function (_super) {
    __extends(GetExecutionHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetExecutionHistoryCommand(input) {
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
    GetExecutionHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "GetExecutionHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetExecutionHistoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetExecutionHistoryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetExecutionHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetExecutionHistoryCommand(input, context);
    };
    GetExecutionHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetExecutionHistoryCommand(output, context);
    };
    return GetExecutionHistoryCommand;
}($Command));
export { GetExecutionHistoryCommand };
//# sourceMappingURL=GetExecutionHistoryCommand.js.map