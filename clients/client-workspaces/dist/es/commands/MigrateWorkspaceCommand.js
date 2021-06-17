import { __extends } from "tslib";
import { MigrateWorkspaceRequest, MigrateWorkspaceResult } from "../models/models_0";
import { deserializeAws_json1_1MigrateWorkspaceCommand, serializeAws_json1_1MigrateWorkspaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p>
 *
 *          <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume
 *          from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code>
 *          user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code>
 *          folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p>
 *
 *          <p>For available migration scenarios, details about what happens during migration, and best practices, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, MigrateWorkspaceCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, MigrateWorkspaceCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new MigrateWorkspaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MigrateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link MigrateWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MigrateWorkspaceCommand = /** @class */ (function (_super) {
    __extends(MigrateWorkspaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MigrateWorkspaceCommand(input) {
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
    MigrateWorkspaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "MigrateWorkspaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MigrateWorkspaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: MigrateWorkspaceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MigrateWorkspaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1MigrateWorkspaceCommand(input, context);
    };
    MigrateWorkspaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1MigrateWorkspaceCommand(output, context);
    };
    return MigrateWorkspaceCommand;
}($Command));
export { MigrateWorkspaceCommand };
//# sourceMappingURL=MigrateWorkspaceCommand.js.map