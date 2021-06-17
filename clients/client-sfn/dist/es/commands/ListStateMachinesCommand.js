import { __extends } from "tslib";
import { ListStateMachinesInput, ListStateMachinesOutput } from "../models/models_0";
import { deserializeAws_json1_0ListStateMachinesCommand, serializeAws_json1_0ListStateMachinesCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the existing state machines.</p>
 *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
 *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, ListStateMachinesCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, ListStateMachinesCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new ListStateMachinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStateMachinesCommandInput} for command's `input` shape.
 * @see {@link ListStateMachinesCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStateMachinesCommand = /** @class */ (function (_super) {
    __extends(ListStateMachinesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStateMachinesCommand(input) {
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
    ListStateMachinesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "ListStateMachinesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStateMachinesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListStateMachinesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStateMachinesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListStateMachinesCommand(input, context);
    };
    ListStateMachinesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListStateMachinesCommand(output, context);
    };
    return ListStateMachinesCommand;
}($Command));
export { ListStateMachinesCommand };
//# sourceMappingURL=ListStateMachinesCommand.js.map