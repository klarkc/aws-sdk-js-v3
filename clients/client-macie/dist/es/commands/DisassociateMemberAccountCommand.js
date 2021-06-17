import { __extends } from "tslib";
import { DisassociateMemberAccountRequest } from "../models/models_0";
import { deserializeAws_json1_1DisassociateMemberAccountCommand, serializeAws_json1_1DisassociateMemberAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified member account from Amazon Macie Classic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, DisassociateMemberAccountCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, DisassociateMemberAccountCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new DisassociateMemberAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMemberAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberAccountCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateMemberAccountCommand = /** @class */ (function (_super) {
    __extends(DisassociateMemberAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateMemberAccountCommand(input) {
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
    DisassociateMemberAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MacieClient";
        var commandName = "DisassociateMemberAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateMemberAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateMemberAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateMemberAccountCommand(input, context);
    };
    DisassociateMemberAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateMemberAccountCommand(output, context);
    };
    return DisassociateMemberAccountCommand;
}($Command));
export { DisassociateMemberAccountCommand };
//# sourceMappingURL=DisassociateMemberAccountCommand.js.map