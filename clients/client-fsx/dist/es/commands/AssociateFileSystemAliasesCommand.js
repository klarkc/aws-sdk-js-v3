import { __extends } from "tslib";
import { AssociateFileSystemAliasesRequest, AssociateFileSystemAliasesResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateFileSystemAliasesCommand, serializeAws_json1_1AssociateFileSystemAliasesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system.
 *         A file systen can have a maximum of 50 DNS aliases associated with it at any one time. If you try to
 *         associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request.
 *         For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including
 *              additional steps you must take to be able to access your file system using a DNS alias.</p>
 *         <p>The system response shows the DNS aliases that
 *             Amazon FSx is attempting to associate with the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             associating with the file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, AssociateFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, AssociateFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new AssociateFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link AssociateFileSystemAliasesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateFileSystemAliasesCommand = /** @class */ (function (_super) {
    __extends(AssociateFileSystemAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateFileSystemAliasesCommand(input) {
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
    AssociateFileSystemAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "AssociateFileSystemAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateFileSystemAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateFileSystemAliasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateFileSystemAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateFileSystemAliasesCommand(input, context);
    };
    AssociateFileSystemAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateFileSystemAliasesCommand(output, context);
    };
    return AssociateFileSystemAliasesCommand;
}($Command));
export { AssociateFileSystemAliasesCommand };
//# sourceMappingURL=AssociateFileSystemAliasesCommand.js.map