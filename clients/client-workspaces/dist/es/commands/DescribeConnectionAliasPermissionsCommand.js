import { __extends } from "tslib";
import { DescribeConnectionAliasPermissionsRequest, DescribeConnectionAliasPermissionsResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeConnectionAliasPermissionsCommand, serializeAws_json1_1DescribeConnectionAliasPermissionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the permissions that the owner of a connection alias has granted to another AWS account for
 *          the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeConnectionAliasPermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeConnectionAliasPermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeConnectionAliasPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionAliasPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionAliasPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConnectionAliasPermissionsCommand = /** @class */ (function (_super) {
    __extends(DescribeConnectionAliasPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConnectionAliasPermissionsCommand(input) {
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
    DescribeConnectionAliasPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeConnectionAliasPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConnectionAliasPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConnectionAliasPermissionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConnectionAliasPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConnectionAliasPermissionsCommand(input, context);
    };
    DescribeConnectionAliasPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConnectionAliasPermissionsCommand(output, context);
    };
    return DescribeConnectionAliasPermissionsCommand;
}($Command));
export { DescribeConnectionAliasPermissionsCommand };
//# sourceMappingURL=DescribeConnectionAliasPermissionsCommand.js.map