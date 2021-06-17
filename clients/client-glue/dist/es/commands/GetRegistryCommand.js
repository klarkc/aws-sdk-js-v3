import { __extends } from "tslib";
import { GetRegistryInput, GetRegistryResponse } from "../models/models_1";
import { deserializeAws_json1_1GetRegistryCommand, serializeAws_json1_1GetRegistryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified registry in detail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetRegistryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetRegistryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegistryCommandInput} for command's `input` shape.
 * @see {@link GetRegistryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRegistryCommand = /** @class */ (function (_super) {
    __extends(GetRegistryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRegistryCommand(input) {
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
    GetRegistryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetRegistryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRegistryInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetRegistryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRegistryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRegistryCommand(input, context);
    };
    GetRegistryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRegistryCommand(output, context);
    };
    return GetRegistryCommand;
}($Command));
export { GetRegistryCommand };
//# sourceMappingURL=GetRegistryCommand.js.map