import { __extends } from "tslib";
import { DescribeAssessmentTargetsRequest, DescribeAssessmentTargetsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAssessmentTargetsCommand, serializeAws_json1_1DescribeAssessmentTargetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the assessment targets that are specified by the ARNs of the assessment
 *          targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentTargetsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentTargetsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssessmentTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentTargetsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAssessmentTargetsCommand = /** @class */ (function (_super) {
    __extends(DescribeAssessmentTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAssessmentTargetsCommand(input) {
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
    DescribeAssessmentTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "DescribeAssessmentTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssessmentTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssessmentTargetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssessmentTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAssessmentTargetsCommand(input, context);
    };
    DescribeAssessmentTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAssessmentTargetsCommand(output, context);
    };
    return DescribeAssessmentTargetsCommand;
}($Command));
export { DescribeAssessmentTargetsCommand };
//# sourceMappingURL=DescribeAssessmentTargetsCommand.js.map