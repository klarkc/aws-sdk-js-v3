import { __extends } from "tslib";
import { UpdateServerCertificateRequest } from "../models/models_1";
import { deserializeAws_queryUpdateServerCertificateCommand, serializeAws_queryUpdateServerCertificateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the name and/or the path of the specified server certificate stored in
 *             IAM.</p>
 *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic also includes a list of AWS services that can use the server certificates that
 *             you manage with IAM.</p>
 *         <important>
 *             <p>You should understand the implications of changing a server certificate's path or
 *                 name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *         </important>
 *         <note>
 *             <p>The person making the request (the principal), must have permission to change the
 *                 server certificate with the old name and the new name. For example, to change the
 *                 certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the
 *                 principal must have a policy that allows them to update both certificates. If the
 *                 principal has permission to update the <code>ProductionCert</code> group, but not
 *                 the <code>ProdCert</code> certificate, then the update fails. For more information
 *                 about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateServerCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServerCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateServerCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateServerCertificateCommand = /** @class */ (function (_super) {
    __extends(UpdateServerCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateServerCertificateCommand(input) {
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
    UpdateServerCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateServerCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateServerCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateServerCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateServerCertificateCommand(input, context);
    };
    UpdateServerCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateServerCertificateCommand(output, context);
    };
    return UpdateServerCertificateCommand;
}($Command));
export { UpdateServerCertificateCommand };
//# sourceMappingURL=UpdateServerCertificateCommand.js.map