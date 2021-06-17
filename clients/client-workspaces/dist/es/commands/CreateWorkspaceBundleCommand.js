import { __extends } from "tslib";
import { CreateWorkspaceBundleRequest, CreateWorkspaceBundleResult } from "../models/models_0";
import { deserializeAws_json1_1CreateWorkspaceBundleCommand, serializeAws_json1_1CreateWorkspaceBundleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html">
 *             Create a Custom WorkSpaces Image and Bundle</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceBundleCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorkspaceBundleCommand = /** @class */ (function (_super) {
    __extends(CreateWorkspaceBundleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWorkspaceBundleCommand(input) {
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
    CreateWorkspaceBundleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "CreateWorkspaceBundleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWorkspaceBundleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWorkspaceBundleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWorkspaceBundleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateWorkspaceBundleCommand(input, context);
    };
    CreateWorkspaceBundleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateWorkspaceBundleCommand(output, context);
    };
    return CreateWorkspaceBundleCommand;
}($Command));
export { CreateWorkspaceBundleCommand };
//# sourceMappingURL=CreateWorkspaceBundleCommand.js.map