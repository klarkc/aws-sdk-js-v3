import { __extends } from "tslib";
import { CreateSegmentRequest, CreateSegmentResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSegmentCommand, serializeAws_restJson1CreateSegmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateSegmentCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateSegmentCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateSegmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSegmentCommandInput} for command's `input` shape.
 * @see {@link CreateSegmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSegmentCommand = /** @class */ (function (_super) {
    __extends(CreateSegmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSegmentCommand(input) {
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
    CreateSegmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "CreateSegmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSegmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSegmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSegmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSegmentCommand(input, context);
    };
    CreateSegmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSegmentCommand(output, context);
    };
    return CreateSegmentCommand;
}($Command));
export { CreateSegmentCommand };
//# sourceMappingURL=CreateSegmentCommand.js.map