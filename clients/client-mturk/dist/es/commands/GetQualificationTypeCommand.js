import { __extends } from "tslib";
import { GetQualificationTypeRequest, GetQualificationTypeResponse } from "../models/models_0";
import { deserializeAws_json1_1GetQualificationTypeCommand, serializeAws_json1_1GetQualificationTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link GetQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetQualificationTypeCommand = /** @class */ (function (_super) {
    __extends(GetQualificationTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetQualificationTypeCommand(input) {
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
    GetQualificationTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "GetQualificationTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetQualificationTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetQualificationTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetQualificationTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetQualificationTypeCommand(input, context);
    };
    GetQualificationTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetQualificationTypeCommand(output, context);
    };
    return GetQualificationTypeCommand;
}($Command));
export { GetQualificationTypeCommand };
//# sourceMappingURL=GetQualificationTypeCommand.js.map