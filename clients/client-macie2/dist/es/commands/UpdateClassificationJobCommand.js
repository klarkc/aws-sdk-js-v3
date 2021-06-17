import { __extends } from "tslib";
import { UpdateClassificationJobRequest, UpdateClassificationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateClassificationJobCommand, serializeAws_restJson1UpdateClassificationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the status of a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateClassificationJobCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateClassificationJobCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateClassificationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClassificationJobCommandInput} for command's `input` shape.
 * @see {@link UpdateClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateClassificationJobCommand = /** @class */ (function (_super) {
    __extends(UpdateClassificationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateClassificationJobCommand(input) {
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
    UpdateClassificationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "UpdateClassificationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateClassificationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateClassificationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateClassificationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateClassificationJobCommand(input, context);
    };
    UpdateClassificationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateClassificationJobCommand(output, context);
    };
    return UpdateClassificationJobCommand;
}($Command));
export { UpdateClassificationJobCommand };
//# sourceMappingURL=UpdateClassificationJobCommand.js.map