"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmailIdentityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts the process of verifying an email identity. An <i>identity</i> is
 *             an email address or domain that you use when you send email. Before you can use an
 *             identity to send email, you first have to verify it. By verifying an identity, you
 *             demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2
 *             permission to send email from the identity.</p>
 *         <p>When you verify an email address, Amazon SES sends an email to the address. Your email
 *             address is verified as soon as you follow the link in the verification email.
 *
 *         </p>
 *         <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code>
 *             object, this operation provides a set of DKIM tokens. You can convert these tokens into
 *             CNAME records, which you then add to the DNS configuration for your domain. Your domain
 *             is verified when Amazon SES detects these records in the DNS configuration for your domain.
 *             This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p>
 *         <p>Alternatively, you can perform the verification process by providing your own
 *             public-private key pair. This verification method is known as Bring Your Own DKIM
 *             (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation
 *             has to include the <code>DkimSigningAttributes</code> object. When you specify this
 *             object, you provide a selector (a component of the DNS record name that identifies the
 *             public key that you want to use for DKIM authentication) and a private key.</p>
 *         <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can
 *             convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your
 *             domain. Your domain is verified when Amazon SES detects these records in the DNS
 *             configuration for your domain. For some DNS providers, it can take 72 hours or more to
 *             complete the domain verification process.</p>
 *         <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateEmailIdentityCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateEmailIdentityCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateEmailIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link CreateEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateEmailIdentityCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SESv2Client";
        const commandName = "CreateEmailIdentityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateEmailIdentityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateEmailIdentityResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateEmailIdentityCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateEmailIdentityCommand(output, context);
    }
}
exports.CreateEmailIdentityCommand = CreateEmailIdentityCommand;
//# sourceMappingURL=CreateEmailIdentityCommand.js.map