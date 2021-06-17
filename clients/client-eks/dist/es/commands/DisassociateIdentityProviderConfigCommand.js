import { __extends } from "tslib";
import { DisassociateIdentityProviderConfigRequest, DisassociateIdentityProviderConfigResponse, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateIdentityProviderConfigCommand, serializeAws_restJson1DisassociateIdentityProviderConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates an identity provider configuration from a cluster. If you disassociate
 *             an identity provider from your cluster, users included in the provider can no longer
 *             access the cluster. However, you can still access the cluster with AWS IAM
 *             users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DisassociateIdentityProviderConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DisassociateIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DisassociateIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link DisassociateIdentityProviderConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateIdentityProviderConfigCommand = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateIdentityProviderConfigCommand(input) {
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
    DisassociateIdentityProviderConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "DisassociateIdentityProviderConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateIdentityProviderConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateIdentityProviderConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateIdentityProviderConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateIdentityProviderConfigCommand(input, context);
    };
    DisassociateIdentityProviderConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateIdentityProviderConfigCommand(output, context);
    };
    return DisassociateIdentityProviderConfigCommand;
}($Command));
export { DisassociateIdentityProviderConfigCommand };
//# sourceMappingURL=DisassociateIdentityProviderConfigCommand.js.map