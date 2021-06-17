import { __extends } from "tslib";
import { DeleteResolverQueryLogConfigRequest, DeleteResolverQueryLogConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteResolverQueryLogConfigCommand, serializeAws_json1_1DeleteResolverQueryLogConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are
 * 			associated with the configuration. This also applies if the query logging configuration is shared with other AWS accounts, and
 * 			the other accounts have associated VPCs with the shared configuration.</p>
 *
 * 		       <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p>
 *
 * 		       <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing
 * 			the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs
 * 			that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically
 * 			disassociated from the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DeleteResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResolverQueryLogConfigCommand = /** @class */ (function (_super) {
    __extends(DeleteResolverQueryLogConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResolverQueryLogConfigCommand(input) {
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
    DeleteResolverQueryLogConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "DeleteResolverQueryLogConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResolverQueryLogConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResolverQueryLogConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResolverQueryLogConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteResolverQueryLogConfigCommand(input, context);
    };
    DeleteResolverQueryLogConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteResolverQueryLogConfigCommand(output, context);
    };
    return DeleteResolverQueryLogConfigCommand;
}($Command));
export { DeleteResolverQueryLogConfigCommand };
//# sourceMappingURL=DeleteResolverQueryLogConfigCommand.js.map