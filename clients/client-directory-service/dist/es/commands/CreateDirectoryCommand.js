import { __extends } from "tslib";
import { CreateDirectoryRequest, CreateDirectoryResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDirectoryCommand, serializeAws_json1_1CreateDirectoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>AWS Directory Service Admin
 *         Guide</i>.</p>
 *          <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions
 *       have been explicitly granted through a policy. For details about what permissions are required
 *       to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions
 *       Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDirectoryCommandInput} for command's `input` shape.
 * @see {@link CreateDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDirectoryCommand = /** @class */ (function (_super) {
    __extends(CreateDirectoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDirectoryCommand(input) {
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
    CreateDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "CreateDirectoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDirectoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDirectoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDirectoryCommand(input, context);
    };
    CreateDirectoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDirectoryCommand(output, context);
    };
    return CreateDirectoryCommand;
}($Command));
export { CreateDirectoryCommand };
//# sourceMappingURL=CreateDirectoryCommand.js.map