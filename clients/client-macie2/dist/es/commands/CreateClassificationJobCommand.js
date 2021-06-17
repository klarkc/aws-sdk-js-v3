import { __extends } from "tslib";
import { CreateClassificationJobRequest, CreateClassificationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateClassificationJobCommand, serializeAws_restJson1CreateClassificationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates and defines the settings for a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateClassificationJobCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateClassificationJobCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateClassificationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClassificationJobCommandInput} for command's `input` shape.
 * @see {@link CreateClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClassificationJobCommand = /** @class */ (function (_super) {
    __extends(CreateClassificationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClassificationJobCommand(input) {
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
    CreateClassificationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "CreateClassificationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClassificationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClassificationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClassificationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateClassificationJobCommand(input, context);
    };
    CreateClassificationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateClassificationJobCommand(output, context);
    };
    return CreateClassificationJobCommand;
}($Command));
export { CreateClassificationJobCommand };
//# sourceMappingURL=CreateClassificationJobCommand.js.map