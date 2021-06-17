import { __extends } from "tslib";
import { UpdateDomainNameserversRequest, UpdateDomainNameserversResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateDomainNameserversCommand, serializeAws_json1_1UpdateDomainNameserversCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation replaces the current set of name servers for the domain with the specified set of name servers.
 * 			If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p>
 * 		       <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action.
 * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateDomainNameserversCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateDomainNameserversCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new UpdateDomainNameserversCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainNameserversCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainNameserversCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDomainNameserversCommand = /** @class */ (function (_super) {
    __extends(UpdateDomainNameserversCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDomainNameserversCommand(input) {
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
    UpdateDomainNameserversCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "UpdateDomainNameserversCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDomainNameserversRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDomainNameserversResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDomainNameserversCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDomainNameserversCommand(input, context);
    };
    UpdateDomainNameserversCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDomainNameserversCommand(output, context);
    };
    return UpdateDomainNameserversCommand;
}($Command));
export { UpdateDomainNameserversCommand };
//# sourceMappingURL=UpdateDomainNameserversCommand.js.map