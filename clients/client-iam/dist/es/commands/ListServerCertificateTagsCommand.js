import { __extends } from "tslib";
import { ListServerCertificateTagsRequest, ListServerCertificateTagsResponse } from "../models/models_0";
import { deserializeAws_queryListServerCertificateTagsCommand, serializeAws_queryListServerCertificateTagsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the tags that are attached to the specified IAM server certificate. The
 *       returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
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
 * import { IAMClient, ListServerCertificateTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServerCertificateTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListServerCertificateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServerCertificateTagsCommandInput} for command's `input` shape.
 * @see {@link ListServerCertificateTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServerCertificateTagsCommand = /** @class */ (function (_super) {
    __extends(ListServerCertificateTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListServerCertificateTagsCommand(input) {
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
    ListServerCertificateTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListServerCertificateTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListServerCertificateTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListServerCertificateTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListServerCertificateTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListServerCertificateTagsCommand(input, context);
    };
    ListServerCertificateTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListServerCertificateTagsCommand(output, context);
    };
    return ListServerCertificateTagsCommand;
}($Command));
export { ListServerCertificateTagsCommand };
//# sourceMappingURL=ListServerCertificateTagsCommand.js.map