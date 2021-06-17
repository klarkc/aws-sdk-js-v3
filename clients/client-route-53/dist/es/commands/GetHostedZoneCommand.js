import { __extends } from "tslib";
import { GetHostedZoneRequest, GetHostedZoneResponse } from "../models/models_0";
import { deserializeAws_restXmlGetHostedZoneCommand, serializeAws_restXmlGetHostedZoneCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specified hosted zone including the four name servers assigned to the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostedZoneCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHostedZoneCommand = /** @class */ (function (_super) {
    __extends(GetHostedZoneCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHostedZoneCommand(input) {
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
    GetHostedZoneCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetHostedZoneCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHostedZoneRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHostedZoneResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHostedZoneCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetHostedZoneCommand(input, context);
    };
    GetHostedZoneCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetHostedZoneCommand(output, context);
    };
    return GetHostedZoneCommand;
}($Command));
export { GetHostedZoneCommand };
//# sourceMappingURL=GetHostedZoneCommand.js.map