import { __extends } from "tslib";
import { ListWorkersWithQualificationTypeRequest, ListWorkersWithQualificationTypeResponse } from "../models/models_0";
import { deserializeAws_json1_1ListWorkersWithQualificationTypeCommand, serializeAws_json1_1ListWorkersWithQualificationTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers
 *             that have been associated with a given Qualification type.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListWorkersWithQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListWorkersWithQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListWorkersWithQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkersWithQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link ListWorkersWithQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorkersWithQualificationTypeCommand = /** @class */ (function (_super) {
    __extends(ListWorkersWithQualificationTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWorkersWithQualificationTypeCommand(input) {
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
    ListWorkersWithQualificationTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "ListWorkersWithQualificationTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWorkersWithQualificationTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListWorkersWithQualificationTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWorkersWithQualificationTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListWorkersWithQualificationTypeCommand(input, context);
    };
    ListWorkersWithQualificationTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListWorkersWithQualificationTypeCommand(output, context);
    };
    return ListWorkersWithQualificationTypeCommand;
}($Command));
export { ListWorkersWithQualificationTypeCommand };
//# sourceMappingURL=ListWorkersWithQualificationTypeCommand.js.map