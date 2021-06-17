import { __extends } from "tslib";
import { CreateFindingsFilterRequest, CreateFindingsFilterResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateFindingsFilterCommand, serializeAws_restJson1CreateFindingsFilterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates and defines the criteria and other settings for a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateFindingsFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link CreateFindingsFilterCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFindingsFilterCommand = /** @class */ (function (_super) {
    __extends(CreateFindingsFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFindingsFilterCommand(input) {
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
    CreateFindingsFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "CreateFindingsFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFindingsFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFindingsFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFindingsFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateFindingsFilterCommand(input, context);
    };
    CreateFindingsFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateFindingsFilterCommand(output, context);
    };
    return CreateFindingsFilterCommand;
}($Command));
export { CreateFindingsFilterCommand };
//# sourceMappingURL=CreateFindingsFilterCommand.js.map