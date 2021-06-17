import { __extends } from "tslib";
import { GetHostedZoneCountRequest, GetHostedZoneCountResponse } from "../models/models_0";
import { deserializeAws_restXmlGetHostedZoneCountCommand, serializeAws_restXmlGetHostedZoneCountCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the number of hosted zones that are associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHostedZoneCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostedZoneCountCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHostedZoneCountCommand = /** @class */ (function (_super) {
    __extends(GetHostedZoneCountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHostedZoneCountCommand(input) {
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
    GetHostedZoneCountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetHostedZoneCountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHostedZoneCountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHostedZoneCountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHostedZoneCountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetHostedZoneCountCommand(input, context);
    };
    GetHostedZoneCountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetHostedZoneCountCommand(output, context);
    };
    return GetHostedZoneCountCommand;
}($Command));
export { GetHostedZoneCountCommand };
//# sourceMappingURL=GetHostedZoneCountCommand.js.map