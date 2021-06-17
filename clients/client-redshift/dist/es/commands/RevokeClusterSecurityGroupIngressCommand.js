import { __extends } from "tslib";
import { RevokeClusterSecurityGroupIngressMessage, RevokeClusterSecurityGroupIngressResult } from "../models/models_1";
import { deserializeAws_queryRevokeClusterSecurityGroupIngressCommand, serializeAws_queryRevokeClusterSecurityGroupIngressCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Revokes an ingress rule in an Amazon Redshift security group for a previously authorized
 *             IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>.
 * For information about managing security groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeClusterSecurityGroupIngressCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeClusterSecurityGroupIngressCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RevokeClusterSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeClusterSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeClusterSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeClusterSecurityGroupIngressCommand = /** @class */ (function (_super) {
    __extends(RevokeClusterSecurityGroupIngressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeClusterSecurityGroupIngressCommand(input) {
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
    RevokeClusterSecurityGroupIngressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "RevokeClusterSecurityGroupIngressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeClusterSecurityGroupIngressMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RevokeClusterSecurityGroupIngressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeClusterSecurityGroupIngressCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRevokeClusterSecurityGroupIngressCommand(input, context);
    };
    RevokeClusterSecurityGroupIngressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRevokeClusterSecurityGroupIngressCommand(output, context);
    };
    return RevokeClusterSecurityGroupIngressCommand;
}($Command));
export { RevokeClusterSecurityGroupIngressCommand };
//# sourceMappingURL=RevokeClusterSecurityGroupIngressCommand.js.map