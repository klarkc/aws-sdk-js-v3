import { __extends } from "tslib";
import { ListResolverRulesRequest, ListResolverRulesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResolverRulesCommand, serializeAws_json1_1ListResolverRulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Resolver rules that were created using the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverRulesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverRulesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverRulesCommandInput} for command's `input` shape.
 * @see {@link ListResolverRulesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResolverRulesCommand = /** @class */ (function (_super) {
    __extends(ListResolverRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResolverRulesCommand(input) {
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
    ListResolverRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListResolverRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResolverRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResolverRulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResolverRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResolverRulesCommand(input, context);
    };
    ListResolverRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResolverRulesCommand(output, context);
    };
    return ListResolverRulesCommand;
}($Command));
export { ListResolverRulesCommand };
//# sourceMappingURL=ListResolverRulesCommand.js.map