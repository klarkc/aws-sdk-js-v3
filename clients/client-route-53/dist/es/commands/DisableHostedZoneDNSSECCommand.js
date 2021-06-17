import { __extends } from "tslib";
import { DisableHostedZoneDNSSECRequest, DisableHostedZoneDNSSECResponse } from "../models/models_0";
import { deserializeAws_restXmlDisableHostedZoneDNSSECCommand, serializeAws_restXmlDisableHostedZoneDNSSECCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any key-signing keys (KSKs)
 * 		that are active in the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DisableHostedZoneDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DisableHostedZoneDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DisableHostedZoneDNSSECCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableHostedZoneDNSSECCommandInput} for command's `input` shape.
 * @see {@link DisableHostedZoneDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableHostedZoneDNSSECCommand = /** @class */ (function (_super) {
    __extends(DisableHostedZoneDNSSECCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableHostedZoneDNSSECCommand(input) {
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
    DisableHostedZoneDNSSECCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "DisableHostedZoneDNSSECCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableHostedZoneDNSSECRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableHostedZoneDNSSECResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableHostedZoneDNSSECCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDisableHostedZoneDNSSECCommand(input, context);
    };
    DisableHostedZoneDNSSECCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDisableHostedZoneDNSSECCommand(output, context);
    };
    return DisableHostedZoneDNSSECCommand;
}($Command));
export { DisableHostedZoneDNSSECCommand };
//# sourceMappingURL=DisableHostedZoneDNSSECCommand.js.map