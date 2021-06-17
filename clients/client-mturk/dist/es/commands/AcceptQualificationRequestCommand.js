import { __extends } from "tslib";
import { AcceptQualificationRequestRequest, AcceptQualificationRequestResponse } from "../models/models_0";
import { deserializeAws_json1_1AcceptQualificationRequestCommand, serializeAws_json1_1AcceptQualificationRequestCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification.
 *         </p>
 *         <p>
 *             Only the owner of the Qualification type can grant a Qualification request for that	type.
 *         </p>
 *         <p>
 *             A successful request for the <code>AcceptQualificationRequest</code> operation
 *             returns with no errors and an empty body.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, AcceptQualificationRequestCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, AcceptQualificationRequestCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new AcceptQualificationRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptQualificationRequestCommandInput} for command's `input` shape.
 * @see {@link AcceptQualificationRequestCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptQualificationRequestCommand = /** @class */ (function (_super) {
    __extends(AcceptQualificationRequestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptQualificationRequestCommand(input) {
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
    AcceptQualificationRequestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "AcceptQualificationRequestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptQualificationRequestRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptQualificationRequestResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptQualificationRequestCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AcceptQualificationRequestCommand(input, context);
    };
    AcceptQualificationRequestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AcceptQualificationRequestCommand(output, context);
    };
    return AcceptQualificationRequestCommand;
}($Command));
export { AcceptQualificationRequestCommand };
//# sourceMappingURL=AcceptQualificationRequestCommand.js.map