import { __extends } from "tslib";
import { UpdateWorkspaceBundleRequest, UpdateWorkspaceBundleResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateWorkspaceBundleCommand, serializeAws_json1_1UpdateWorkspaceBundleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html">
 *             Update a Custom WorkSpaces Bundle</a>.</p>
 *
 *          <important>
 *             <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're
 *             based on. To update existing WorkSpaces that are based on a bundle that you've updated, you
 *             must either rebuild the WorkSpaces or delete and recreate them.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new UpdateWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceBundleCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWorkspaceBundleCommand = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceBundleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWorkspaceBundleCommand(input) {
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
    UpdateWorkspaceBundleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "UpdateWorkspaceBundleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWorkspaceBundleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWorkspaceBundleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWorkspaceBundleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateWorkspaceBundleCommand(input, context);
    };
    UpdateWorkspaceBundleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateWorkspaceBundleCommand(output, context);
    };
    return UpdateWorkspaceBundleCommand;
}($Command));
export { UpdateWorkspaceBundleCommand };
//# sourceMappingURL=UpdateWorkspaceBundleCommand.js.map