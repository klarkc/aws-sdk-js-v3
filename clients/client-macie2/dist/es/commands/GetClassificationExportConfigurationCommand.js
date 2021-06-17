import { __extends } from "tslib";
import { GetClassificationExportConfigurationRequest, GetClassificationExportConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1GetClassificationExportConfigurationCommand, serializeAws_restJson1GetClassificationExportConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the configuration settings for storing data classification results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetClassificationExportConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetClassificationExportConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetClassificationExportConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClassificationExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetClassificationExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetClassificationExportConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetClassificationExportConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetClassificationExportConfigurationCommand(input) {
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
    GetClassificationExportConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "GetClassificationExportConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetClassificationExportConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetClassificationExportConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetClassificationExportConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetClassificationExportConfigurationCommand(input, context);
    };
    GetClassificationExportConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetClassificationExportConfigurationCommand(output, context);
    };
    return GetClassificationExportConfigurationCommand;
}($Command));
export { GetClassificationExportConfigurationCommand };
//# sourceMappingURL=GetClassificationExportConfigurationCommand.js.map