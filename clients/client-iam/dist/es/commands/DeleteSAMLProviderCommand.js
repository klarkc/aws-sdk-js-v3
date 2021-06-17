import { __extends } from "tslib";
import { DeleteSAMLProviderRequest } from "../models/models_0";
import { deserializeAws_queryDeleteSAMLProviderCommand, serializeAws_queryDeleteSAMLProviderCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a SAML provider resource in IAM.</p>
 *         <p>Deleting the provider resource from IAM does not update any roles that reference the
 *             SAML provider resource's ARN as a principal in their trust policies. Any attempt to
 *             assume a role that references a non-existent provider resource ARN fails.</p>
 *         <note>
 *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteSAMLProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSAMLProviderCommand = /** @class */ (function (_super) {
    __extends(DeleteSAMLProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSAMLProviderCommand(input) {
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
    DeleteSAMLProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteSAMLProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSAMLProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSAMLProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteSAMLProviderCommand(input, context);
    };
    DeleteSAMLProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteSAMLProviderCommand(output, context);
    };
    return DeleteSAMLProviderCommand;
}($Command));
export { DeleteSAMLProviderCommand };
//# sourceMappingURL=DeleteSAMLProviderCommand.js.map