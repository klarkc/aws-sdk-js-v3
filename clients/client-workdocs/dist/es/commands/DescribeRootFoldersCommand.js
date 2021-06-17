import { __extends } from "tslib";
import { DescribeRootFoldersRequest, DescribeRootFoldersResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeRootFoldersCommand, serializeAws_restJson1DescribeRootFoldersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the current user's special folders; the <code>RootFolder</code> and the
 *                 <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and
 *             folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid
 *             action for SigV4 (administrative API) clients.</p>
 *         <p>This action requires an authentication token. To get an authentication token,
 *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
 *                 Control for User Applications</a> in the
 *             <i>Amazon
 *             WorkDocs Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeRootFoldersCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeRootFoldersCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeRootFoldersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRootFoldersCommandInput} for command's `input` shape.
 * @see {@link DescribeRootFoldersCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRootFoldersCommand = /** @class */ (function (_super) {
    __extends(DescribeRootFoldersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRootFoldersCommand(input) {
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
    DescribeRootFoldersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DescribeRootFoldersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRootFoldersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRootFoldersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRootFoldersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRootFoldersCommand(input, context);
    };
    DescribeRootFoldersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRootFoldersCommand(output, context);
    };
    return DescribeRootFoldersCommand;
}($Command));
export { DescribeRootFoldersCommand };
//# sourceMappingURL=DescribeRootFoldersCommand.js.map