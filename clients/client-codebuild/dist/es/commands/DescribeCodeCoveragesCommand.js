import { __extends } from "tslib";
import { DescribeCodeCoveragesInput, DescribeCodeCoveragesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeCodeCoveragesCommand, serializeAws_json1_1DescribeCodeCoveragesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves one or more code coverage reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DescribeCodeCoveragesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DescribeCodeCoveragesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DescribeCodeCoveragesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCodeCoveragesCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeCoveragesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCodeCoveragesCommand = /** @class */ (function (_super) {
    __extends(DescribeCodeCoveragesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCodeCoveragesCommand(input) {
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
    DescribeCodeCoveragesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "DescribeCodeCoveragesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCodeCoveragesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCodeCoveragesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCodeCoveragesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCodeCoveragesCommand(input, context);
    };
    DescribeCodeCoveragesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCodeCoveragesCommand(output, context);
    };
    return DescribeCodeCoveragesCommand;
}($Command));
export { DescribeCodeCoveragesCommand };
//# sourceMappingURL=DescribeCodeCoveragesCommand.js.map