import { __extends } from "tslib";
import { GetResourceShareInvitationsRequest, GetResourceShareInvitationsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetResourceShareInvitationsCommand, serializeAws_restJson1GetResourceShareInvitationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the invitations for resource sharing that you've received.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareInvitationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareInvitationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetResourceShareInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceShareInvitationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareInvitationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceShareInvitationsCommand = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourceShareInvitationsCommand(input) {
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
    GetResourceShareInvitationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "GetResourceShareInvitationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourceShareInvitationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourceShareInvitationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourceShareInvitationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetResourceShareInvitationsCommand(input, context);
    };
    GetResourceShareInvitationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetResourceShareInvitationsCommand(output, context);
    };
    return GetResourceShareInvitationsCommand;
}($Command));
export { GetResourceShareInvitationsCommand };
//# sourceMappingURL=GetResourceShareInvitationsCommand.js.map