import { __extends } from "tslib";
import { DescribeWorkspaceDirectoriesRequest, DescribeWorkspaceDirectoriesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand, serializeAws_json1_1DescribeWorkspaceDirectoriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the available directories that are registered with
 *          Amazon WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceDirectoriesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceDirectoriesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeWorkspaceDirectoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspaceDirectoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceDirectoriesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkspaceDirectoriesCommand = /** @class */ (function (_super) {
    __extends(DescribeWorkspaceDirectoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorkspaceDirectoriesCommand(input) {
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
    DescribeWorkspaceDirectoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeWorkspaceDirectoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorkspaceDirectoriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorkspaceDirectoriesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorkspaceDirectoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeWorkspaceDirectoriesCommand(input, context);
    };
    DescribeWorkspaceDirectoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand(output, context);
    };
    return DescribeWorkspaceDirectoriesCommand;
}($Command));
export { DescribeWorkspaceDirectoriesCommand };
//# sourceMappingURL=DescribeWorkspaceDirectoriesCommand.js.map