import { __extends } from "tslib";
import { DescribeWorkspacesConnectionStatusRequest, DescribeWorkspacesConnectionStatusResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand, serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the connection status of the specified WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspacesConnectionStatusCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspacesConnectionStatusCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeWorkspacesConnectionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspacesConnectionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspacesConnectionStatusCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkspacesConnectionStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeWorkspacesConnectionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorkspacesConnectionStatusCommand(input) {
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
    DescribeWorkspacesConnectionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeWorkspacesConnectionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorkspacesConnectionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorkspacesConnectionStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorkspacesConnectionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(input, context);
    };
    DescribeWorkspacesConnectionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(output, context);
    };
    return DescribeWorkspacesConnectionStatusCommand;
}($Command));
export { DescribeWorkspacesConnectionStatusCommand };
//# sourceMappingURL=DescribeWorkspacesConnectionStatusCommand.js.map