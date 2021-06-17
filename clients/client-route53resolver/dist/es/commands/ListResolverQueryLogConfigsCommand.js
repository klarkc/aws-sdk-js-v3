import { __extends } from "tslib";
import { ListResolverQueryLogConfigsRequest, ListResolverQueryLogConfigsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResolverQueryLogConfigsCommand, serializeAws_json1_1ListResolverQueryLogConfigsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save
 * 			DNS query logs and specifies the VPCs that you want to log queries for.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverQueryLogConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverQueryLogConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverQueryLogConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverQueryLogConfigsCommandInput} for command's `input` shape.
 * @see {@link ListResolverQueryLogConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResolverQueryLogConfigsCommand = /** @class */ (function (_super) {
    __extends(ListResolverQueryLogConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResolverQueryLogConfigsCommand(input) {
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
    ListResolverQueryLogConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListResolverQueryLogConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResolverQueryLogConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResolverQueryLogConfigsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResolverQueryLogConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResolverQueryLogConfigsCommand(input, context);
    };
    ListResolverQueryLogConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResolverQueryLogConfigsCommand(output, context);
    };
    return ListResolverQueryLogConfigsCommand;
}($Command));
export { ListResolverQueryLogConfigsCommand };
//# sourceMappingURL=ListResolverQueryLogConfigsCommand.js.map