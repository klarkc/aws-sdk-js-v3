import { __extends } from "tslib";
import { AuthorizeDBSecurityGroupIngressMessage, AuthorizeDBSecurityGroupIngressResult } from "../models/models_0";
import { deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand, serializeAws_queryAuthorizeDBSecurityGroupIngressCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security
 *           groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC
 *           instances. Second, IP ranges are available if the application accessing your database is running on the Internet.
 *           Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId
 *           and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p>
 *          <note>
 *             <p>You can't authorize ingress from an EC2 security group in one AWS Region to an Amazon RDS DB instance in
 *              another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p>
 *          </note>
 *          <p>For an overview of CIDR ranges, go to the
 *             <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AuthorizeDBSecurityGroupIngressCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AuthorizeDBSecurityGroupIngressCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new AuthorizeDBSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeDBSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeDBSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AuthorizeDBSecurityGroupIngressCommand = /** @class */ (function (_super) {
    __extends(AuthorizeDBSecurityGroupIngressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AuthorizeDBSecurityGroupIngressCommand(input) {
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
    AuthorizeDBSecurityGroupIngressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "AuthorizeDBSecurityGroupIngressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AuthorizeDBSecurityGroupIngressMessage.filterSensitiveLog,
            outputFilterSensitiveLog: AuthorizeDBSecurityGroupIngressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AuthorizeDBSecurityGroupIngressCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAuthorizeDBSecurityGroupIngressCommand(input, context);
    };
    AuthorizeDBSecurityGroupIngressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand(output, context);
    };
    return AuthorizeDBSecurityGroupIngressCommand;
}($Command));
export { AuthorizeDBSecurityGroupIngressCommand };
//# sourceMappingURL=AuthorizeDBSecurityGroupIngressCommand.js.map