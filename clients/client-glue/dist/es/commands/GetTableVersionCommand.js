import { __extends } from "tslib";
import { GetTableVersionRequest, GetTableVersionResponse } from "../models/models_1";
import { deserializeAws_json1_1GetTableVersionCommand, serializeAws_json1_1GetTableVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a specified version of a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTableVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTableVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTableVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTableVersionCommandInput} for command's `input` shape.
 * @see {@link GetTableVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTableVersionCommand = /** @class */ (function (_super) {
    __extends(GetTableVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTableVersionCommand(input) {
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
    GetTableVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetTableVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTableVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTableVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTableVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTableVersionCommand(input, context);
    };
    GetTableVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTableVersionCommand(output, context);
    };
    return GetTableVersionCommand;
}($Command));
export { GetTableVersionCommand };
//# sourceMappingURL=GetTableVersionCommand.js.map