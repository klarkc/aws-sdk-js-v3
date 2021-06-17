import { __extends } from "tslib";
import { DisassociateFileSystemAliasesRequest, DisassociateFileSystemAliasesResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateFileSystemAliasesCommand, serializeAws_json1_1DisassociateFileSystemAliasesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases
 *             from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not
 *             associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p>
 *         <p>The system generated response showing the DNS aliases that
 *             Amazon FSx is attempting to disassociate from the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             disassociating with the file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DisassociateFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DisassociateFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DisassociateFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link DisassociateFileSystemAliasesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateFileSystemAliasesCommand = /** @class */ (function (_super) {
    __extends(DisassociateFileSystemAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateFileSystemAliasesCommand(input) {
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
    DisassociateFileSystemAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "DisassociateFileSystemAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateFileSystemAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateFileSystemAliasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateFileSystemAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateFileSystemAliasesCommand(input, context);
    };
    DisassociateFileSystemAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateFileSystemAliasesCommand(output, context);
    };
    return DisassociateFileSystemAliasesCommand;
}($Command));
export { DisassociateFileSystemAliasesCommand };
//# sourceMappingURL=DisassociateFileSystemAliasesCommand.js.map