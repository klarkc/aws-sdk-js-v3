import { __extends } from "tslib";
import { GetUserDefinedFunctionsRequest, GetUserDefinedFunctionsResponse } from "../models/models_1";
import { deserializeAws_json1_1GetUserDefinedFunctionsCommand, serializeAws_json1_1GetUserDefinedFunctionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves multiple function definitions from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUserDefinedFunctionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUserDefinedFunctionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetUserDefinedFunctionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserDefinedFunctionsCommandInput} for command's `input` shape.
 * @see {@link GetUserDefinedFunctionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUserDefinedFunctionsCommand = /** @class */ (function (_super) {
    __extends(GetUserDefinedFunctionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUserDefinedFunctionsCommand(input) {
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
    GetUserDefinedFunctionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetUserDefinedFunctionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUserDefinedFunctionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUserDefinedFunctionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUserDefinedFunctionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetUserDefinedFunctionsCommand(input, context);
    };
    GetUserDefinedFunctionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetUserDefinedFunctionsCommand(output, context);
    };
    return GetUserDefinedFunctionsCommand;
}($Command));
export { GetUserDefinedFunctionsCommand };
//# sourceMappingURL=GetUserDefinedFunctionsCommand.js.map