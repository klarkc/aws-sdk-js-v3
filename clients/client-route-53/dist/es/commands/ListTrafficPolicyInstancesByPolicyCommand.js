import { __extends } from "tslib";
import { ListTrafficPolicyInstancesByPolicyRequest, ListTrafficPolicyInstancesByPolicyResponse, } from "../models/models_0";
import { deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand, serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the traffic policy instances that you created by using a specify traffic policy version.</p>
 * 		       <note>
 * 			         <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request,
 * 				there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For
 * 				more information, see the <code>State</code> response element.</p>
 * 		       </note>
 * 		       <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the
 * 			<code>MaxItems</code> parameter to list them in groups of up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyInstancesByPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyInstancesByPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTrafficPolicyInstancesByPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPolicyInstancesByPolicyCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyInstancesByPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrafficPolicyInstancesByPolicyCommand = /** @class */ (function (_super) {
    __extends(ListTrafficPolicyInstancesByPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrafficPolicyInstancesByPolicyCommand(input) {
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
    ListTrafficPolicyInstancesByPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListTrafficPolicyInstancesByPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrafficPolicyInstancesByPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrafficPolicyInstancesByPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrafficPolicyInstancesByPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand(input, context);
    };
    ListTrafficPolicyInstancesByPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand(output, context);
    };
    return ListTrafficPolicyInstancesByPolicyCommand;
}($Command));
export { ListTrafficPolicyInstancesByPolicyCommand };
//# sourceMappingURL=ListTrafficPolicyInstancesByPolicyCommand.js.map