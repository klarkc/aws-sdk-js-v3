import { __extends } from "tslib";
import { CreateBackupRequest, CreateBackupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateBackupCommand, serializeAws_json1_1CreateBackupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Creates an application-level backup of a server. While the
 *       server is in the <code>BACKING_UP</code> state, the server cannot be
 *       changed, and no additional backup can be created.
 *     </p>
 *          <p>
 *       Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50
 *       manual backups.
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached.
 *       An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY.
 *       A <code>ResourceNotFoundException</code> is thrown when the server is not found.
 *       A <code>ValidationException</code> is thrown when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, CreateBackupCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, CreateBackupCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackupCommandInput} for command's `input` shape.
 * @see {@link CreateBackupCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBackupCommand = /** @class */ (function (_super) {
    __extends(CreateBackupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBackupCommand(input) {
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
    CreateBackupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksCMClient";
        var commandName = "CreateBackupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBackupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBackupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBackupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateBackupCommand(input, context);
    };
    CreateBackupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateBackupCommand(output, context);
    };
    return CreateBackupCommand;
}($Command));
export { CreateBackupCommand };
//# sourceMappingURL=CreateBackupCommand.js.map