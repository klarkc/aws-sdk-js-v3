import { __extends } from "tslib";
import { ListResolverQueryLogConfigAssociationsRequest, ListResolverQueryLogConfigAssociationsResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand, serializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists information about associations between Amazon VPCs and query logging configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverQueryLogConfigAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverQueryLogConfigAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverQueryLogConfigAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverQueryLogConfigAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListResolverQueryLogConfigAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResolverQueryLogConfigAssociationsCommand = /** @class */ (function (_super) {
    __extends(ListResolverQueryLogConfigAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResolverQueryLogConfigAssociationsCommand(input) {
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
    ListResolverQueryLogConfigAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListResolverQueryLogConfigAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResolverQueryLogConfigAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResolverQueryLogConfigAssociationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResolverQueryLogConfigAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand(input, context);
    };
    ListResolverQueryLogConfigAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand(output, context);
    };
    return ListResolverQueryLogConfigAssociationsCommand;
}($Command));
export { ListResolverQueryLogConfigAssociationsCommand };
//# sourceMappingURL=ListResolverQueryLogConfigAssociationsCommand.js.map