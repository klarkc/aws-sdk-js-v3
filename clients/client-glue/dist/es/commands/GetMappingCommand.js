import { __extends } from "tslib";
import { GetMappingRequest, GetMappingResponse } from "../models/models_1";
import { deserializeAws_json1_1GetMappingCommand, serializeAws_json1_1GetMappingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMappingCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMappingCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMappingCommandInput} for command's `input` shape.
 * @see {@link GetMappingCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMappingCommand = /** @class */ (function (_super) {
    __extends(GetMappingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMappingCommand(input) {
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
    GetMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetMappingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMappingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMappingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMappingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMappingCommand(input, context);
    };
    GetMappingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMappingCommand(output, context);
    };
    return GetMappingCommand;
}($Command));
export { GetMappingCommand };
//# sourceMappingURL=GetMappingCommand.js.map