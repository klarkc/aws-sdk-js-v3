import { __extends } from "tslib";
import { CheckDomainAvailabilityRequest, CheckDomainAvailabilityResponse } from "../models/models_0";
import { deserializeAws_json1_1CheckDomainAvailabilityCommand, serializeAws_json1_1CheckDomainAvailabilityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must
 * 			submit another request to determine the availability of the domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, CheckDomainAvailabilityCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, CheckDomainAvailabilityCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new CheckDomainAvailabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckDomainAvailabilityCommandInput} for command's `input` shape.
 * @see {@link CheckDomainAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CheckDomainAvailabilityCommand = /** @class */ (function (_super) {
    __extends(CheckDomainAvailabilityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CheckDomainAvailabilityCommand(input) {
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
    CheckDomainAvailabilityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "CheckDomainAvailabilityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CheckDomainAvailabilityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CheckDomainAvailabilityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CheckDomainAvailabilityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CheckDomainAvailabilityCommand(input, context);
    };
    CheckDomainAvailabilityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CheckDomainAvailabilityCommand(output, context);
    };
    return CheckDomainAvailabilityCommand;
}($Command));
export { CheckDomainAvailabilityCommand };
//# sourceMappingURL=CheckDomainAvailabilityCommand.js.map