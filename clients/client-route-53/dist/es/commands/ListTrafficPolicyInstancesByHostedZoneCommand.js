import { __extends } from "tslib";
import { ListTrafficPolicyInstancesByHostedZoneRequest, ListTrafficPolicyInstancesByHostedZoneResponse, } from "../models/models_0";
import { deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand, serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the traffic policy instances that you created in a specified hosted zone.</p>
 * 		       <note>
 * 			         <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a
 * 				brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information,
 * 				see the <code>State</code> response element.</p>
 * 		       </note>
 * 		       <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the
 * 			<code>MaxItems</code> parameter to list them in groups of up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyInstancesByHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyInstancesByHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTrafficPolicyInstancesByHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPolicyInstancesByHostedZoneCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyInstancesByHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrafficPolicyInstancesByHostedZoneCommand = /** @class */ (function (_super) {
    __extends(ListTrafficPolicyInstancesByHostedZoneCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrafficPolicyInstancesByHostedZoneCommand(input) {
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
    ListTrafficPolicyInstancesByHostedZoneCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListTrafficPolicyInstancesByHostedZoneCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrafficPolicyInstancesByHostedZoneRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrafficPolicyInstancesByHostedZoneResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrafficPolicyInstancesByHostedZoneCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand(input, context);
    };
    ListTrafficPolicyInstancesByHostedZoneCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand(output, context);
    };
    return ListTrafficPolicyInstancesByHostedZoneCommand;
}($Command));
export { ListTrafficPolicyInstancesByHostedZoneCommand };
//# sourceMappingURL=ListTrafficPolicyInstancesByHostedZoneCommand.js.map