import { __extends } from "tslib";
import { DescribeConnectionAliasesRequest, DescribeConnectionAliasesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeConnectionAliasesCommand, serializeAws_json1_1DescribeConnectionAliasesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeConnectionAliasesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeConnectionAliasesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeConnectionAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionAliasesCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionAliasesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConnectionAliasesCommand = /** @class */ (function (_super) {
    __extends(DescribeConnectionAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConnectionAliasesCommand(input) {
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
    DescribeConnectionAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeConnectionAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConnectionAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConnectionAliasesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConnectionAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConnectionAliasesCommand(input, context);
    };
    DescribeConnectionAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConnectionAliasesCommand(output, context);
    };
    return DescribeConnectionAliasesCommand;
}($Command));
export { DescribeConnectionAliasesCommand };
//# sourceMappingURL=DescribeConnectionAliasesCommand.js.map