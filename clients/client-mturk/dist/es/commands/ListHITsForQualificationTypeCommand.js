import { __extends } from "tslib";
import { ListHITsForQualificationTypeRequest, ListHITsForQualificationTypeResponse } from "../models/models_0";
import { deserializeAws_json1_1ListHITsForQualificationTypeCommand, serializeAws_json1_1ListHITsForQualificationTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>ListHITsForQualificationType</code> operation returns the HITs that use
 *             the given Qualification type for a Qualification requirement.
 *             The operation returns HITs of any status, except for HITs that have been deleted
 *             with the <code>DeleteHIT</code> operation or that have been auto-deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListHITsForQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListHITsForQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListHITsForQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHITsForQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link ListHITsForQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHITsForQualificationTypeCommand = /** @class */ (function (_super) {
    __extends(ListHITsForQualificationTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHITsForQualificationTypeCommand(input) {
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
    ListHITsForQualificationTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "ListHITsForQualificationTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHITsForQualificationTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHITsForQualificationTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHITsForQualificationTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListHITsForQualificationTypeCommand(input, context);
    };
    ListHITsForQualificationTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListHITsForQualificationTypeCommand(output, context);
    };
    return ListHITsForQualificationTypeCommand;
}($Command));
export { ListHITsForQualificationTypeCommand };
//# sourceMappingURL=ListHITsForQualificationTypeCommand.js.map