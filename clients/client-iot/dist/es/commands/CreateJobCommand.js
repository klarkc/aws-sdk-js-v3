import { __extends } from "tslib";
import { CreateJobRequest, CreateJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateJobCommand, serializeAws_restJson1CreateJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateJobCommand = /** @class */ (function (_super) {
    __extends(CreateJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateJobCommand(input) {
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
    CreateJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateJobCommand(input, context);
    };
    CreateJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateJobCommand(output, context);
    };
    return CreateJobCommand;
}($Command));
export { CreateJobCommand };
//# sourceMappingURL=CreateJobCommand.js.map