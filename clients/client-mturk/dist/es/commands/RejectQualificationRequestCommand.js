import { __extends } from "tslib";
import { RejectQualificationRequestRequest, RejectQualificationRequestResponse } from "../models/models_0";
import { deserializeAws_json1_1RejectQualificationRequestCommand, serializeAws_json1_1RejectQualificationRequestCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>RejectQualificationRequest</code>
 *             operation rejects a user's request for a Qualification.
 *         </p>
 *         <p> You can provide a text message explaining why the request was
 *             rejected. The Worker who made the request can see this message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, RejectQualificationRequestCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, RejectQualificationRequestCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new RejectQualificationRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectQualificationRequestCommandInput} for command's `input` shape.
 * @see {@link RejectQualificationRequestCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectQualificationRequestCommand = /** @class */ (function (_super) {
    __extends(RejectQualificationRequestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectQualificationRequestCommand(input) {
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
    RejectQualificationRequestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "RejectQualificationRequestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectQualificationRequestRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectQualificationRequestResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectQualificationRequestCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RejectQualificationRequestCommand(input, context);
    };
    RejectQualificationRequestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RejectQualificationRequestCommand(output, context);
    };
    return RejectQualificationRequestCommand;
}($Command));
export { RejectQualificationRequestCommand };
//# sourceMappingURL=RejectQualificationRequestCommand.js.map