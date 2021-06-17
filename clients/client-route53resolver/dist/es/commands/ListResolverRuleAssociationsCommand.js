import { __extends } from "tslib";
import { ListResolverRuleAssociationsRequest, ListResolverRuleAssociationsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResolverRuleAssociationsCommand, serializeAws_json1_1ListResolverRuleAssociationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the associations that were created between Resolver rules and VPCs using the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverRuleAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverRuleAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverRuleAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverRuleAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListResolverRuleAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResolverRuleAssociationsCommand = /** @class */ (function (_super) {
    __extends(ListResolverRuleAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResolverRuleAssociationsCommand(input) {
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
    ListResolverRuleAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListResolverRuleAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResolverRuleAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResolverRuleAssociationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResolverRuleAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResolverRuleAssociationsCommand(input, context);
    };
    ListResolverRuleAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResolverRuleAssociationsCommand(output, context);
    };
    return ListResolverRuleAssociationsCommand;
}($Command));
export { ListResolverRuleAssociationsCommand };
//# sourceMappingURL=ListResolverRuleAssociationsCommand.js.map