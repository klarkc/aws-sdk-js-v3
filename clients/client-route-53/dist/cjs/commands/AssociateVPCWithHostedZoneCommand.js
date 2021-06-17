"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateVPCWithHostedZoneCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_sdk_route53_1 = require("@aws-sdk/middleware-sdk-route53");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Associates an Amazon VPC with a private hosted zone. </p>
 * 		       <important>
 *             <p>To perform the association, the VPC and the private hosted zone must already exist.
 * 			You can't convert a public hosted zone into a private hosted zone.</p>
 *          </important>
 * 		       <note>
 *             <p>If you want to associate a VPC that was created by using one AWS account with a private hosted zone that was created
 * 			by using a different account, the AWS account that created the private hosted zone must first submit a
 * 			<code>CreateVPCAssociationAuthorization</code> request. Then the account that created the VPC must submit an
 * 			<code>AssociateVPCWithHostedZone</code> request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, AssociateVPCWithHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, AssociateVPCWithHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new AssociateVPCWithHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateVPCWithHostedZoneCommandInput} for command's `input` shape.
 * @see {@link AssociateVPCWithHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateVPCWithHostedZoneCommand extends smithy_client_1.Command {
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
        const commandName = "AssociateVPCWithHostedZoneCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateVPCWithHostedZoneRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateVPCWithHostedZoneResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlAssociateVPCWithHostedZoneCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlAssociateVPCWithHostedZoneCommand(output, context);
    }
}
exports.AssociateVPCWithHostedZoneCommand = AssociateVPCWithHostedZoneCommand;
//# sourceMappingURL=AssociateVPCWithHostedZoneCommand.js.map