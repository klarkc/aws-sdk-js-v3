"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteResolverQueryLogConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DeleteResolverQueryLogConfigCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "Route53ResolverClient";
        const commandName = "DeleteResolverQueryLogConfigCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteResolverQueryLogConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteResolverQueryLogConfigResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteResolverQueryLogConfigCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteResolverQueryLogConfigCommand(output, context);
    }
}
exports.DeleteResolverQueryLogConfigCommand = DeleteResolverQueryLogConfigCommand;
//# sourceMappingURL=DeleteResolverQueryLogConfigCommand.js.map