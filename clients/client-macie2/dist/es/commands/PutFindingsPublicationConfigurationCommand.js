import { __extends } from "tslib";
import { PutFindingsPublicationConfigurationRequest, PutFindingsPublicationConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutFindingsPublicationConfigurationCommand, serializeAws_restJson1PutFindingsPublicationConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration settings for publishing findings to AWS Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, PutFindingsPublicationConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, PutFindingsPublicationConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new PutFindingsPublicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFindingsPublicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutFindingsPublicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutFindingsPublicationConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutFindingsPublicationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutFindingsPublicationConfigurationCommand(input) {
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
    PutFindingsPublicationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "PutFindingsPublicationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutFindingsPublicationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutFindingsPublicationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutFindingsPublicationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutFindingsPublicationConfigurationCommand(input, context);
    };
    PutFindingsPublicationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutFindingsPublicationConfigurationCommand(output, context);
    };
    return PutFindingsPublicationConfigurationCommand;
}($Command));
export { PutFindingsPublicationConfigurationCommand };
//# sourceMappingURL=PutFindingsPublicationConfigurationCommand.js.map