import { __extends } from "tslib";
import { RevokeDBSecurityGroupIngressMessage, RevokeDBSecurityGroupIngressResult } from "../models/models_1";
import { deserializeAws_queryRevokeDBSecurityGroupIngressCommand, serializeAws_queryRevokeDBSecurityGroupIngressCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RevokeDBSecurityGroupIngressCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RevokeDBSecurityGroupIngressCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RevokeDBSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeDBSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeDBSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeDBSecurityGroupIngressCommand = /** @class */ (function (_super) {
    __extends(RevokeDBSecurityGroupIngressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeDBSecurityGroupIngressCommand(input) {
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
    RevokeDBSecurityGroupIngressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RevokeDBSecurityGroupIngressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeDBSecurityGroupIngressMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RevokeDBSecurityGroupIngressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeDBSecurityGroupIngressCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRevokeDBSecurityGroupIngressCommand(input, context);
    };
    RevokeDBSecurityGroupIngressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRevokeDBSecurityGroupIngressCommand(output, context);
    };
    return RevokeDBSecurityGroupIngressCommand;
}($Command));
export { RevokeDBSecurityGroupIngressCommand };
//# sourceMappingURL=RevokeDBSecurityGroupIngressCommand.js.map