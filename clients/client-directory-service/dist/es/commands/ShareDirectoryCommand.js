import { __extends } from "tslib";
import { ShareDirectoryRequest, ShareDirectoryResult } from "../models/models_0";
import { deserializeAws_json1_1ShareDirectoryCommand, serializeAws_json1_1ShareDirectoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Shares a specified directory (<code>DirectoryId</code>) in your AWS account (directory
 *       owner) with another AWS account (directory consumer). With this operation you can use your
 *       directory from any AWS account and from any Amazon VPC within an AWS Region.</p>
 *          <p>When you share your AWS Managed Microsoft AD directory, AWS Directory Service creates a
 *       shared directory in the directory consumer account. This shared directory contains the
 *       metadata to provide access to the directory within the directory owner account. The shared
 *       directory is visible in all VPCs in the directory consumer account.</p>
 *          <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be
 *       shared between AWS accounts inside the same AWS organization (<code>ORGANIZATIONS</code>). It
 *       also determines whether you can share the directory with any other AWS account either inside
 *       or outside of the organization (<code>HANDSHAKE</code>).</p>
 *          <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called,
 *       which sends a directory sharing request to the directory consumer. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ShareDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ShareDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ShareDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ShareDirectoryCommandInput} for command's `input` shape.
 * @see {@link ShareDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ShareDirectoryCommand = /** @class */ (function (_super) {
    __extends(ShareDirectoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ShareDirectoryCommand(input) {
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
    ShareDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "ShareDirectoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ShareDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ShareDirectoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ShareDirectoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ShareDirectoryCommand(input, context);
    };
    ShareDirectoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ShareDirectoryCommand(output, context);
    };
    return ShareDirectoryCommand;
}($Command));
export { ShareDirectoryCommand };
//# sourceMappingURL=ShareDirectoryCommand.js.map