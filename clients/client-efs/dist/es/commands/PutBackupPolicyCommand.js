import { __extends } from "tslib";
import { BackupPolicyDescription, PutBackupPolicyRequest } from "../models/models_0";
import { deserializeAws_restJson1PutBackupPolicyCommand, serializeAws_restJson1PutBackupPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new PutBackupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBackupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutBackupPolicyCommand = /** @class */ (function (_super) {
    __extends(PutBackupPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutBackupPolicyCommand(input) {
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
    PutBackupPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "PutBackupPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutBackupPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BackupPolicyDescription.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutBackupPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutBackupPolicyCommand(input, context);
    };
    PutBackupPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutBackupPolicyCommand(output, context);
    };
    return PutBackupPolicyCommand;
}($Command));
export { PutBackupPolicyCommand };
//# sourceMappingURL=PutBackupPolicyCommand.js.map