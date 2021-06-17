import { __extends } from "tslib";
import { ListTrafficPolicyInstancesRequest, ListTrafficPolicyInstancesResponse } from "../models/models_0";
import { deserializeAws_restXmlListTrafficPolicyInstancesCommand, serializeAws_restXmlListTrafficPolicyInstancesCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the traffic policy instances that you created by using the current AWS account.</p>
 * 		       <note>
 * 			         <p>After you submit an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the
 * 				resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p>
 * 		       </note>
 * 		       <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the
 * 			<code>MaxItems</code> parameter to list them in groups of up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyInstancesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyInstancesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTrafficPolicyInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPolicyInstancesCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyInstancesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrafficPolicyInstancesCommand = /** @class */ (function (_super) {
    __extends(ListTrafficPolicyInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrafficPolicyInstancesCommand(input) {
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
    ListTrafficPolicyInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListTrafficPolicyInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrafficPolicyInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrafficPolicyInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrafficPolicyInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListTrafficPolicyInstancesCommand(input, context);
    };
    ListTrafficPolicyInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListTrafficPolicyInstancesCommand(output, context);
    };
    return ListTrafficPolicyInstancesCommand;
}($Command));
export { ListTrafficPolicyInstancesCommand };
//# sourceMappingURL=ListTrafficPolicyInstancesCommand.js.map