import { __extends } from "tslib";
import { CreateExportRequest, CreateExportResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateExportCommand, serializeAws_restJson1CreateExportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a zip archive containing the contents of a bot or a bot
 *          locale. The archive contains a directory structure that contains JSON
 *          files that define the bot.</p>
 *          <p>You can create an archive that contains the complete definition of a
 *          bot, or you can specify that the archive contain only the definition of
 *          a single bot locale.</p>
 *          <p>For more information about exporting bots, and about the structure
 *          of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and
 *             exporting bots </a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExportCommandInput} for command's `input` shape.
 * @see {@link CreateExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateExportCommand = /** @class */ (function (_super) {
    __extends(CreateExportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateExportCommand(input) {
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
    CreateExportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "CreateExportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateExportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateExportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateExportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateExportCommand(input, context);
    };
    CreateExportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateExportCommand(output, context);
    };
    return CreateExportCommand;
}($Command));
export { CreateExportCommand };
//# sourceMappingURL=CreateExportCommand.js.map