import { __extends } from "tslib";
import { GetAssetRequest, GetAssetResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAssetCommand, serializeAws_restJson1GetAssetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation returns information about an asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, GetAssetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, GetAssetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new GetAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssetCommandInput} for command's `input` shape.
 * @see {@link GetAssetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssetCommand = /** @class */ (function (_super) {
    __extends(GetAssetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAssetCommand(input) {
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
    GetAssetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "GetAssetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAssetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAssetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAssetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAssetCommand(input, context);
    };
    GetAssetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAssetCommand(output, context);
    };
    return GetAssetCommand;
}($Command));
export { GetAssetCommand };
//# sourceMappingURL=GetAssetCommand.js.map