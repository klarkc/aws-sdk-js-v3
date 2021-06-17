import { __extends } from "tslib";
import { ListTrafficPoliciesRequest, ListTrafficPoliciesResponse } from "../models/models_0";
import { deserializeAws_restXmlListTrafficPoliciesCommand, serializeAws_restXmlListTrafficPoliciesCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the latest version for every traffic policy that is associated with the current AWS account.
 * 			Policies are listed in the order that they were created in. </p>
 *
 * 		       <p>For information about how of deleting a traffic policy affects the response from <code>ListTrafficPolicies</code>, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>.
 *
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPoliciesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPoliciesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTrafficPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPoliciesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrafficPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListTrafficPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrafficPoliciesCommand(input) {
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
    ListTrafficPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListTrafficPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrafficPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrafficPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrafficPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListTrafficPoliciesCommand(input, context);
    };
    ListTrafficPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListTrafficPoliciesCommand(output, context);
    };
    return ListTrafficPoliciesCommand;
}($Command));
export { ListTrafficPoliciesCommand };
//# sourceMappingURL=ListTrafficPoliciesCommand.js.map