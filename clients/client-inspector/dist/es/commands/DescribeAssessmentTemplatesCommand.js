import { __extends } from "tslib";
import { DescribeAssessmentTemplatesRequest, DescribeAssessmentTemplatesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAssessmentTemplatesCommand, serializeAws_json1_1DescribeAssessmentTemplatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the assessment templates that are specified by the ARNs of the assessment
 *          templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentTemplatesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentTemplatesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssessmentTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAssessmentTemplatesCommand = /** @class */ (function (_super) {
    __extends(DescribeAssessmentTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAssessmentTemplatesCommand(input) {
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
    DescribeAssessmentTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "DescribeAssessmentTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssessmentTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssessmentTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssessmentTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAssessmentTemplatesCommand(input, context);
    };
    DescribeAssessmentTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAssessmentTemplatesCommand(output, context);
    };
    return DescribeAssessmentTemplatesCommand;
}($Command));
export { DescribeAssessmentTemplatesCommand };
//# sourceMappingURL=DescribeAssessmentTemplatesCommand.js.map