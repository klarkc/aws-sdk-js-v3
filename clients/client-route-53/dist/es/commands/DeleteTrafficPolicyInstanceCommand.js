import { __extends } from "tslib";
import { DeleteTrafficPolicyInstanceRequest, DeleteTrafficPolicyInstanceResponse } from "../models/models_0";
import { deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand, serializeAws_restXmlDeleteTrafficPolicyInstanceCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance.</p>
 * 		       <note>
 * 			         <p>In the Route 53 console, traffic policy instances are known as policy records.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTrafficPolicyInstanceCommand = /** @class */ (function (_super) {
    __extends(DeleteTrafficPolicyInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTrafficPolicyInstanceCommand(input) {
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
    DeleteTrafficPolicyInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "DeleteTrafficPolicyInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrafficPolicyInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrafficPolicyInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrafficPolicyInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteTrafficPolicyInstanceCommand(input, context);
    };
    DeleteTrafficPolicyInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand(output, context);
    };
    return DeleteTrafficPolicyInstanceCommand;
}($Command));
export { DeleteTrafficPolicyInstanceCommand };
//# sourceMappingURL=DeleteTrafficPolicyInstanceCommand.js.map