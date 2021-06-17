import { __extends } from "tslib";
import { DeleteEmailIdentityPolicyRequest, DeleteEmailIdentityPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteEmailIdentityPolicyCommand, serializeAws_restJson1DeleteEmailIdentityPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified sending authorization policy for the given identity (an email
 *             address or a domain). This API returns successfully even if a policy with the specified
 *             name does not exist.</p>
 *         <note>
 *             <p>This API is for the identity owner only. If you have not verified the identity,
 *                 this API will return an error.</p>
 *         </note>
 *         <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteEmailIdentityPolicyCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteEmailIdentityPolicyCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new DeleteEmailIdentityPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEmailIdentityPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailIdentityPolicyCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEmailIdentityPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteEmailIdentityPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEmailIdentityPolicyCommand(input) {
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
    DeleteEmailIdentityPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "DeleteEmailIdentityPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEmailIdentityPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEmailIdentityPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEmailIdentityPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteEmailIdentityPolicyCommand(input, context);
    };
    DeleteEmailIdentityPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteEmailIdentityPolicyCommand(output, context);
    };
    return DeleteEmailIdentityPolicyCommand;
}($Command));
export { DeleteEmailIdentityPolicyCommand };
//# sourceMappingURL=DeleteEmailIdentityPolicyCommand.js.map