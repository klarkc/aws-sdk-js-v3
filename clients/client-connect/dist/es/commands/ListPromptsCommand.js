import { __extends } from "tslib";
import { ListPromptsRequest, ListPromptsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPromptsCommand, serializeAws_restJson1ListPromptsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about the prompts for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListPromptsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListPromptsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListPromptsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPromptsCommandInput} for command's `input` shape.
 * @see {@link ListPromptsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPromptsCommand = /** @class */ (function (_super) {
    __extends(ListPromptsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPromptsCommand(input) {
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
    ListPromptsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListPromptsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPromptsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPromptsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPromptsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPromptsCommand(input, context);
    };
    ListPromptsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPromptsCommand(output, context);
    };
    return ListPromptsCommand;
}($Command));
export { ListPromptsCommand };
//# sourceMappingURL=ListPromptsCommand.js.map