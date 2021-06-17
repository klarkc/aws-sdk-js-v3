import { __extends } from "tslib";
import { DescribeAssessmentRunsRequest, DescribeAssessmentRunsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAssessmentRunsCommand, serializeAws_json1_1DescribeAssessmentRunsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the assessment runs that are specified by the ARNs of the assessment
 *          runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentRunsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentRunsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssessmentRunsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentRunsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAssessmentRunsCommand = /** @class */ (function (_super) {
    __extends(DescribeAssessmentRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAssessmentRunsCommand(input) {
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
    DescribeAssessmentRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "DescribeAssessmentRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssessmentRunsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssessmentRunsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssessmentRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAssessmentRunsCommand(input, context);
    };
    DescribeAssessmentRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAssessmentRunsCommand(output, context);
    };
    return DescribeAssessmentRunsCommand;
}($Command));
export { DescribeAssessmentRunsCommand };
//# sourceMappingURL=DescribeAssessmentRunsCommand.js.map