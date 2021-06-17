import { __extends } from "tslib";
import { GetResolverEndpointRequest, GetResolverEndpointResponse } from "../models/models_0";
import { deserializeAws_json1_1GetResolverEndpointCommand, serializeAws_json1_1GetResolverEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the
 * 			current status of the endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link GetResolverEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResolverEndpointCommand = /** @class */ (function (_super) {
    __extends(GetResolverEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResolverEndpointCommand(input) {
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
    GetResolverEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetResolverEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResolverEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResolverEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResolverEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResolverEndpointCommand(input, context);
    };
    GetResolverEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResolverEndpointCommand(output, context);
    };
    return GetResolverEndpointCommand;
}($Command));
export { GetResolverEndpointCommand };
//# sourceMappingURL=GetResolverEndpointCommand.js.map