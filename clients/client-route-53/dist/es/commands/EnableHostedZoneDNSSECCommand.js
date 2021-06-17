import { __extends } from "tslib";
import { EnableHostedZoneDNSSECRequest, EnableHostedZoneDNSSECResponse } from "../models/models_0";
import { deserializeAws_restXmlEnableHostedZoneDNSSECCommand, serializeAws_restXmlEnableHostedZoneDNSSECCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables DNSSEC signing in a specific hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, EnableHostedZoneDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, EnableHostedZoneDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new EnableHostedZoneDNSSECCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableHostedZoneDNSSECCommandInput} for command's `input` shape.
 * @see {@link EnableHostedZoneDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableHostedZoneDNSSECCommand = /** @class */ (function (_super) {
    __extends(EnableHostedZoneDNSSECCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableHostedZoneDNSSECCommand(input) {
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
    EnableHostedZoneDNSSECCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "EnableHostedZoneDNSSECCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableHostedZoneDNSSECRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableHostedZoneDNSSECResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableHostedZoneDNSSECCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlEnableHostedZoneDNSSECCommand(input, context);
    };
    EnableHostedZoneDNSSECCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlEnableHostedZoneDNSSECCommand(output, context);
    };
    return EnableHostedZoneDNSSECCommand;
}($Command));
export { EnableHostedZoneDNSSECCommand };
//# sourceMappingURL=EnableHostedZoneDNSSECCommand.js.map