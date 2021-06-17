import { __extends } from "tslib";
import { DescribeBackupsRequest, DescribeBackupsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeBackupsCommand, serializeAws_json1_1DescribeBackupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Describes backups. The results are ordered by time, with newest backups first.
 *       If you do not specify a BackupId or ServerName, the command returns all backups.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when the backup does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DescribeBackupsCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DescribeBackupsCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new DescribeBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBackupsCommand = /** @class */ (function (_super) {
    __extends(DescribeBackupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBackupsCommand(input) {
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
    DescribeBackupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksCMClient";
        var commandName = "DescribeBackupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBackupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBackupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBackupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeBackupsCommand(input, context);
    };
    DescribeBackupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeBackupsCommand(output, context);
    };
    return DescribeBackupsCommand;
}($Command));
export { DescribeBackupsCommand };
//# sourceMappingURL=DescribeBackupsCommand.js.map