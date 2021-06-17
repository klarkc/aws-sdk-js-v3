import { __extends } from "tslib";
import { CreateInputRequest, CreateInputResponse } from "../models/models_1";
import { deserializeAws_restJson1CreateInputCommand, serializeAws_restJson1CreateInputCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Create an input
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateInputCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CreateInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInputCommandInput} for command's `input` shape.
 * @see {@link CreateInputCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInputCommand = /** @class */ (function (_super) {
    __extends(CreateInputCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInputCommand(input) {
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
    CreateInputCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "CreateInputCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInputResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInputCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateInputCommand(input, context);
    };
    CreateInputCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateInputCommand(output, context);
    };
    return CreateInputCommand;
}($Command));
export { CreateInputCommand };
//# sourceMappingURL=CreateInputCommand.js.map