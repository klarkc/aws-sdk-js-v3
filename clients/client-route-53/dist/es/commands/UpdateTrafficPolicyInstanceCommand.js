import { __extends } from "tslib";
import { UpdateTrafficPolicyInstanceRequest, UpdateTrafficPolicyInstanceResponse } from "../models/models_0";
import { deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand, serializeAws_restXmlUpdateTrafficPolicyInstanceCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version.</p>
 * 		       <p>When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name
 * 			(such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant
 * 					the differences are between the existing resource record sets and the new resource record sets. </p>
 * 			         </li>
 *             <li>
 * 				           <p>When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name
 * 					(such as example.com) by using the new resource record sets.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTrafficPolicyInstanceCommand = /** @class */ (function (_super) {
    __extends(UpdateTrafficPolicyInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTrafficPolicyInstanceCommand(input) {
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
    UpdateTrafficPolicyInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "UpdateTrafficPolicyInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTrafficPolicyInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTrafficPolicyInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTrafficPolicyInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlUpdateTrafficPolicyInstanceCommand(input, context);
    };
    UpdateTrafficPolicyInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand(output, context);
    };
    return UpdateTrafficPolicyInstanceCommand;
}($Command));
export { UpdateTrafficPolicyInstanceCommand };
//# sourceMappingURL=UpdateTrafficPolicyInstanceCommand.js.map