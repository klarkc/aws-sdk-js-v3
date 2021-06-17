import { __extends } from "tslib";
import { DeleteSigningCertificateRequest } from "../models/models_0";
import { deserializeAws_queryDeleteSigningCertificateCommand, serializeAws_queryDeleteSigningCertificateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a signing certificate associated with the specified IAM user.</p>
 *         <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the AWS access key ID signing the request. This operation works for access keys under
 *             the AWS account. Consequently, you can use this operation to manage AWS account root
 *             user credentials even if the AWS account has no associated IAM users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteSigningCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSigningCertificateCommand = /** @class */ (function (_super) {
    __extends(DeleteSigningCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSigningCertificateCommand(input) {
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
    DeleteSigningCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteSigningCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSigningCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSigningCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteSigningCertificateCommand(input, context);
    };
    DeleteSigningCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteSigningCertificateCommand(output, context);
    };
    return DeleteSigningCertificateCommand;
}($Command));
export { DeleteSigningCertificateCommand };
//# sourceMappingURL=DeleteSigningCertificateCommand.js.map