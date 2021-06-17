import { __extends } from "tslib";
import { VerifyDomainDkimRequest, VerifyDomainDkimResponse } from "../models/models_0";
import { deserializeAws_queryVerifyDomainDkimCommand, serializeAws_queryVerifyDomainDkimCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a set of DKIM tokens for a domain identity.</p>
 *         <important>
 *             <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you
 *                 specify is added to the list of identities that are associated with your account.
 *                 This is true even if you haven't already associated the domain with your account by
 *                 using the <code>VerifyDomainIdentity</code> operation. However, you can't send email
 *                 from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you
 *                 successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for
 *                 it</a>.</p>
 *         </important>
 *         <p>You use the tokens that are generated by this operation to create CNAME records. When
 *             Amazon SES detects that you've added these records to the DNS configuration for a domain, you
 *             can start sending email from that domain. You can start sending email even if you
 *             haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS
 *             configuration for your domain. All email that you send from the domain is authenticated
 *             using DKIM.</p>
 *         <p>To create the CNAME records for DKIM authentication, use the following values:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Name</b>:
 *                         <i>token</i>._domainkey.<i>example.com</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Type</b>: CNAME</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Value</b>:
 *                     <i>token</i>.dkim.amazonses.com</p>
 *             </li>
 *          </ul>
 *         <p>In the preceding example, replace <i>token</i> with one of the tokens
 *             that are generated when you execute this operation. Replace
 *                 <i>example.com</i> with your domain. Repeat this process for each
 *             token that's generated by this operation.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyDomainDkimCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyDomainDkimCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new VerifyDomainDkimCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyDomainDkimCommandInput} for command's `input` shape.
 * @see {@link VerifyDomainDkimCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
var VerifyDomainDkimCommand = /** @class */ (function (_super) {
    __extends(VerifyDomainDkimCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function VerifyDomainDkimCommand(input) {
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
    VerifyDomainDkimCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESClient";
        var commandName = "VerifyDomainDkimCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: VerifyDomainDkimRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VerifyDomainDkimResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    VerifyDomainDkimCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryVerifyDomainDkimCommand(input, context);
    };
    VerifyDomainDkimCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryVerifyDomainDkimCommand(output, context);
    };
    return VerifyDomainDkimCommand;
}($Command));
export { VerifyDomainDkimCommand };
//# sourceMappingURL=VerifyDomainDkimCommand.js.map