import { __extends } from "tslib";
import { CreateEmailIdentityRequest, CreateEmailIdentityResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateEmailIdentityCommand, serializeAws_restJson1CreateEmailIdentityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email
 *             address or domain that you use when you send email. Before you can use an identity to
 *             send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you
 *             demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission
 *             to send email from the address.</p>
 *         <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email
 *             address is verified as soon as you follow the link in the verification email.
 *
 *         </p>
 *         <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can
 *             convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your
 *             domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS
 *             configuration for your domain. It usually takes around 72 hours to complete the domain
 *             verification process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, CreateEmailIdentityCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, CreateEmailIdentityCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new CreateEmailIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link CreateEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEmailIdentityCommand = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEmailIdentityCommand(input) {
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
    CreateEmailIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "CreateEmailIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEmailIdentityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateEmailIdentityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEmailIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateEmailIdentityCommand(input, context);
    };
    CreateEmailIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateEmailIdentityCommand(output, context);
    };
    return CreateEmailIdentityCommand;
}($Command));
export { CreateEmailIdentityCommand };
//# sourceMappingURL=CreateEmailIdentityCommand.js.map