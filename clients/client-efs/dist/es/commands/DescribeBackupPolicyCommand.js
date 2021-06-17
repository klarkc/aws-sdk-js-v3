import { __extends } from "tslib";
import { BackupPolicyDescription, DescribeBackupPolicyRequest } from "../models/models_0";
import { deserializeAws_restJson1DescribeBackupPolicyCommand, serializeAws_restJson1DescribeBackupPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the backup policy for the specified EFS file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeBackupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBackupPolicyCommand = /** @class */ (function (_super) {
    __extends(DescribeBackupPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBackupPolicyCommand(input) {
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
    DescribeBackupPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "DescribeBackupPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBackupPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BackupPolicyDescription.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBackupPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBackupPolicyCommand(input, context);
    };
    DescribeBackupPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBackupPolicyCommand(output, context);
    };
    return DescribeBackupPolicyCommand;
}($Command));
export { DescribeBackupPolicyCommand };
//# sourceMappingURL=DescribeBackupPolicyCommand.js.map