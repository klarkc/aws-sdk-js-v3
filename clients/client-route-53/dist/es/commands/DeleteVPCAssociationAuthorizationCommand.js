import { __extends } from "tslib";
import { DeleteVPCAssociationAuthorizationRequest, DeleteVPCAssociationAuthorizationResponse, } from "../models/models_0";
import { deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand, serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DeleteVPCAssociationAuthorizationCommand = /** @class */ (function (_super) {
    __extends(DeleteVPCAssociationAuthorizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVPCAssociationAuthorizationCommand(input) {
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
    DeleteVPCAssociationAuthorizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "DeleteVPCAssociationAuthorizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVPCAssociationAuthorizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVPCAssociationAuthorizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVPCAssociationAuthorizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand(input, context);
    };
    DeleteVPCAssociationAuthorizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand(output, context);
    };
    return DeleteVPCAssociationAuthorizationCommand;
}($Command));
export { DeleteVPCAssociationAuthorizationCommand };
//# sourceMappingURL=DeleteVPCAssociationAuthorizationCommand.js.map