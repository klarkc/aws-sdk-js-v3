import { __extends } from "tslib";
import { RebuildWorkspacesRequest, RebuildWorkspacesResult } from "../models/models_0";
import { deserializeAws_json1_1RebuildWorkspacesCommand, serializeAws_json1_1RebuildWorkspacesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rebuilds the specified WorkSpace.</p>
 *          <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>,
 *             <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p>
 *          <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss
 *          of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a
 *          WorkSpace</a>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
 *          rebuilt.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RebuildWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RebuildWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new RebuildWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebuildWorkspacesCommandInput} for command's `input` shape.
 * @see {@link RebuildWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebuildWorkspacesCommand = /** @class */ (function (_super) {
    __extends(RebuildWorkspacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebuildWorkspacesCommand(input) {
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
    RebuildWorkspacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "RebuildWorkspacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebuildWorkspacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RebuildWorkspacesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebuildWorkspacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RebuildWorkspacesCommand(input, context);
    };
    RebuildWorkspacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RebuildWorkspacesCommand(output, context);
    };
    return RebuildWorkspacesCommand;
}($Command));
export { RebuildWorkspacesCommand };
//# sourceMappingURL=RebuildWorkspacesCommand.js.map