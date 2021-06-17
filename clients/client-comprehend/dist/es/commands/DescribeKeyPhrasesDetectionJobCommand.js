import { __extends } from "tslib";
import { DescribeKeyPhrasesDetectionJobRequest, DescribeKeyPhrasesDetectionJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand, serializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the properties associated with a key phrases detection job. Use this operation to get
 *       the status of a detection job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeKeyPhrasesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeKeyPhrasesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribeKeyPhrasesDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeKeyPhrasesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyPhrasesDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeKeyPhrasesDetectionJobCommand = /** @class */ (function (_super) {
    __extends(DescribeKeyPhrasesDetectionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeKeyPhrasesDetectionJobCommand(input) {
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
    DescribeKeyPhrasesDetectionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendClient";
        var commandName = "DescribeKeyPhrasesDetectionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeKeyPhrasesDetectionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeKeyPhrasesDetectionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeKeyPhrasesDetectionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand(input, context);
    };
    DescribeKeyPhrasesDetectionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand(output, context);
    };
    return DescribeKeyPhrasesDetectionJobCommand;
}($Command));
export { DescribeKeyPhrasesDetectionJobCommand };
//# sourceMappingURL=DescribeKeyPhrasesDetectionJobCommand.js.map