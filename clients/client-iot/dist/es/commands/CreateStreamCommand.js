import { __extends } from "tslib";
import { CreateStreamRequest, CreateStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateStreamCommand, serializeAws_restJson1CreateStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data
 *             bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files
 *             associated with a stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateStreamCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateStreamCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStreamCommand = /** @class */ (function (_super) {
    __extends(CreateStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStreamCommand(input) {
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
    CreateStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateStreamCommand(input, context);
    };
    CreateStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateStreamCommand(output, context);
    };
    return CreateStreamCommand;
}($Command));
export { CreateStreamCommand };
//# sourceMappingURL=CreateStreamCommand.js.map