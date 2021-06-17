import { __extends } from "tslib";
import { GetDNSSECRequest, GetDNSSECResponse } from "../models/models_0";
import { deserializeAws_restXmlGetDNSSECCommand, serializeAws_restXmlGetDNSSECCommand } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about DNSSEC for a specific hosted zone, including the key-signing keys (KSKs) in the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetDNSSECCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDNSSECCommandInput} for command's `input` shape.
 * @see {@link GetDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDNSSECCommand = /** @class */ (function (_super) {
    __extends(GetDNSSECCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDNSSECCommand(input) {
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
    GetDNSSECCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetDNSSECCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDNSSECRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDNSSECResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDNSSECCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetDNSSECCommand(input, context);
    };
    GetDNSSECCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetDNSSECCommand(output, context);
    };
    return GetDNSSECCommand;
}($Command));
export { GetDNSSECCommand };
//# sourceMappingURL=GetDNSSECCommand.js.map