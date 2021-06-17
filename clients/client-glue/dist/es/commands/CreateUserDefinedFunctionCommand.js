import { __extends } from "tslib";
import { CreateUserDefinedFunctionRequest, CreateUserDefinedFunctionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateUserDefinedFunctionCommand, serializeAws_json1_1CreateUserDefinedFunctionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new function definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUserDefinedFunctionCommand = /** @class */ (function (_super) {
    __extends(CreateUserDefinedFunctionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUserDefinedFunctionCommand(input) {
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
    CreateUserDefinedFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreateUserDefinedFunctionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUserDefinedFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUserDefinedFunctionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUserDefinedFunctionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateUserDefinedFunctionCommand(input, context);
    };
    CreateUserDefinedFunctionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateUserDefinedFunctionCommand(output, context);
    };
    return CreateUserDefinedFunctionCommand;
}($Command));
export { CreateUserDefinedFunctionCommand };
//# sourceMappingURL=CreateUserDefinedFunctionCommand.js.map