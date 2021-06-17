import { __extends } from "tslib";
import { DescribeWorkspaceSnapshotsRequest, DescribeWorkspaceSnapshotsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand, serializeAws_json1_1DescribeWorkspaceSnapshotsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the snapshots for the specified WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceSnapshotsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceSnapshotsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeWorkspaceSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspaceSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkspaceSnapshotsCommand = /** @class */ (function (_super) {
    __extends(DescribeWorkspaceSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorkspaceSnapshotsCommand(input) {
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
    DescribeWorkspaceSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeWorkspaceSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorkspaceSnapshotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorkspaceSnapshotsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorkspaceSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeWorkspaceSnapshotsCommand(input, context);
    };
    DescribeWorkspaceSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand(output, context);
    };
    return DescribeWorkspaceSnapshotsCommand;
}($Command));
export { DescribeWorkspaceSnapshotsCommand };
//# sourceMappingURL=DescribeWorkspaceSnapshotsCommand.js.map