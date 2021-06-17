import { __extends } from "tslib";
import { DisassociateResolverQueryLogConfigRequest, DisassociateResolverQueryLogConfigResponse, } from "../models/models_0";
import { deserializeAws_json1_1DisassociateResolverQueryLogConfigCommand, serializeAws_json1_1DisassociateResolverQueryLogConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a VPC from a query logging configuration.</p>
 *
 * 		       <note>
 * 			         <p>Before you can delete a query logging configuration, you must first disassociate all VPCs
 * 				from the configuration. If you used AWS Resource Access Manager (AWS RAM) to share a
 * 				query logging configuration with other accounts, VPCs can be disassociated from the
 * 				configuration in the following ways:</p>
 * 			         <ul>
 *                <li>
 *                   <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p>
 *                </li>
 *                <li>
 *                   <p>You can stop sharing the configuration.</p>
 *                </li>
 *             </ul>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DisassociateResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateResolverQueryLogConfigCommand = /** @class */ (function (_super) {
    __extends(DisassociateResolverQueryLogConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateResolverQueryLogConfigCommand(input) {
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
    DisassociateResolverQueryLogConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "DisassociateResolverQueryLogConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateResolverQueryLogConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateResolverQueryLogConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateResolverQueryLogConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateResolverQueryLogConfigCommand(input, context);
    };
    DisassociateResolverQueryLogConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateResolverQueryLogConfigCommand(output, context);
    };
    return DisassociateResolverQueryLogConfigCommand;
}($Command));
export { DisassociateResolverQueryLogConfigCommand };
//# sourceMappingURL=DisassociateResolverQueryLogConfigCommand.js.map