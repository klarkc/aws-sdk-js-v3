import { __extends } from "tslib";
import { CreateRegistryRequest, CreateRegistryResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRegistryCommand, serializeAws_restJson1CreateRegistryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, CreateRegistryCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, CreateRegistryCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new CreateRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRegistryCommandInput} for command's `input` shape.
 * @see {@link CreateRegistryCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRegistryCommand = /** @class */ (function (_super) {
    __extends(CreateRegistryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRegistryCommand(input) {
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
    CreateRegistryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "CreateRegistryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRegistryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRegistryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRegistryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRegistryCommand(input, context);
    };
    CreateRegistryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRegistryCommand(output, context);
    };
    return CreateRegistryCommand;
}($Command));
export { CreateRegistryCommand };
//# sourceMappingURL=CreateRegistryCommand.js.map