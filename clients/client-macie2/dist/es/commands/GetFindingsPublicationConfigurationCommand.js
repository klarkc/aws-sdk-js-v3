import { __extends } from "tslib";
import { GetFindingsPublicationConfigurationRequest, GetFindingsPublicationConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1GetFindingsPublicationConfigurationCommand, serializeAws_restJson1GetFindingsPublicationConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the configuration settings for publishing findings to AWS Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingsPublicationConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingsPublicationConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetFindingsPublicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsPublicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetFindingsPublicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFindingsPublicationConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetFindingsPublicationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFindingsPublicationConfigurationCommand(input) {
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
    GetFindingsPublicationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "GetFindingsPublicationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFindingsPublicationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFindingsPublicationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFindingsPublicationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFindingsPublicationConfigurationCommand(input, context);
    };
    GetFindingsPublicationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFindingsPublicationConfigurationCommand(output, context);
    };
    return GetFindingsPublicationConfigurationCommand;
}($Command));
export { GetFindingsPublicationConfigurationCommand };
//# sourceMappingURL=GetFindingsPublicationConfigurationCommand.js.map