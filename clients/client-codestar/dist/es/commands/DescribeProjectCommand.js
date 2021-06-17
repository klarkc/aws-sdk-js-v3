import { __extends } from "tslib";
import { DescribeProjectRequest, DescribeProjectResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeProjectCommand, serializeAws_json1_1DescribeProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a project and its resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DescribeProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DescribeProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProjectCommand = /** @class */ (function (_super) {
    __extends(DescribeProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProjectCommand(input) {
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
    DescribeProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "DescribeProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeProjectCommand(input, context);
    };
    DescribeProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeProjectCommand(output, context);
    };
    return DescribeProjectCommand;
}($Command));
export { DescribeProjectCommand };
//# sourceMappingURL=DescribeProjectCommand.js.map