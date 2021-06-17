import { __extends } from "tslib";
import { AcceptEulasRequest, AcceptEulasResponse } from "../models/models_0";
import { deserializeAws_restJson1AcceptEulasCommand, serializeAws_restJson1AcceptEulasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accept EULAs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, AcceptEulasCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, AcceptEulasCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new AcceptEulasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptEulasCommandInput} for command's `input` shape.
 * @see {@link AcceptEulasCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptEulasCommand = /** @class */ (function (_super) {
    __extends(AcceptEulasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptEulasCommand(input) {
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
    AcceptEulasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "AcceptEulasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptEulasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptEulasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptEulasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AcceptEulasCommand(input, context);
    };
    AcceptEulasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AcceptEulasCommand(output, context);
    };
    return AcceptEulasCommand;
}($Command));
export { AcceptEulasCommand };
//# sourceMappingURL=AcceptEulasCommand.js.map