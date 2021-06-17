import { __extends } from "tslib";
import { UpdateWorkspaceImagePermissionRequest, UpdateWorkspaceImagePermissionResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand, serializeAws_json1_1UpdateWorkspaceImagePermissionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Shares or unshares an image with one account in the same AWS Region by specifying whether that account has
 *          permission to copy the image. If the copy image permission is granted, the image is shared with that account.
 *          If the copy image permission is revoked, the image is unshared with the account.</p>
 *
 *          <p>After an image has been shared, the recipient account can copy the image to other AWS Regions as needed.</p>
 *
 *          <note>
 *             <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
 *
 *             <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions,
 *             contact AWS Support.</p>
 *          </note>
 *
 *          <p>For more information about sharing images, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html">
 *             Share or Unshare a Custom WorkSpaces Image</a>.</p>
 *
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>To delete an image that has been shared, you must unshare the image before you delete it.</p>
 *                </li>
 *                <li>
 *                   <p>Sharing Bring Your Own License (BYOL) images across AWS accounts isn't supported at
 *                   this time in the AWS GovCloud (US-West) Region. To share BYOL images across accounts in
 *                   the AWS GovCloud (US-West) Region, contact AWS Support.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateWorkspaceImagePermissionCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateWorkspaceImagePermissionCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new UpdateWorkspaceImagePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkspaceImagePermissionCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceImagePermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWorkspaceImagePermissionCommand = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceImagePermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWorkspaceImagePermissionCommand(input) {
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
    UpdateWorkspaceImagePermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "UpdateWorkspaceImagePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWorkspaceImagePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWorkspaceImagePermissionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWorkspaceImagePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateWorkspaceImagePermissionCommand(input, context);
    };
    UpdateWorkspaceImagePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand(output, context);
    };
    return UpdateWorkspaceImagePermissionCommand;
}($Command));
export { UpdateWorkspaceImagePermissionCommand };
//# sourceMappingURL=UpdateWorkspaceImagePermissionCommand.js.map