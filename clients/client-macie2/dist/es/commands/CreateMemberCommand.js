import { __extends } from "tslib";
import { CreateMemberRequest, CreateMemberResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateMemberCommand, serializeAws_restJson1CreateMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates an account with an Amazon Macie administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateMemberCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateMemberCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMemberCommandInput} for command's `input` shape.
 * @see {@link CreateMemberCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMemberCommand = /** @class */ (function (_super) {
    __extends(CreateMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMemberCommand(input) {
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
    CreateMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "CreateMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMemberResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateMemberCommand(input, context);
    };
    CreateMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateMemberCommand(output, context);
    };
    return CreateMemberCommand;
}($Command));
export { CreateMemberCommand };
//# sourceMappingURL=CreateMemberCommand.js.map