import { __extends } from "tslib";
import { DescribeWorkspacesRequest, DescribeWorkspacesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeWorkspacesCommand, serializeAws_json1_1DescribeWorkspacesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified WorkSpaces.</p>
 *          <p>You can filter the results by using the bundle identifier, directory identifier, or
 *          owner, but you can specify only one filter at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspacesCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkspacesCommand = /** @class */ (function (_super) {
    __extends(DescribeWorkspacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorkspacesCommand(input) {
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
    DescribeWorkspacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeWorkspacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorkspacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorkspacesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorkspacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeWorkspacesCommand(input, context);
    };
    DescribeWorkspacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeWorkspacesCommand(output, context);
    };
    return DescribeWorkspacesCommand;
}($Command));
export { DescribeWorkspacesCommand };
//# sourceMappingURL=DescribeWorkspacesCommand.js.map