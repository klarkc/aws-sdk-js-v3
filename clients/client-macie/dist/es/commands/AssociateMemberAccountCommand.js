import { __extends } from "tslib";
import { AssociateMemberAccountRequest } from "../models/models_0";
import { deserializeAws_json1_1AssociateMemberAccountCommand, serializeAws_json1_1AssociateMemberAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a specified AWS account with Amazon Macie Classic as a member
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, AssociateMemberAccountCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, AssociateMemberAccountCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new AssociateMemberAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateMemberAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberAccountCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateMemberAccountCommand = /** @class */ (function (_super) {
    __extends(AssociateMemberAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateMemberAccountCommand(input) {
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
    AssociateMemberAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MacieClient";
        var commandName = "AssociateMemberAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateMemberAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateMemberAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateMemberAccountCommand(input, context);
    };
    AssociateMemberAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateMemberAccountCommand(output, context);
    };
    return AssociateMemberAccountCommand;
}($Command));
export { AssociateMemberAccountCommand };
//# sourceMappingURL=AssociateMemberAccountCommand.js.map