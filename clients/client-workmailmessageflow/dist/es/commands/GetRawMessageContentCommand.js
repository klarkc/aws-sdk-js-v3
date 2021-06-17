import { __extends } from "tslib";
import { GetRawMessageContentRequest, GetRawMessageContentResponse } from "../models/models_0";
import { deserializeAws_restJson1GetRawMessageContentCommand, serializeAws_restJson1GetRawMessageContentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the raw content of an in-transit email message, in MIME format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailMessageFlowClient, GetRawMessageContentCommand } from "@aws-sdk/client-workmailmessageflow"; // ES Modules import
 * // const { WorkMailMessageFlowClient, GetRawMessageContentCommand } = require("@aws-sdk/client-workmailmessageflow"); // CommonJS import
 * const client = new WorkMailMessageFlowClient(config);
 * const command = new GetRawMessageContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRawMessageContentCommandInput} for command's `input` shape.
 * @see {@link GetRawMessageContentCommandOutput} for command's `response` shape.
 * @see {@link WorkMailMessageFlowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRawMessageContentCommand = /** @class */ (function (_super) {
    __extends(GetRawMessageContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRawMessageContentCommand(input) {
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
    GetRawMessageContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailMessageFlowClient";
        var commandName = "GetRawMessageContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRawMessageContentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRawMessageContentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRawMessageContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRawMessageContentCommand(input, context);
    };
    GetRawMessageContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRawMessageContentCommand(output, context);
    };
    return GetRawMessageContentCommand;
}($Command));
export { GetRawMessageContentCommand };
//# sourceMappingURL=GetRawMessageContentCommand.js.map