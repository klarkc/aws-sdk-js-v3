import { __extends } from "tslib";
import { StartWorkspacesRequest, StartWorkspacesResult } from "../models/models_0";
import { deserializeAws_json1_1StartWorkspacesCommand, serializeAws_json1_1StartWorkspacesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the specified WorkSpaces.</p>
 *          <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a
 *          state of <code>STOPPED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, StartWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, StartWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new StartWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartWorkspacesCommandInput} for command's `input` shape.
 * @see {@link StartWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartWorkspacesCommand = /** @class */ (function (_super) {
    __extends(StartWorkspacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartWorkspacesCommand(input) {
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
    StartWorkspacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "StartWorkspacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartWorkspacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartWorkspacesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartWorkspacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartWorkspacesCommand(input, context);
    };
    StartWorkspacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartWorkspacesCommand(output, context);
    };
    return StartWorkspacesCommand;
}($Command));
export { StartWorkspacesCommand };
//# sourceMappingURL=StartWorkspacesCommand.js.map