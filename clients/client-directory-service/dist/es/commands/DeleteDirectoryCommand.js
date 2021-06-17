import { __extends } from "tslib";
import { DeleteDirectoryRequest, DeleteDirectoryResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDirectoryCommand, serializeAws_json1_1DeleteDirectoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an AWS Directory Service directory.</p>
 *          <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions
 *       have been explicitly granted through a policy. For details about what permissions are required
 *       to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions
 *       Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeleteDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDirectoryCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDirectoryCommand = /** @class */ (function (_super) {
    __extends(DeleteDirectoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDirectoryCommand(input) {
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
    DeleteDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DeleteDirectoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDirectoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDirectoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDirectoryCommand(input, context);
    };
    DeleteDirectoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDirectoryCommand(output, context);
    };
    return DeleteDirectoryCommand;
}($Command));
export { DeleteDirectoryCommand };
//# sourceMappingURL=DeleteDirectoryCommand.js.map