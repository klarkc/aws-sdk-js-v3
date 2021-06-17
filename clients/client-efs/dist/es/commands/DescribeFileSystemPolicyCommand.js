import { __extends } from "tslib";
import { DescribeFileSystemPolicyRequest, FileSystemPolicyDescription } from "../models/models_0";
import { deserializeAws_restJson1DescribeFileSystemPolicyCommand, serializeAws_restJson1DescribeFileSystemPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the <code>FileSystemPolicy</code> for the specified EFS file system.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFileSystemPolicyCommand = /** @class */ (function (_super) {
    __extends(DescribeFileSystemPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFileSystemPolicyCommand(input) {
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
    DescribeFileSystemPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "DescribeFileSystemPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFileSystemPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: FileSystemPolicyDescription.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFileSystemPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeFileSystemPolicyCommand(input, context);
    };
    DescribeFileSystemPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeFileSystemPolicyCommand(output, context);
    };
    return DescribeFileSystemPolicyCommand;
}($Command));
export { DescribeFileSystemPolicyCommand };
//# sourceMappingURL=DescribeFileSystemPolicyCommand.js.map