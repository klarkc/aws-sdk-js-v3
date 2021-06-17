import { __extends } from "tslib";
import { DeleteWorkspaceImageRequest, DeleteWorkspaceImageResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteWorkspaceImageCommand, serializeAws_json1_1DeleteWorkspaceImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified image from your account. To delete an image, you must first delete
 *          any bundles that are associated with the image and unshare the image if it is shared with
 *          other accounts. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeleteWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWorkspaceImageCommand = /** @class */ (function (_super) {
    __extends(DeleteWorkspaceImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWorkspaceImageCommand(input) {
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
    DeleteWorkspaceImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DeleteWorkspaceImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWorkspaceImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWorkspaceImageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWorkspaceImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteWorkspaceImageCommand(input, context);
    };
    DeleteWorkspaceImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteWorkspaceImageCommand(output, context);
    };
    return DeleteWorkspaceImageCommand;
}($Command));
export { DeleteWorkspaceImageCommand };
//# sourceMappingURL=DeleteWorkspaceImageCommand.js.map