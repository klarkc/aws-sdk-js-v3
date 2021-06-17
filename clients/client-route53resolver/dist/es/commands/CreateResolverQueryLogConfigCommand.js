import { __extends } from "tslib";
import { CreateResolverQueryLogConfigRequest, CreateResolverQueryLogConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateResolverQueryLogConfigCommand, serializeAws_json1_1CreateResolverQueryLogConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs.
 * 			Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p>
 *
 * 		       <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p>
 *
 * 		       <p>You can optionally use AWS Resource Access Manager (AWS RAM) to share a query logging configuration with other AWS accounts. The other accounts
 * 			can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all
 * 			VPCs that are associated with the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link CreateResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResolverQueryLogConfigCommand = /** @class */ (function (_super) {
    __extends(CreateResolverQueryLogConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResolverQueryLogConfigCommand(input) {
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
    CreateResolverQueryLogConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "CreateResolverQueryLogConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResolverQueryLogConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResolverQueryLogConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResolverQueryLogConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateResolverQueryLogConfigCommand(input, context);
    };
    CreateResolverQueryLogConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateResolverQueryLogConfigCommand(output, context);
    };
    return CreateResolverQueryLogConfigCommand;
}($Command));
export { CreateResolverQueryLogConfigCommand };
//# sourceMappingURL=CreateResolverQueryLogConfigCommand.js.map