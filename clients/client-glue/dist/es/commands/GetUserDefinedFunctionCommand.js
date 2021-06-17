import { __extends } from "tslib";
import { GetUserDefinedFunctionRequest, GetUserDefinedFunctionResponse } from "../models/models_1";
import { deserializeAws_json1_1GetUserDefinedFunctionCommand, serializeAws_json1_1GetUserDefinedFunctionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a specified function definition from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link GetUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUserDefinedFunctionCommand = /** @class */ (function (_super) {
    __extends(GetUserDefinedFunctionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUserDefinedFunctionCommand(input) {
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
    GetUserDefinedFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetUserDefinedFunctionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUserDefinedFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUserDefinedFunctionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUserDefinedFunctionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetUserDefinedFunctionCommand(input, context);
    };
    GetUserDefinedFunctionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetUserDefinedFunctionCommand(output, context);
    };
    return GetUserDefinedFunctionCommand;
}($Command));
export { GetUserDefinedFunctionCommand };
//# sourceMappingURL=GetUserDefinedFunctionCommand.js.map