import { __extends } from "tslib";
import { RejectResourceShareInvitationRequest, RejectResourceShareInvitationResponse } from "../models/models_0";
import { deserializeAws_restJson1RejectResourceShareInvitationCommand, serializeAws_restJson1RejectResourceShareInvitationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rejects an invitation to a resource share from another AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, RejectResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, RejectResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new RejectResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectResourceShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectResourceShareInvitationCommand = /** @class */ (function (_super) {
    __extends(RejectResourceShareInvitationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectResourceShareInvitationCommand(input) {
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
    RejectResourceShareInvitationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "RejectResourceShareInvitationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectResourceShareInvitationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectResourceShareInvitationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectResourceShareInvitationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RejectResourceShareInvitationCommand(input, context);
    };
    RejectResourceShareInvitationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RejectResourceShareInvitationCommand(output, context);
    };
    return RejectResourceShareInvitationCommand;
}($Command));
export { RejectResourceShareInvitationCommand };
//# sourceMappingURL=RejectResourceShareInvitationCommand.js.map