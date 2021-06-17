import { __extends } from "tslib";
import { CreateVPCAssociationAuthorizationRequest, CreateVPCAssociationAuthorizationResponse, } from "../models/models_0";
import { deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand, serializeAws_restXmlCreateVPCAssociationAuthorizationCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateVPCAssociationAuthorizationCommand = /** @class */ (function (_super) {
    __extends(CreateVPCAssociationAuthorizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVPCAssociationAuthorizationCommand(input) {
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
    CreateVPCAssociationAuthorizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "CreateVPCAssociationAuthorizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVPCAssociationAuthorizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVPCAssociationAuthorizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVPCAssociationAuthorizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlCreateVPCAssociationAuthorizationCommand(input, context);
    };
    CreateVPCAssociationAuthorizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand(output, context);
    };
    return CreateVPCAssociationAuthorizationCommand;
}($Command));
export { CreateVPCAssociationAuthorizationCommand };
//# sourceMappingURL=CreateVPCAssociationAuthorizationCommand.js.map