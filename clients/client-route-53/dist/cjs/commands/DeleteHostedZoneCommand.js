"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteHostedZoneCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_sdk_route53_1 = require("@aws-sdk/middleware-sdk-route53");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a hosted zone.</p>
 *
 * 		       <p>If the hosted zone was created by another service, such as AWS Cloud Map, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DeleteHostedZone.html#delete-public-hosted-zone-created-by-another-service">Deleting
 * 			Public Hosted Zones That Were Created by Another Service</a> in the <i>Amazon Route 53 Developer Guide</i> for information about how to delete it.
 * 			(The process is the same for public and private hosted zones that were created by another service.)</p>
 *
 * 		       <p>If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application,
 * 			we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone.</p>
 *
 * 		       <important>
 * 			         <p>If you delete a hosted zone, you can't undelete it. You must create a new hosted zone and update the name servers for your
 * 				domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone
 * 				and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone,
 * 				someone could hijack the domain and route traffic to their own resources using your domain name.</p>
 * 		       </important>
 *
 * 		       <p>If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service.
 * 			When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route 53,
 * 			see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html">UpdateDomainNameservers</a>
 * 			for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is registered with
 * 			another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information,
 * 			perform an internet search on "free DNS service."</p>
 *
 * 		       <p>You can delete a hosted zone only if it contains only the default SOA record and NS resource record sets.
 * 			If the hosted zone contains other resource record sets, you must delete them before you can delete the hosted zone.
 * 			If you try to delete a hosted zone that contains other resource record sets, the request fails, and Route 53 returns a
 * 			<code>HostedZoneNotEmpty</code> error. For information about deleting records from your hosted zone, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>.</p>
 * 		       <p>To verify that the hosted zone has been deleted, do one of the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>Use the <code>GetHostedZone</code> action to request information about the hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>ListHostedZones</code> action to get a list of the hosted zones associated with the current
 * 				AWS account.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHostedZoneCommandInput} for command's `input` shape.
 * @see {@link DeleteHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteHostedZoneCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteHostedZoneCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteHostedZoneRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteHostedZoneResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlDeleteHostedZoneCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlDeleteHostedZoneCommand(output, context);
    }
}
exports.DeleteHostedZoneCommand = DeleteHostedZoneCommand;
//# sourceMappingURL=DeleteHostedZoneCommand.js.map