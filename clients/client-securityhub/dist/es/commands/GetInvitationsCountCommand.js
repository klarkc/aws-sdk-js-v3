import { __extends } from "tslib";
import { GetInvitationsCountRequest, GetInvitationsCountResponse } from "../models/models_1";
import { deserializeAws_restJson1GetInvitationsCountCommand, serializeAws_restJson1GetInvitationsCountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the count of all Security Hub membership invitations that were sent to the
 *          current member account, not including the currently accepted invitation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInvitationsCountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInvitationsCountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetInvitationsCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInvitationsCountCommandInput} for command's `input` shape.
 * @see {@link GetInvitationsCountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInvitationsCountCommand = /** @class */ (function (_super) {
    __extends(GetInvitationsCountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInvitationsCountCommand(input) {
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
    GetInvitationsCountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "GetInvitationsCountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInvitationsCountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInvitationsCountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInvitationsCountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetInvitationsCountCommand(input, context);
    };
    GetInvitationsCountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetInvitationsCountCommand(output, context);
    };
    return GetInvitationsCountCommand;
}($Command));
export { GetInvitationsCountCommand };
//# sourceMappingURL=GetInvitationsCountCommand.js.map