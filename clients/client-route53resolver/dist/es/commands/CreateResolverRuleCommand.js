import { __extends } from "tslib";
import { CreateResolverRuleRequest, CreateResolverRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateResolverRuleCommand, serializeAws_json1_1CreateResolverRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through,
 * 			one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateResolverRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link CreateResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResolverRuleCommand = /** @class */ (function (_super) {
    __extends(CreateResolverRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResolverRuleCommand(input) {
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
    CreateResolverRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "CreateResolverRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResolverRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResolverRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResolverRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateResolverRuleCommand(input, context);
    };
    CreateResolverRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateResolverRuleCommand(output, context);
    };
    return CreateResolverRuleCommand;
}($Command));
export { CreateResolverRuleCommand };
//# sourceMappingURL=CreateResolverRuleCommand.js.map