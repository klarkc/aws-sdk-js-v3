import { __extends } from "tslib";
import { DeleteFindingsFilterRequest, DeleteFindingsFilterResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteFindingsFilterCommand, serializeAws_restJson1DeleteFindingsFilterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeleteFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DeleteFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DeleteFindingsFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteFindingsFilterCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFindingsFilterCommand = /** @class */ (function (_super) {
    __extends(DeleteFindingsFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFindingsFilterCommand(input) {
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
    DeleteFindingsFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "DeleteFindingsFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFindingsFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFindingsFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFindingsFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFindingsFilterCommand(input, context);
    };
    DeleteFindingsFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFindingsFilterCommand(output, context);
    };
    return DeleteFindingsFilterCommand;
}($Command));
export { DeleteFindingsFilterCommand };
//# sourceMappingURL=DeleteFindingsFilterCommand.js.map