import { __extends } from "tslib";
import { CreateGroupVersionRequest, CreateGroupVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateGroupVersionCommand, serializeAws_restJson1CreateGroupVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a version of a group which has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateGroupVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateGroupVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateGroupVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGroupVersionCommandInput} for command's `input` shape.
 * @see {@link CreateGroupVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGroupVersionCommand = /** @class */ (function (_super) {
    __extends(CreateGroupVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGroupVersionCommand(input) {
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
    CreateGroupVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateGroupVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGroupVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGroupVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGroupVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateGroupVersionCommand(input, context);
    };
    CreateGroupVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateGroupVersionCommand(output, context);
    };
    return CreateGroupVersionCommand;
}($Command));
export { CreateGroupVersionCommand };
//# sourceMappingURL=CreateGroupVersionCommand.js.map