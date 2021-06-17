import { __extends } from "tslib";
import { GetStreamKeyRequest, GetStreamKeyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetStreamKeyCommand, serializeAws_restJson1GetStreamKeyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets stream-key information for a specified ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetStreamKeyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetStreamKeyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new GetStreamKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamKeyCommandInput} for command's `input` shape.
 * @see {@link GetStreamKeyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStreamKeyCommand = /** @class */ (function (_super) {
    __extends(GetStreamKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStreamKeyCommand(input) {
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
    GetStreamKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IvsClient";
        var commandName = "GetStreamKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStreamKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStreamKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStreamKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetStreamKeyCommand(input, context);
    };
    GetStreamKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetStreamKeyCommand(output, context);
    };
    return GetStreamKeyCommand;
}($Command));
export { GetStreamKeyCommand };
//# sourceMappingURL=GetStreamKeyCommand.js.map