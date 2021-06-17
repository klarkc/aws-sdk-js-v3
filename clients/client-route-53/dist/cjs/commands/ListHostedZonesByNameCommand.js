"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListHostedZonesByNameCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_sdk_route53_1 = require("@aws-sdk/middleware-sdk-route53");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves a list of your hosted zones in lexicographic order. The response includes a <code>HostedZones</code> child element
 * 			for each hosted zone created by the current AWS account. </p>
 * 		       <p>
 *             <code>ListHostedZonesByName</code> sorts hosted zones by name with the labels reversed. For example:</p>
 *
 * 		       <p>
 *             <code>com.example.www.</code>
 *          </p>
 *
 * 		       <p>Note the trailing dot, which can change the sort order in some circumstances.</p>
 * 		       <p>If the domain name includes escape characters or Punycode, <code>ListHostedZonesByName</code> alphabetizes the domain name
 * 			using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone
 * 			for exämple.com, you specify ex\344mple.com for the domain name. <code>ListHostedZonesByName</code> alphabetizes it as:</p>
 *
 * 		       <p>
 *             <code>com.ex\344mple.</code>
 *          </p>
 *
 * 		       <p>The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats,
 * 			including internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a> in the
 * 			<i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       <p>Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the <code>MaxItems</code> parameter to list
 * 			them in groups of up to 100. The response includes values that help navigate from one group of <code>MaxItems</code> hosted zones to the next:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The <code>DNSName</code> and <code>HostedZoneId</code> elements in the response contain the values, if any, specified for the
 * 					<code>dnsname</code> and <code>hostedzoneid</code> parameters in the request that produced the current response.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The <code>MaxItems</code> element in the response contains the value, if any, that you specified for the <code>maxitems</code>
 * 					parameter in the request that produced the current response.</p>
 * 			         </li>
 *             <li>
 * 				           <p>If the value of <code>IsTruncated</code> in the response is true, there are more hosted zones associated with the
 * 					current AWS account. </p>
 * 				           <p>If <code>IsTruncated</code> is false, this response includes the last hosted zone that is associated with the current account.
 * 					The <code>NextDNSName</code> element and <code>NextHostedZoneId</code> elements are omitted from the response.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The <code>NextDNSName</code> and <code>NextHostedZoneId</code> elements in the response contain the domain name and the
 * 					hosted zone ID of the next hosted zone that is associated with the current AWS account. If you want to list more hosted zones,
 * 					make another call to <code>ListHostedZonesByName</code>, and specify the value of <code>NextDNSName</code> and
 * 					<code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesByNameCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesByNameCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHostedZonesByNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostedZonesByNameCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesByNameCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListHostedZonesByNameCommand extends smithy_client_1.Command {
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
        const commandName = "ListHostedZonesByNameCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListHostedZonesByNameRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListHostedZonesByNameResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlListHostedZonesByNameCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlListHostedZonesByNameCommand(output, context);
    }
}
exports.ListHostedZonesByNameCommand = ListHostedZonesByNameCommand;
//# sourceMappingURL=ListHostedZonesByNameCommand.js.map