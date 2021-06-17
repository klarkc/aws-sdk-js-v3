import { __extends } from "tslib";
import { RenewDomainRequest, RenewDomainResponse } from "../models/models_0";
import { deserializeAws_json1_1RenewDomainCommand, serializeAws_json1_1RenewDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account.</p>
 * 		       <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the
 * 			expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RenewDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RenewDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new RenewDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RenewDomainCommandInput} for command's `input` shape.
 * @see {@link RenewDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RenewDomainCommand = /** @class */ (function (_super) {
    __extends(RenewDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RenewDomainCommand(input) {
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
    RenewDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "RenewDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RenewDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RenewDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RenewDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RenewDomainCommand(input, context);
    };
    RenewDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RenewDomainCommand(output, context);
    };
    return RenewDomainCommand;
}($Command));
export { RenewDomainCommand };
//# sourceMappingURL=RenewDomainCommand.js.map