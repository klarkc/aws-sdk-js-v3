import { __extends } from "tslib";
import { AssociateResolverEndpointIpAddressRequest, AssociateResolverEndpointIpAddressResponse, } from "../models/models_0";
import { deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand, serializeAws_json1_1AssociateResolverEndpointIpAddressCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address,
 * 			submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p>
 * 		       <p>To remove an IP address from an endpoint, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateResolverEndpointIpAddressCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateResolverEndpointIpAddressCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new AssociateResolverEndpointIpAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResolverEndpointIpAddressCommandInput} for command's `input` shape.
 * @see {@link AssociateResolverEndpointIpAddressCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateResolverEndpointIpAddressCommand = /** @class */ (function (_super) {
    __extends(AssociateResolverEndpointIpAddressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateResolverEndpointIpAddressCommand(input) {
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
    AssociateResolverEndpointIpAddressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "AssociateResolverEndpointIpAddressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateResolverEndpointIpAddressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateResolverEndpointIpAddressResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateResolverEndpointIpAddressCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateResolverEndpointIpAddressCommand(input, context);
    };
    AssociateResolverEndpointIpAddressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand(output, context);
    };
    return AssociateResolverEndpointIpAddressCommand;
}($Command));
export { AssociateResolverEndpointIpAddressCommand };
//# sourceMappingURL=AssociateResolverEndpointIpAddressCommand.js.map