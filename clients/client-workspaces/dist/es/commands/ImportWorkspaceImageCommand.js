import { __extends } from "tslib";
import { ImportWorkspaceImageRequest, ImportWorkspaceImageResult } from "../models/models_0";
import { deserializeAws_json1_1ImportWorkspaceImageCommand, serializeAws_json1_1ImportWorkspaceImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon
 *          WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your AWS
 *          account, and you must own the image. For more information about creating BYOL images, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">
 *             Bring Your Own Windows Desktop Licenses</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ImportWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ImportWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ImportWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link ImportWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportWorkspaceImageCommand = /** @class */ (function (_super) {
    __extends(ImportWorkspaceImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportWorkspaceImageCommand(input) {
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
    ImportWorkspaceImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "ImportWorkspaceImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportWorkspaceImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportWorkspaceImageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportWorkspaceImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportWorkspaceImageCommand(input, context);
    };
    ImportWorkspaceImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportWorkspaceImageCommand(output, context);
    };
    return ImportWorkspaceImageCommand;
}($Command));
export { ImportWorkspaceImageCommand };
//# sourceMappingURL=ImportWorkspaceImageCommand.js.map