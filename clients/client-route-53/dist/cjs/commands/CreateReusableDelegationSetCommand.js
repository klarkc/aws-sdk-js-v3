"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReusableDelegationSetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_sdk_route53_1 = require("@aws-sdk/middleware-sdk-route53");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones that were created by
 * 			the same AWS account. </p>
 * 		       <p>You can also create a reusable delegation set that uses the four name servers that are associated
 * 			with an existing hosted zone. Specify the hosted zone ID in the <code>CreateReusableDelegationSet</code> request.</p>
 * 		       <note>
 * 			         <p>You can't associate a reusable delegation set with a private hosted zone.</p>
 * 		       </note>
 * 		       <p>For information about using a reusable delegation set to configure white label name servers, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/white-label-name-servers.html">Configuring White Label Name Servers</a>.</p>
 *
 * 		       <p>The process for migrating existing hosted zones to use a reusable delegation set is comparable to the process for
 * 			configuring white label name servers. You need to perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create a reusable delegation set.</p>
 *             </li>
 *             <li>
 *                <p>Recreate hosted zones, and reduce the TTL to 60 seconds or less.</p>
 *             </li>
 *             <li>
 *                <p>Recreate resource record sets in the new hosted zones.</p>
 *             </li>
 *             <li>
 *                <p>Change the registrar's name servers to use the name servers for the new hosted zones.</p>
 *             </li>
 *             <li>
 *                <p>Monitor traffic for the website or application.</p>
 *             </li>
 *             <li>
 *                <p>Change TTLs back to their original values.</p>
 *             </li>
 *          </ol>
 *
 * 		       <p>If you want to migrate existing hosted zones to use a reusable delegation set, the existing hosted zones can't use
 * 			any of the name servers that are assigned to the reusable delegation set. If one or more hosted zones do use one or more
 * 			name servers that are assigned to the reusable delegation set, you can do one of the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>For small numbers of hosted zones—up to a few hundred—it's relatively easy to create
 * 				reusable delegation sets until you get one that has four name servers that don't overlap with any of the name servers
 * 				in your hosted zones.</p>
 *             </li>
 *             <li>
 *                <p>For larger numbers of hosted zones, the easiest solution is to use more than one reusable delegation set.</p>
 *             </li>
 *             <li>
 *                <p>For larger numbers of hosted zones, you can also migrate hosted zones that have overlapping name servers
 * 				to hosted zones that don't have overlapping name servers, then migrate the hosted zones again to use the
 * 				reusable delegation set.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link CreateReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateReusableDelegationSetCommand extends smithy_client_1.Command {
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
        const commandName = "CreateReusableDelegationSetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateReusableDelegationSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateReusableDelegationSetResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlCreateReusableDelegationSetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlCreateReusableDelegationSetCommand(output, context);
    }
}
exports.CreateReusableDelegationSetCommand = CreateReusableDelegationSetCommand;
//# sourceMappingURL=CreateReusableDelegationSetCommand.js.map