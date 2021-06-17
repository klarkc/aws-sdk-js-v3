import { __extends } from "tslib";
import { GetTrafficPolicyInstanceCountRequest, GetTrafficPolicyInstanceCountResponse } from "../models/models_0";
import { deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand, serializeAws_restXmlGetTrafficPolicyInstanceCountCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the number of traffic policy instances that are associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyInstanceCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyInstanceCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetTrafficPolicyInstanceCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTrafficPolicyInstanceCountCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyInstanceCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTrafficPolicyInstanceCountCommand = /** @class */ (function (_super) {
    __extends(GetTrafficPolicyInstanceCountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTrafficPolicyInstanceCountCommand(input) {
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
    GetTrafficPolicyInstanceCountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetTrafficPolicyInstanceCountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTrafficPolicyInstanceCountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTrafficPolicyInstanceCountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTrafficPolicyInstanceCountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetTrafficPolicyInstanceCountCommand(input, context);
    };
    GetTrafficPolicyInstanceCountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand(output, context);
    };
    return GetTrafficPolicyInstanceCountCommand;
}($Command));
export { GetTrafficPolicyInstanceCountCommand };
//# sourceMappingURL=GetTrafficPolicyInstanceCountCommand.js.map