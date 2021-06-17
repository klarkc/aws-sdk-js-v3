"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteHealthCheckCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a health check.</p>
 * 		       <important>
 * 			         <p>Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more
 * 				resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status
 * 				of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover
 * 				configuration. For more information, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html">Replacing and Deleting Health Checks</a>
 * 				in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       </important>
 *
 * 		       <p>If you're using AWS Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance,
 * 			you can't use the Route 53 <code>DeleteHealthCheck</code> command to delete the health check. The health check is deleted
 * 			automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted
 * 			from Route 53. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHealthCheckCommandInput} for command's `input` shape.
 * @see {@link DeleteHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteHealthCheckCommand extends smithy_client_1.Command {
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
        const clientName = "Route53Client";
        const commandName = "DeleteHealthCheckCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteHealthCheckRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteHealthCheckResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlDeleteHealthCheckCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlDeleteHealthCheckCommand(output, context);
    }
}
exports.DeleteHealthCheckCommand = DeleteHealthCheckCommand;
//# sourceMappingURL=DeleteHealthCheckCommand.js.map