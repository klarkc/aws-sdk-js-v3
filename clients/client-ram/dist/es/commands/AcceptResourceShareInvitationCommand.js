import { __extends } from "tslib";
import { AcceptResourceShareInvitationRequest, AcceptResourceShareInvitationResponse } from "../models/models_0";
import { deserializeAws_restJson1AcceptResourceShareInvitationCommand, serializeAws_restJson1AcceptResourceShareInvitationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts an invitation to a resource share from another AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AcceptResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AcceptResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AcceptResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptResourceShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptResourceShareInvitationCommand = /** @class */ (function (_super) {
    __extends(AcceptResourceShareInvitationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptResourceShareInvitationCommand(input) {
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
    AcceptResourceShareInvitationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "AcceptResourceShareInvitationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptResourceShareInvitationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptResourceShareInvitationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptResourceShareInvitationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AcceptResourceShareInvitationCommand(input, context);
    };
    AcceptResourceShareInvitationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AcceptResourceShareInvitationCommand(output, context);
    };
    return AcceptResourceShareInvitationCommand;
}($Command));
export { AcceptResourceShareInvitationCommand };
//# sourceMappingURL=AcceptResourceShareInvitationCommand.js.map