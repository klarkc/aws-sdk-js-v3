import { __extends } from "tslib";
import { CreateHostedZoneRequest, CreateHostedZoneResponse } from "../models/models_0";
import { deserializeAws_restXmlCreateHostedZoneCommand, serializeAws_restXmlCreateHostedZoneCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic
 * 			on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a
 * 			private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more
 * 			Amazon Virtual Private Clouds (Amazon VPCs). </p>
 * 		       <important>
 * 			         <p>You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone
 * 				with the same name and create new resource record sets.</p>
 * 		       </important>
 * 		       <p>For more information about charges for hosted zones, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 * 		       <p>Note the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>You can't create a hosted zone for a top-level domain (TLD) such as .com.</p>
 * 			         </li>
 *             <li>
 * 				           <p>For public hosted zones, Route 53 automatically creates a default SOA record and four NS records for the zone.
 * 					For more information about SOA and NS records, see
 * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html">NS and SOA Records that Route 53 Creates for a Hosted Zone</a> in the
 * 					<i>Amazon Route 53 Developer Guide</i>.</p>
 * 				           <p>If you want to use the same name servers for multiple public hosted zones, you can optionally associate a reusable delegation set
 * 					with the hosted zone. See the <code>DelegationSetId</code> element.</p>
 * 			         </li>
 *             <li>
 * 				           <p>If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make
 * 					Route 53 the DNS service for the domain. For more information, see
 * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html">Migrating DNS Service for an Existing Domain to Amazon Route 53</a> in the
 * 					<i>Amazon Route 53 Developer Guide</i>. </p>
 * 			         </li>
 *          </ul>
 * 		       <p>When you submit a <code>CreateHostedZone</code> request, the initial status of the hosted zone is <code>PENDING</code>.
 * 			For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the
 * 			NS and SOA records are available, the status of the zone changes to <code>INSYNC</code>.</p>
 * 		       <p>The <code>CreateHostedZone</code> request requires the caller to have an <code>ec2:DescribeVpcs</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHostedZoneCommandInput} for command's `input` shape.
 * @see {@link CreateHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHostedZoneCommand = /** @class */ (function (_super) {
    __extends(CreateHostedZoneCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHostedZoneCommand(input) {
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
    CreateHostedZoneCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "CreateHostedZoneCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHostedZoneRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHostedZoneResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHostedZoneCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlCreateHostedZoneCommand(input, context);
    };
    CreateHostedZoneCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlCreateHostedZoneCommand(output, context);
    };
    return CreateHostedZoneCommand;
}($Command));
export { CreateHostedZoneCommand };
//# sourceMappingURL=CreateHostedZoneCommand.js.map