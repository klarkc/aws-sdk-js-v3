import { __extends } from "tslib";
import { CreatePublishingDestinationRequest, CreatePublishingDestinationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreatePublishingDestinationCommand, serializeAws_restJson1CreatePublishingDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a publishing destination to export findings to. The resource to export findings to
 *       must exist before you use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreatePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreatePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreatePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link CreatePublishingDestinationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePublishingDestinationCommand = /** @class */ (function (_super) {
    __extends(CreatePublishingDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePublishingDestinationCommand(input) {
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
    CreatePublishingDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "CreatePublishingDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePublishingDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePublishingDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePublishingDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePublishingDestinationCommand(input, context);
    };
    CreatePublishingDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePublishingDestinationCommand(output, context);
    };
    return CreatePublishingDestinationCommand;
}($Command));
export { CreatePublishingDestinationCommand };
//# sourceMappingURL=CreatePublishingDestinationCommand.js.map