import { __extends } from "tslib";
import { CreateInvitationsRequest, CreateInvitationsResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateInvitationsCommand, serializeAws_restJson1CreateInvitationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends an Amazon Macie membership invitation to one or more accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateInvitationsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateInvitationsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInvitationsCommandInput} for command's `input` shape.
 * @see {@link CreateInvitationsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInvitationsCommand = /** @class */ (function (_super) {
    __extends(CreateInvitationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInvitationsCommand(input) {
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
    CreateInvitationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "CreateInvitationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInvitationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInvitationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInvitationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateInvitationsCommand(input, context);
    };
    CreateInvitationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateInvitationsCommand(output, context);
    };
    return CreateInvitationsCommand;
}($Command));
export { CreateInvitationsCommand };
//# sourceMappingURL=CreateInvitationsCommand.js.map