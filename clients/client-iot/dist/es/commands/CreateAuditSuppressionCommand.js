import { __extends } from "tslib";
import { CreateAuditSuppressionRequest, CreateAuditSuppressionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAuditSuppressionCommand, serializeAws_restJson1CreateAuditSuppressionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Creates a Device Defender audit suppression.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link CreateAuditSuppressionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAuditSuppressionCommand = /** @class */ (function (_super) {
    __extends(CreateAuditSuppressionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAuditSuppressionCommand(input) {
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
    CreateAuditSuppressionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateAuditSuppressionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAuditSuppressionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAuditSuppressionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAuditSuppressionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAuditSuppressionCommand(input, context);
    };
    CreateAuditSuppressionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAuditSuppressionCommand(output, context);
    };
    return CreateAuditSuppressionCommand;
}($Command));
export { CreateAuditSuppressionCommand };
//# sourceMappingURL=CreateAuditSuppressionCommand.js.map