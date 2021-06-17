import { __extends } from "tslib";
import { GetAssignmentRequest, GetAssignmentResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAssignmentCommand, serializeAws_json1_1GetAssignmentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>GetAssignment</code> operation retrieves the details of the specified Assignment.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssignmentCommandInput} for command's `input` shape.
 * @see {@link GetAssignmentCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssignmentCommand = /** @class */ (function (_super) {
    __extends(GetAssignmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAssignmentCommand(input) {
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
    GetAssignmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "GetAssignmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAssignmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAssignmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAssignmentCommand(input, context);
    };
    GetAssignmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAssignmentCommand(output, context);
    };
    return GetAssignmentCommand;
}($Command));
export { GetAssignmentCommand };
//# sourceMappingURL=GetAssignmentCommand.js.map