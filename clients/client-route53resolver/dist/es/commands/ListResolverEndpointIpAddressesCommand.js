import { __extends } from "tslib";
import { ListResolverEndpointIpAddressesRequest, ListResolverEndpointIpAddressesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResolverEndpointIpAddressesCommand, serializeAws_json1_1ListResolverEndpointIpAddressesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the IP addresses for a specified Resolver endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverEndpointIpAddressesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverEndpointIpAddressesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverEndpointIpAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverEndpointIpAddressesCommandInput} for command's `input` shape.
 * @see {@link ListResolverEndpointIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResolverEndpointIpAddressesCommand = /** @class */ (function (_super) {
    __extends(ListResolverEndpointIpAddressesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResolverEndpointIpAddressesCommand(input) {
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
    ListResolverEndpointIpAddressesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListResolverEndpointIpAddressesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResolverEndpointIpAddressesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResolverEndpointIpAddressesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResolverEndpointIpAddressesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResolverEndpointIpAddressesCommand(input, context);
    };
    ListResolverEndpointIpAddressesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResolverEndpointIpAddressesCommand(output, context);
    };
    return ListResolverEndpointIpAddressesCommand;
}($Command));
export { ListResolverEndpointIpAddressesCommand };
//# sourceMappingURL=ListResolverEndpointIpAddressesCommand.js.map