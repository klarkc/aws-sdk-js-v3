import { __extends } from "tslib";
import { AuthorizeClusterSecurityGroupIngressMessage, AuthorizeClusterSecurityGroupIngressResult, } from "../models/models_0";
import { deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand, serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether
 *             the application accessing your cluster is running on the Internet or an Amazon EC2
 *             instance, you can authorize inbound access to either a Classless Interdomain Routing
 *             (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as
 *             many as 20 ingress rules to an Amazon Redshift security group.</p>
 *         <p>If you authorize access to an Amazon EC2 security group, specify
 *                 <i>EC2SecurityGroupName</i> and
 *                 <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and
 *             Amazon Redshift cluster must be in the same AWS Region. </p>
 *         <p>If you authorize access to a CIDR/IP address range, specify
 *                 <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia
 *             article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>
 *         <p>You must also associate the security group with a cluster so that clients running
 *             on these IP addresses or the EC2 instance are authorized to connect to the cluster. For
 *             information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security
 *                 Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeClusterSecurityGroupIngressCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeClusterSecurityGroupIngressCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AuthorizeClusterSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeClusterSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeClusterSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AuthorizeClusterSecurityGroupIngressCommand = /** @class */ (function (_super) {
    __extends(AuthorizeClusterSecurityGroupIngressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AuthorizeClusterSecurityGroupIngressCommand(input) {
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
    AuthorizeClusterSecurityGroupIngressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "AuthorizeClusterSecurityGroupIngressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AuthorizeClusterSecurityGroupIngressMessage.filterSensitiveLog,
            outputFilterSensitiveLog: AuthorizeClusterSecurityGroupIngressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AuthorizeClusterSecurityGroupIngressCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand(input, context);
    };
    AuthorizeClusterSecurityGroupIngressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand(output, context);
    };
    return AuthorizeClusterSecurityGroupIngressCommand;
}($Command));
export { AuthorizeClusterSecurityGroupIngressCommand };
//# sourceMappingURL=AuthorizeClusterSecurityGroupIngressCommand.js.map