import { __extends } from "tslib";
import { GetAssessmentReportRequest, GetAssessmentReportResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAssessmentReportCommand, serializeAws_json1_1GetAssessmentReportCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Produces an assessment report that includes detailed and comprehensive results of a
 *          specified assessment run. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetAssessmentReportCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetAssessmentReportCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetAssessmentReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssessmentReportCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentReportCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssessmentReportCommand = /** @class */ (function (_super) {
    __extends(GetAssessmentReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAssessmentReportCommand(input) {
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
    GetAssessmentReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "GetAssessmentReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAssessmentReportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAssessmentReportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAssessmentReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAssessmentReportCommand(input, context);
    };
    GetAssessmentReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAssessmentReportCommand(output, context);
    };
    return GetAssessmentReportCommand;
}($Command));
export { GetAssessmentReportCommand };
//# sourceMappingURL=GetAssessmentReportCommand.js.map