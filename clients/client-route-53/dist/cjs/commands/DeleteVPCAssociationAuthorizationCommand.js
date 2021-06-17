"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVPCAssociationAuthorizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_sdk_route53_1 = require("@aws-sdk/middleware-sdk-route53");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes authorization to submit an <code>AssociateVPCWithHostedZone</code> request to associate a specified VPC
 * 			with a hosted zone that was created by a different account. You must use the account that created the hosted zone
 * 			to submit a <code>DeleteVPCAssociationAuthorization</code> request.</p>
 * 		       <important>
 * 			         <p>Sending this request only prevents the AWS account that created the VPC from associating the VPC
 * 				with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone,
 * 				<code>DeleteVPCAssociationAuthorization</code> won't disassociate the VPC from the hosted zone.
 * 				If you want to delete an existing association, use <code>DisassociateVPCFromHostedZone</code>.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteVPCAssociationAuthorizationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteVPCAssociationAuthorizationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteVPCAssociationAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVPCAssociationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteVPCAssociationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteVPCAssociationAuthorizationCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use(middleware_sdk_route53_1.getIdNormalizerPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "Route53Client";
        const commandName = "DeleteVPCAssociationAuthorizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteVPCAssociationAuthorizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteVPCAssociationAuthorizationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand(output, context);
    }
}
exports.DeleteVPCAssociationAuthorizationCommand = DeleteVPCAssociationAuthorizationCommand;
//# sourceMappingURL=DeleteVPCAssociationAuthorizationCommand.js.map