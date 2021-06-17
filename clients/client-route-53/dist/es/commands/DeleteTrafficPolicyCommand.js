import { __extends } from "tslib";
import { DeleteTrafficPolicyRequest, DeleteTrafficPolicyResponse } from "../models/models_0";
import { deserializeAws_restXmlDeleteTrafficPolicyCommand, serializeAws_restXmlDeleteTrafficPolicyCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a traffic policy.</p>
 * 		       <p>When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that it has been deleted. However, Route 53 never fully deletes
 * 			the traffic policy. Note the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>Deleted traffic policies aren't listed if you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html">ListTrafficPolicies</a>.</p>
 *             </li>
 *             <li>
 *                <p>	There's no way to get a list of deleted policies.</p>
 *             </li>
 *             <li>
 *                <p>If you retain the ID of the policy, you can get information about the policy, including the traffic policy document, by running
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTrafficPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteTrafficPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTrafficPolicyCommand(input) {
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
    DeleteTrafficPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "DeleteTrafficPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrafficPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrafficPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrafficPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteTrafficPolicyCommand(input, context);
    };
    DeleteTrafficPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteTrafficPolicyCommand(output, context);
    };
    return DeleteTrafficPolicyCommand;
}($Command));
export { DeleteTrafficPolicyCommand };
//# sourceMappingURL=DeleteTrafficPolicyCommand.js.map