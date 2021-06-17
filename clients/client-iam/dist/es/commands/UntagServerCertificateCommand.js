import { __extends } from "tslib";
import { UntagServerCertificateRequest } from "../models/models_1";
import { deserializeAws_queryUntagServerCertificateCommand, serializeAws_queryUntagServerCertificateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified tags from the IAM server certificate.
 *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>For certificates in a Region supported by AWS Certificate Manager (ACM), we
 *         recommend that you don't use IAM server certificates. Instead, use ACM to provision,
 *         manage, and deploy your server certificates. For more information about IAM server
 *         certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server
 *           certificates</a> in the <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagServerCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagServerCertificateCommandInput} for command's `input` shape.
 * @see {@link UntagServerCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagServerCertificateCommand = /** @class */ (function (_super) {
    __extends(UntagServerCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagServerCertificateCommand(input) {
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
    UntagServerCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UntagServerCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagServerCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagServerCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUntagServerCertificateCommand(input, context);
    };
    UntagServerCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUntagServerCertificateCommand(output, context);
    };
    return UntagServerCertificateCommand;
}($Command));
export { UntagServerCertificateCommand };
//# sourceMappingURL=UntagServerCertificateCommand.js.map