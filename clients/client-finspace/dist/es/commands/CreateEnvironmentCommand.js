import { __extends } from "tslib";
import { CreateEnvironmentRequest, CreateEnvironmentResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateEnvironmentCommand, serializeAws_restJson1CreateEnvironmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a new FinSpace environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, CreateEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, CreateEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEnvironmentCommand = /** @class */ (function (_super) {
    __extends(CreateEnvironmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEnvironmentCommand(input) {
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
    CreateEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FinspaceClient";
        var commandName = "CreateEnvironmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEnvironmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateEnvironmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEnvironmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateEnvironmentCommand(input, context);
    };
    CreateEnvironmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateEnvironmentCommand(output, context);
    };
    return CreateEnvironmentCommand;
}($Command));
export { CreateEnvironmentCommand };
//# sourceMappingURL=CreateEnvironmentCommand.js.map