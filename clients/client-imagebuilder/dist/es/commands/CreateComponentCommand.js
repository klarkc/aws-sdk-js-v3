import { __extends } from "tslib";
import { CreateComponentRequest, CreateComponentResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateComponentCommand, serializeAws_restJson1CreateComponentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new component that can be used to build, validate, test, and assess your
 *       image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateComponentCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateComponentCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateComponentCommandInput} for command's `input` shape.
 * @see {@link CreateComponentCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateComponentCommand = /** @class */ (function (_super) {
    __extends(CreateComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateComponentCommand(input) {
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
    CreateComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "CreateComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateComponentCommand(input, context);
    };
    CreateComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateComponentCommand(output, context);
    };
    return CreateComponentCommand;
}($Command));
export { CreateComponentCommand };
//# sourceMappingURL=CreateComponentCommand.js.map