import { __extends } from "tslib";
import { UpdateDomainContactPrivacyRequest, UpdateDomainContactPrivacyResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateDomainContactPrivacyCommand, serializeAws_json1_1UpdateDomainContactPrivacyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled,
 * 			contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org
 * 			domains) or with contact information for our registrar associate, Gandi.</p>
 * 		       <p>This operation affects only the contact information for the specified contact type (registrant, administrator, or tech).
 * 			If the request succeeds, Amazon Route 53 returns an operation ID that you can use with
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p>
 * 		       <important>
 *             <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain
 * 			via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision.
 * 			You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the
 * 			Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database.
 * 			For more information on our privacy practices, see
 * 			<a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateDomainContactPrivacyCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateDomainContactPrivacyCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new UpdateDomainContactPrivacyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainContactPrivacyCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainContactPrivacyCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDomainContactPrivacyCommand = /** @class */ (function (_super) {
    __extends(UpdateDomainContactPrivacyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDomainContactPrivacyCommand(input) {
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
    UpdateDomainContactPrivacyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "UpdateDomainContactPrivacyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDomainContactPrivacyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDomainContactPrivacyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDomainContactPrivacyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDomainContactPrivacyCommand(input, context);
    };
    UpdateDomainContactPrivacyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDomainContactPrivacyCommand(output, context);
    };
    return UpdateDomainContactPrivacyCommand;
}($Command));
export { UpdateDomainContactPrivacyCommand };
//# sourceMappingURL=UpdateDomainContactPrivacyCommand.js.map