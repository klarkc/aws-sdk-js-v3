import { __extends } from "tslib";
import { ListAssessmentTemplatesRequest, ListAssessmentTemplatesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAssessmentTemplatesCommand, serializeAws_json1_1ListAssessmentTemplatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the assessment templates that correspond to the assessment targets that are
 *          specified by the ARNs of the assessment targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentTemplatesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentTemplatesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssessmentTemplatesCommand = /** @class */ (function (_super) {
    __extends(ListAssessmentTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssessmentTemplatesCommand(input) {
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
    ListAssessmentTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "ListAssessmentTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssessmentTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssessmentTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssessmentTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAssessmentTemplatesCommand(input, context);
    };
    ListAssessmentTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAssessmentTemplatesCommand(output, context);
    };
    return ListAssessmentTemplatesCommand;
}($Command));
export { ListAssessmentTemplatesCommand };
//# sourceMappingURL=ListAssessmentTemplatesCommand.js.map