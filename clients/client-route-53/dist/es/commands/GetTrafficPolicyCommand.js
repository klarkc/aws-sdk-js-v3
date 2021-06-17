import { __extends } from "tslib";
import { GetTrafficPolicyRequest, GetTrafficPolicyResponse } from "../models/models_0";
import { deserializeAws_restXmlGetTrafficPolicyCommand, serializeAws_restXmlGetTrafficPolicyCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specific traffic policy version.</p>
 * 		       <p>For information about how of deleting a traffic policy affects the response from <code>GetTrafficPolicy</code>, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTrafficPolicyCommand = /** @class */ (function (_super) {
    __extends(GetTrafficPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTrafficPolicyCommand(input) {
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
    GetTrafficPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetTrafficPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTrafficPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTrafficPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTrafficPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetTrafficPolicyCommand(input, context);
    };
    GetTrafficPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetTrafficPolicyCommand(output, context);
    };
    return GetTrafficPolicyCommand;
}($Command));
export { GetTrafficPolicyCommand };
//# sourceMappingURL=GetTrafficPolicyCommand.js.map