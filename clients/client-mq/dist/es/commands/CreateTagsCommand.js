import { __extends } from "tslib";
import { CreateTagsRequest } from "../models/models_0";
import { deserializeAws_restJson1CreateTagsCommand, serializeAws_restJson1CreateTagsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Add a tag to a resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, CreateTagsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, CreateTagsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new CreateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTagsCommandInput} for command's `input` shape.
 * @see {@link CreateTagsCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTagsCommand = /** @class */ (function (_super) {
    __extends(CreateTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTagsCommand(input) {
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
    CreateTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "CreateTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateTagsCommand(input, context);
    };
    CreateTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateTagsCommand(output, context);
    };
    return CreateTagsCommand;
}($Command));
export { CreateTagsCommand };
//# sourceMappingURL=CreateTagsCommand.js.map