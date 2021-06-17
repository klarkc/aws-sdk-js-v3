import { __extends } from "tslib";
import { UpdateShareInvitationInput, UpdateShareInvitationOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateShareInvitationCommand, serializeAws_restJson1UpdateShareInvitationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a workload invitation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateShareInvitationCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateShareInvitationCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateShareInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateShareInvitationCommandInput} for command's `input` shape.
 * @see {@link UpdateShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateShareInvitationCommand = /** @class */ (function (_super) {
    __extends(UpdateShareInvitationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateShareInvitationCommand(input) {
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
    UpdateShareInvitationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "UpdateShareInvitationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateShareInvitationInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateShareInvitationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateShareInvitationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateShareInvitationCommand(input, context);
    };
    UpdateShareInvitationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateShareInvitationCommand(output, context);
    };
    return UpdateShareInvitationCommand;
}($Command));
export { UpdateShareInvitationCommand };
//# sourceMappingURL=UpdateShareInvitationCommand.js.map