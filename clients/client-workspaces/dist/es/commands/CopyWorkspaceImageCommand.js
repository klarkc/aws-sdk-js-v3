import { __extends } from "tslib";
import { CopyWorkspaceImageRequest, CopyWorkspaceImageResult } from "../models/models_0";
import { deserializeAws_json1_1CopyWorkspaceImageCommand, serializeAws_json1_1CopyWorkspaceImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies the specified image from the specified Region to the current Region.
 *          For more information about copying images, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html">
 *             Copy a Custom WorkSpaces Image</a>.</p>
 *
 *          <note>
 *             <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
 *
 *             <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions,
 *             contact AWS Support.</p>
 *          </note>
 *
 *          <important>
 *             <p>Before copying a shared image, be sure to verify that it has been shared from the
 *             correct AWS account. To determine if an image has been shared and to see the AWS
 *             account ID that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CopyWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CopyWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CopyWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link CopyWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyWorkspaceImageCommand = /** @class */ (function (_super) {
    __extends(CopyWorkspaceImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopyWorkspaceImageCommand(input) {
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
    CopyWorkspaceImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "CopyWorkspaceImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopyWorkspaceImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CopyWorkspaceImageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopyWorkspaceImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CopyWorkspaceImageCommand(input, context);
    };
    CopyWorkspaceImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CopyWorkspaceImageCommand(output, context);
    };
    return CopyWorkspaceImageCommand;
}($Command));
export { CopyWorkspaceImageCommand };
//# sourceMappingURL=CopyWorkspaceImageCommand.js.map