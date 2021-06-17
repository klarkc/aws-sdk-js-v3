import { __extends } from "tslib";
import { DeleteVpcEndpointsRequest, DeleteVpcEndpointsResult } from "../models/models_2";
import { deserializeAws_ec2DeleteVpcEndpointsCommand, serializeAws_ec2DeleteVpcEndpointsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more specified VPC endpoints. You can delete any of the following types of VPC endpoints.  </p>
 *         <ul>
 *             <li>
 *                <p>Gateway endpoint,</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer endpoint,</p>
 *             </li>
 *             <li>
 *                <p>Interface endpoint</p>
 *             </li>
 *          </ul>
 *         <p>The following rules apply when you delete a VPC endpoint:</p>
 *         <ul>
 *             <li>
 *                 <p>When you delete a gateway endpoint, we delete the endpoint routes in the route tables that are associated with the endpoint.</p>
 *             </li>
 *             <li>
 *                 <p>When you delete a Gateway Load Balancer endpoint, we delete the endpoint network interfaces. </p>
 *                 <p>You can only delete Gateway Load Balancer endpoints when the routes that are associated with the endpoint are deleted.</p>
 *             </li>
 *             <li>
 *                 <p>When you delete an interface endpoint, we delete the  endpoint network interfaces.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVpcEndpointsCommand = /** @class */ (function (_super) {
    __extends(DeleteVpcEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVpcEndpointsCommand(input) {
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
    DeleteVpcEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteVpcEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVpcEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVpcEndpointsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVpcEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteVpcEndpointsCommand(input, context);
    };
    DeleteVpcEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteVpcEndpointsCommand(output, context);
    };
    return DeleteVpcEndpointsCommand;
}($Command));
export { DeleteVpcEndpointsCommand };
//# sourceMappingURL=DeleteVpcEndpointsCommand.js.map