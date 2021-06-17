import { __extends } from "tslib";
import { GetMailboxDetailsRequest, GetMailboxDetailsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetMailboxDetailsCommand, serializeAws_json1_1GetMailboxDetailsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests a user's mailbox details for a specified organization and user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMailboxDetailsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetMailboxDetailsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetMailboxDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMailboxDetailsCommandInput} for command's `input` shape.
 * @see {@link GetMailboxDetailsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMailboxDetailsCommand = /** @class */ (function (_super) {
    __extends(GetMailboxDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMailboxDetailsCommand(input) {
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
    GetMailboxDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "GetMailboxDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMailboxDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMailboxDetailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMailboxDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMailboxDetailsCommand(input, context);
    };
    GetMailboxDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMailboxDetailsCommand(output, context);
    };
    return GetMailboxDetailsCommand;
}($Command));
export { GetMailboxDetailsCommand };
//# sourceMappingURL=GetMailboxDetailsCommand.js.map