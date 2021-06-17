import { __extends } from "tslib";
import { ListShareInvitationsInput, ListShareInvitationsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListShareInvitationsCommand, serializeAws_restJson1ListShareInvitationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List  the workload invitations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListShareInvitationsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListShareInvitationsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListShareInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListShareInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListShareInvitationsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListShareInvitationsCommand = /** @class */ (function (_super) {
    __extends(ListShareInvitationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListShareInvitationsCommand(input) {
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
    ListShareInvitationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "ListShareInvitationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListShareInvitationsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListShareInvitationsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListShareInvitationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListShareInvitationsCommand(input, context);
    };
    ListShareInvitationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListShareInvitationsCommand(output, context);
    };
    return ListShareInvitationsCommand;
}($Command));
export { ListShareInvitationsCommand };
//# sourceMappingURL=ListShareInvitationsCommand.js.map