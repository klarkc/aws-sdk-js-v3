import { __extends } from "tslib";
import { CreateMultiplexProgramRequest, CreateMultiplexProgramResponse } from "../models/models_1";
import { deserializeAws_restJson1CreateMultiplexProgramCommand, serializeAws_restJson1CreateMultiplexProgramCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Create a new program in the multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CreateMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link CreateMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMultiplexProgramCommand = /** @class */ (function (_super) {
    __extends(CreateMultiplexProgramCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMultiplexProgramCommand(input) {
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
    CreateMultiplexProgramCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "CreateMultiplexProgramCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMultiplexProgramRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMultiplexProgramResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMultiplexProgramCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateMultiplexProgramCommand(input, context);
    };
    CreateMultiplexProgramCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateMultiplexProgramCommand(output, context);
    };
    return CreateMultiplexProgramCommand;
}($Command));
export { CreateMultiplexProgramCommand };
//# sourceMappingURL=CreateMultiplexProgramCommand.js.map