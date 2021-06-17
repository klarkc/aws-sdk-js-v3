import { __extends } from "tslib";
import { ListResolverEndpointsRequest, ListResolverEndpointsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResolverEndpointsCommand, serializeAws_json1_1ListResolverEndpointsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the Resolver endpoints that were created using the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverEndpointsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverEndpointsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListResolverEndpointsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResolverEndpointsCommand = /** @class */ (function (_super) {
    __extends(ListResolverEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResolverEndpointsCommand(input) {
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
    ListResolverEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListResolverEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResolverEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResolverEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResolverEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResolverEndpointsCommand(input, context);
    };
    ListResolverEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResolverEndpointsCommand(output, context);
    };
    return ListResolverEndpointsCommand;
}($Command));
export { ListResolverEndpointsCommand };
//# sourceMappingURL=ListResolverEndpointsCommand.js.map