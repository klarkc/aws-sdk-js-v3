import { __extends } from "tslib";
import { DescribeThingRegistrationTaskRequest, DescribeThingRegistrationTaskResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeThingRegistrationTaskCommand, serializeAws_restJson1DescribeThingRegistrationTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a bulk thing provisioning task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeThingRegistrationTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeThingRegistrationTaskCommand = /** @class */ (function (_super) {
    __extends(DescribeThingRegistrationTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeThingRegistrationTaskCommand(input) {
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
    DescribeThingRegistrationTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeThingRegistrationTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeThingRegistrationTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeThingRegistrationTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeThingRegistrationTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeThingRegistrationTaskCommand(input, context);
    };
    DescribeThingRegistrationTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeThingRegistrationTaskCommand(output, context);
    };
    return DescribeThingRegistrationTaskCommand;
}($Command));
export { DescribeThingRegistrationTaskCommand };
//# sourceMappingURL=DescribeThingRegistrationTaskCommand.js.map