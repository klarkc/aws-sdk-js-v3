import { __extends } from "tslib";
import { DeleteHealthCheckRequest, DeleteHealthCheckResponse } from "../models/models_0";
import { deserializeAws_restXmlDeleteHealthCheckCommand, serializeAws_restXmlDeleteHealthCheckCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a health check.</p>
 * 		       <important>
 * 			         <p>Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more
 * 				resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status
 * 				of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover
 * 				configuration. For more information, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html">Replacing and Deleting Health Checks</a>
 * 				in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       </important>
 *
 * 		       <p>If you're using AWS Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance,
 * 			you can't use the Route 53 <code>DeleteHealthCheck</code> command to delete the health check. The health check is deleted
 * 			automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted
 * 			from Route 53. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHealthCheckCommandInput} for command's `input` shape.
 * @see {@link DeleteHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteHealthCheckCommand = /** @class */ (function (_super) {
    __extends(DeleteHealthCheckCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteHealthCheckCommand(input) {
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
    DeleteHealthCheckCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "DeleteHealthCheckCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteHealthCheckRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteHealthCheckResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteHealthCheckCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteHealthCheckCommand(input, context);
    };
    DeleteHealthCheckCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteHealthCheckCommand(output, context);
    };
    return DeleteHealthCheckCommand;
}($Command));
export { DeleteHealthCheckCommand };
//# sourceMappingURL=DeleteHealthCheckCommand.js.map