import { __extends } from "tslib";
import { ListOutpostsInput, ListOutpostsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListOutpostsCommand, serializeAws_restJson1ListOutpostsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the Outposts for your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListOutpostsCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListOutpostsCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new ListOutpostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOutpostsCommandInput} for command's `input` shape.
 * @see {@link ListOutpostsCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOutpostsCommand = /** @class */ (function (_super) {
    __extends(ListOutpostsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOutpostsCommand(input) {
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
    ListOutpostsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OutpostsClient";
        var commandName = "ListOutpostsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOutpostsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListOutpostsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOutpostsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListOutpostsCommand(input, context);
    };
    ListOutpostsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListOutpostsCommand(output, context);
    };
    return ListOutpostsCommand;
}($Command));
export { ListOutpostsCommand };
//# sourceMappingURL=ListOutpostsCommand.js.map