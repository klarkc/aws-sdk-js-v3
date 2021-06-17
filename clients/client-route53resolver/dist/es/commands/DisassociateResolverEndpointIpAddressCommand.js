import { __extends } from "tslib";
import { DisassociateResolverEndpointIpAddressRequest, DisassociateResolverEndpointIpAddressResponse, } from "../models/models_0";
import { deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand, serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address,
 * 			submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p>
 * 		       <p>To add an IP address to an endpoint, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverEndpointIpAddressCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverEndpointIpAddressCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DisassociateResolverEndpointIpAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResolverEndpointIpAddressCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverEndpointIpAddressCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateResolverEndpointIpAddressCommand = /** @class */ (function (_super) {
    __extends(DisassociateResolverEndpointIpAddressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateResolverEndpointIpAddressCommand(input) {
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
    DisassociateResolverEndpointIpAddressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "DisassociateResolverEndpointIpAddressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateResolverEndpointIpAddressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateResolverEndpointIpAddressResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateResolverEndpointIpAddressCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand(input, context);
    };
    DisassociateResolverEndpointIpAddressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand(output, context);
    };
    return DisassociateResolverEndpointIpAddressCommand;
}($Command));
export { DisassociateResolverEndpointIpAddressCommand };
//# sourceMappingURL=DisassociateResolverEndpointIpAddressCommand.js.map