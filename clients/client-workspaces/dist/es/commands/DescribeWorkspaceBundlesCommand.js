import { __extends } from "tslib";
import { DescribeWorkspaceBundlesRequest, DescribeWorkspaceBundlesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeWorkspaceBundlesCommand, serializeAws_json1_1DescribeWorkspaceBundlesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes the available WorkSpace bundles.</p>
 *          <p>You can filter the results using either bundle ID or owner, but not both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceBundlesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceBundlesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeWorkspaceBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspaceBundlesCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceBundlesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkspaceBundlesCommand = /** @class */ (function (_super) {
    __extends(DescribeWorkspaceBundlesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorkspaceBundlesCommand(input) {
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
    DescribeWorkspaceBundlesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeWorkspaceBundlesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorkspaceBundlesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorkspaceBundlesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorkspaceBundlesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeWorkspaceBundlesCommand(input, context);
    };
    DescribeWorkspaceBundlesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeWorkspaceBundlesCommand(output, context);
    };
    return DescribeWorkspaceBundlesCommand;
}($Command));
export { DescribeWorkspaceBundlesCommand };
//# sourceMappingURL=DescribeWorkspaceBundlesCommand.js.map