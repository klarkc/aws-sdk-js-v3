"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkspaceImagePermissionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class UpdateWorkspaceImagePermissionCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "WorkSpacesClient";
        const commandName = "UpdateWorkspaceImagePermissionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateWorkspaceImagePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateWorkspaceImagePermissionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateWorkspaceImagePermissionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand(output, context);
    }
}
exports.UpdateWorkspaceImagePermissionCommand = UpdateWorkspaceImagePermissionCommand;
//# sourceMappingURL=UpdateWorkspaceImagePermissionCommand.js.map