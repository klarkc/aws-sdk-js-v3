import { __extends } from "tslib";
import { CreateChannelRequest, CreateChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateChannelCommand, serializeAws_restJson1CreateChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a new Channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, CreateChannelCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, CreateChannelCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateChannelCommand = /** @class */ (function (_super) {
    __extends(CreateChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateChannelCommand(input) {
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
    CreateChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "CreateChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateChannelCommand(input, context);
    };
    CreateChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateChannelCommand(output, context);
    };
    return CreateChannelCommand;
}($Command));
export { CreateChannelCommand };
//# sourceMappingURL=CreateChannelCommand.js.map