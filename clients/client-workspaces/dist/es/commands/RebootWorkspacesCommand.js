import { __extends } from "tslib";
import { RebootWorkspacesRequest, RebootWorkspacesResult } from "../models/models_0";
import { deserializeAws_json1_1RebootWorkspacesCommand, serializeAws_json1_1RebootWorkspacesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Reboots the specified WorkSpaces.</p>
 *          <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or
 *             <code>UNHEALTHY</code>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RebootWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RebootWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new RebootWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootWorkspacesCommandInput} for command's `input` shape.
 * @see {@link RebootWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebootWorkspacesCommand = /** @class */ (function (_super) {
    __extends(RebootWorkspacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebootWorkspacesCommand(input) {
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
    RebootWorkspacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "RebootWorkspacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebootWorkspacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RebootWorkspacesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebootWorkspacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RebootWorkspacesCommand(input, context);
    };
    RebootWorkspacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RebootWorkspacesCommand(output, context);
    };
    return RebootWorkspacesCommand;
}($Command));
export { RebootWorkspacesCommand };
//# sourceMappingURL=RebootWorkspacesCommand.js.map