import { __extends } from "tslib";
import { ListQuickConnectsRequest, ListQuickConnectsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListQuickConnectsCommand, serializeAws_restJson1ListQuickConnectsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Provides information about the quick connects for the specified Amazon Connect instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListQuickConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link ListQuickConnectsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListQuickConnectsCommand = /** @class */ (function (_super) {
    __extends(ListQuickConnectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListQuickConnectsCommand(input) {
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
    ListQuickConnectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListQuickConnectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListQuickConnectsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListQuickConnectsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListQuickConnectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListQuickConnectsCommand(input, context);
    };
    ListQuickConnectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListQuickConnectsCommand(output, context);
    };
    return ListQuickConnectsCommand;
}($Command));
export { ListQuickConnectsCommand };
//# sourceMappingURL=ListQuickConnectsCommand.js.map