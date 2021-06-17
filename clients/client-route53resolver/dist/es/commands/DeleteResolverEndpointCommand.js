import { __extends } from "tslib";
import { DeleteResolverEndpointRequest, DeleteResolverEndpointResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteResolverEndpointCommand, serializeAws_json1_1DeleteResolverEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound
 * 			Resolver endpoint:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <b>Inbound</b>: DNS queries from your network are no longer routed
 * 				to the DNS service for the specified VPC.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DeleteResolverEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteResolverEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResolverEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteResolverEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResolverEndpointCommand(input) {
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
    DeleteResolverEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "DeleteResolverEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResolverEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResolverEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResolverEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteResolverEndpointCommand(input, context);
    };
    DeleteResolverEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteResolverEndpointCommand(output, context);
    };
    return DeleteResolverEndpointCommand;
}($Command));
export { DeleteResolverEndpointCommand };
//# sourceMappingURL=DeleteResolverEndpointCommand.js.map