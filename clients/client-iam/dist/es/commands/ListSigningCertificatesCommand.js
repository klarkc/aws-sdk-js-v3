import { __extends } from "tslib";
import { ListSigningCertificatesRequest, ListSigningCertificatesResponse } from "../models/models_0";
import { deserializeAws_queryListSigningCertificatesCommand, serializeAws_queryListSigningCertificatesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the signing certificates associated with the specified IAM
 *             user. If none exists, the operation returns an empty list.</p>
 *         <p>Although each user is limited to a small number of signing certificates, you can still
 *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 *         <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the AWS access key ID used to sign the request for this operation.
 *             This operation works for access keys under the AWS account. Consequently, you can use
 *             this operation to manage AWS account root user credentials even if the AWS account
 *             has no associated users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSigningCertificatesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSigningCertificatesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListSigningCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListSigningCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSigningCertificatesCommand = /** @class */ (function (_super) {
    __extends(ListSigningCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSigningCertificatesCommand(input) {
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
    ListSigningCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListSigningCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSigningCertificatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSigningCertificatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSigningCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListSigningCertificatesCommand(input, context);
    };
    ListSigningCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListSigningCertificatesCommand(output, context);
    };
    return ListSigningCertificatesCommand;
}($Command));
export { ListSigningCertificatesCommand };
//# sourceMappingURL=ListSigningCertificatesCommand.js.map