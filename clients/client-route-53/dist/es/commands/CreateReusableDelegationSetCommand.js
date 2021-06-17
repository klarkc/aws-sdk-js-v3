import { __extends } from "tslib";
import { CreateReusableDelegationSetRequest, CreateReusableDelegationSetResponse } from "../models/models_0";
import { deserializeAws_restXmlCreateReusableDelegationSetCommand, serializeAws_restXmlCreateReusableDelegationSetCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateReusableDelegationSetCommand = /** @class */ (function (_super) {
    __extends(CreateReusableDelegationSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReusableDelegationSetCommand(input) {
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
    CreateReusableDelegationSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "CreateReusableDelegationSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReusableDelegationSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateReusableDelegationSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReusableDelegationSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlCreateReusableDelegationSetCommand(input, context);
    };
    CreateReusableDelegationSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlCreateReusableDelegationSetCommand(output, context);
    };
    return CreateReusableDelegationSetCommand;
}($Command));
export { CreateReusableDelegationSetCommand };
//# sourceMappingURL=CreateReusableDelegationSetCommand.js.map