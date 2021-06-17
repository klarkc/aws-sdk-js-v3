import { __extends } from "tslib";
import { StopWorkspacesRequest, StopWorkspacesResult } from "../models/models_0";
import { deserializeAws_json1_1StopWorkspacesCommand, serializeAws_json1_1StopWorkspacesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Stops the specified WorkSpaces.</p>
 *          <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a
 *          state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or
 *             <code>ERROR</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, StopWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, StopWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new StopWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopWorkspacesCommandInput} for command's `input` shape.
 * @see {@link StopWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopWorkspacesCommand = /** @class */ (function (_super) {
    __extends(StopWorkspacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopWorkspacesCommand(input) {
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
    StopWorkspacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "StopWorkspacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopWorkspacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopWorkspacesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopWorkspacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopWorkspacesCommand(input, context);
    };
    StopWorkspacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopWorkspacesCommand(output, context);
    };
    return StopWorkspacesCommand;
}($Command));
export { StopWorkspacesCommand };
//# sourceMappingURL=StopWorkspacesCommand.js.map