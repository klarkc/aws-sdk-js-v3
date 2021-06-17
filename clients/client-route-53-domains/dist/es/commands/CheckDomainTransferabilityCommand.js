import { __extends } from "tslib";
import { CheckDomainTransferabilityRequest, CheckDomainTransferabilityResponse } from "../models/models_0";
import { deserializeAws_json1_1CheckDomainTransferabilityCommand, serializeAws_json1_1CheckDomainTransferabilityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Checks whether a domain name can be transferred to Amazon Route 53. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, CheckDomainTransferabilityCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, CheckDomainTransferabilityCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new CheckDomainTransferabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckDomainTransferabilityCommandInput} for command's `input` shape.
 * @see {@link CheckDomainTransferabilityCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CheckDomainTransferabilityCommand = /** @class */ (function (_super) {
    __extends(CheckDomainTransferabilityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CheckDomainTransferabilityCommand(input) {
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
    CheckDomainTransferabilityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "CheckDomainTransferabilityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CheckDomainTransferabilityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CheckDomainTransferabilityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CheckDomainTransferabilityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CheckDomainTransferabilityCommand(input, context);
    };
    CheckDomainTransferabilityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CheckDomainTransferabilityCommand(output, context);
    };
    return CheckDomainTransferabilityCommand;
}($Command));
export { CheckDomainTransferabilityCommand };
//# sourceMappingURL=CheckDomainTransferabilityCommand.js.map