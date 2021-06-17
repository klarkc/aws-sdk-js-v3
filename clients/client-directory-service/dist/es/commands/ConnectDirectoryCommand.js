import { __extends } from "tslib";
import { ConnectDirectoryRequest, ConnectDirectoryResult } from "../models/models_0";
import { deserializeAws_json1_1ConnectDirectoryCommand, serializeAws_json1_1ConnectDirectoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AD Connector to connect to an on-premises directory.</p>
 *          <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions
 *       have been explicitly granted through a policy. For details about what permissions are required
 *       to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions
 *       Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ConnectDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ConnectDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ConnectDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConnectDirectoryCommandInput} for command's `input` shape.
 * @see {@link ConnectDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConnectDirectoryCommand = /** @class */ (function (_super) {
    __extends(ConnectDirectoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConnectDirectoryCommand(input) {
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
    ConnectDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "ConnectDirectoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConnectDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConnectDirectoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConnectDirectoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ConnectDirectoryCommand(input, context);
    };
    ConnectDirectoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ConnectDirectoryCommand(output, context);
    };
    return ConnectDirectoryCommand;
}($Command));
export { ConnectDirectoryCommand };
//# sourceMappingURL=ConnectDirectoryCommand.js.map