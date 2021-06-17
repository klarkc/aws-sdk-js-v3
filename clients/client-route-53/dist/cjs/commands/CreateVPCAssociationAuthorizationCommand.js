"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVPCAssociationAuthorizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_sdk_route53_1 = require("@aws-sdk/middleware-sdk-route53");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Authorizes the AWS account that created a specified VPC to submit an <code>AssociateVPCWithHostedZone</code>
 * 			request to associate the VPC with a specified hosted zone that was created by a different account.
 * 			To submit a <code>CreateVPCAssociationAuthorization</code> request, you must use the account that created the
 * 			hosted zone. After you authorize the association, use the account that created the VPC to submit an
 * 			<code>AssociateVPCWithHostedZone</code> request.</p>
 * 		       <note>
 *             <p>If you want to associate multiple VPCs that you created by using one account with a hosted zone
 * 			that you created by using a different account, you must submit one authorization request for each VPC.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateVPCAssociationAuthorizationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateVPCAssociationAuthorizationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateVPCAssociationAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVPCAssociationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateVPCAssociationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateVPCAssociationAuthorizationCommand extends smithy_client_1.Command {
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
        const commandName = "CreateVPCAssociationAuthorizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateVPCAssociationAuthorizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateVPCAssociationAuthorizationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlCreateVPCAssociationAuthorizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand(output, context);
    }
}
exports.CreateVPCAssociationAuthorizationCommand = CreateVPCAssociationAuthorizationCommand;
//# sourceMappingURL=CreateVPCAssociationAuthorizationCommand.js.map