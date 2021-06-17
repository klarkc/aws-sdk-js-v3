import { __extends } from "tslib";
import { AssociateVPCWithHostedZoneRequest, AssociateVPCWithHostedZoneResponse } from "../models/models_0";
import { deserializeAws_restXmlAssociateVPCWithHostedZoneCommand, serializeAws_restXmlAssociateVPCWithHostedZoneCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var AssociateVPCWithHostedZoneCommand = /** @class */ (function (_super) {
    __extends(AssociateVPCWithHostedZoneCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateVPCWithHostedZoneCommand(input) {
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
    AssociateVPCWithHostedZoneCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "AssociateVPCWithHostedZoneCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateVPCWithHostedZoneRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateVPCWithHostedZoneResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateVPCWithHostedZoneCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlAssociateVPCWithHostedZoneCommand(input, context);
    };
    AssociateVPCWithHostedZoneCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlAssociateVPCWithHostedZoneCommand(output, context);
    };
    return AssociateVPCWithHostedZoneCommand;
}($Command));
export { AssociateVPCWithHostedZoneCommand };
//# sourceMappingURL=AssociateVPCWithHostedZoneCommand.js.map