import { __extends } from "tslib";
import { DeleteWorkspaceBundleRequest, DeleteWorkspaceBundleResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteWorkspaceBundleCommand, serializeAws_json1_1DeleteWorkspaceBundleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html">
 *             Delete a Custom WorkSpaces Bundle or Image</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeleteWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceBundleCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWorkspaceBundleCommand = /** @class */ (function (_super) {
    __extends(DeleteWorkspaceBundleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWorkspaceBundleCommand(input) {
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
    DeleteWorkspaceBundleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DeleteWorkspaceBundleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWorkspaceBundleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWorkspaceBundleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWorkspaceBundleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteWorkspaceBundleCommand(input, context);
    };
    DeleteWorkspaceBundleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteWorkspaceBundleCommand(output, context);
    };
    return DeleteWorkspaceBundleCommand;
}($Command));
export { DeleteWorkspaceBundleCommand };
//# sourceMappingURL=DeleteWorkspaceBundleCommand.js.map