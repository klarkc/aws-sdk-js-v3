import { __extends } from "tslib";
import { DescribeWorkspaceImagePermissionsRequest, DescribeWorkspaceImagePermissionsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommand, serializeAws_json1_1DescribeWorkspaceImagePermissionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the permissions that the owner of an image has granted to other
 *          AWS accounts for an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceImagePermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceImagePermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeWorkspaceImagePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspaceImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceImagePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkspaceImagePermissionsCommand = /** @class */ (function (_super) {
    __extends(DescribeWorkspaceImagePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorkspaceImagePermissionsCommand(input) {
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
    DescribeWorkspaceImagePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeWorkspaceImagePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorkspaceImagePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorkspaceImagePermissionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorkspaceImagePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeWorkspaceImagePermissionsCommand(input, context);
    };
    DescribeWorkspaceImagePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommand(output, context);
    };
    return DescribeWorkspaceImagePermissionsCommand;
}($Command));
export { DescribeWorkspaceImagePermissionsCommand };
//# sourceMappingURL=DescribeWorkspaceImagePermissionsCommand.js.map