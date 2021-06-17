import { __extends } from "tslib";
import { PutClassificationExportConfigurationRequest, PutClassificationExportConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutClassificationExportConfigurationCommand, serializeAws_restJson1PutClassificationExportConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates the configuration settings for storing data classification results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, PutClassificationExportConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, PutClassificationExportConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new PutClassificationExportConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutClassificationExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutClassificationExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutClassificationExportConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutClassificationExportConfigurationCommand(input) {
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
    PutClassificationExportConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "PutClassificationExportConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutClassificationExportConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutClassificationExportConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutClassificationExportConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutClassificationExportConfigurationCommand(input, context);
    };
    PutClassificationExportConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutClassificationExportConfigurationCommand(output, context);
    };
    return PutClassificationExportConfigurationCommand;
}($Command));
export { PutClassificationExportConfigurationCommand };
//# sourceMappingURL=PutClassificationExportConfigurationCommand.js.map