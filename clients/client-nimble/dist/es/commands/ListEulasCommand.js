import { __extends } from "tslib";
import { ListEulasRequest, ListEulasResponse } from "../models/models_0";
import { deserializeAws_restJson1ListEulasCommand, serializeAws_restJson1ListEulasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List Eulas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListEulasCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListEulasCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListEulasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEulasCommandInput} for command's `input` shape.
 * @see {@link ListEulasCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEulasCommand = /** @class */ (function (_super) {
    __extends(ListEulasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEulasCommand(input) {
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
    ListEulasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "ListEulasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEulasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEulasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEulasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEulasCommand(input, context);
    };
    ListEulasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEulasCommand(output, context);
    };
    return ListEulasCommand;
}($Command));
export { ListEulasCommand };
//# sourceMappingURL=ListEulasCommand.js.map