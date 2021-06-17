import { __extends } from "tslib";
import { GetDataSetRequest, GetDataSetResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDataSetCommand, serializeAws_restJson1GetDataSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation returns information about a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, GetDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, GetDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new GetDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataSetCommandInput} for command's `input` shape.
 * @see {@link GetDataSetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDataSetCommand = /** @class */ (function (_super) {
    __extends(GetDataSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDataSetCommand(input) {
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
    GetDataSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "GetDataSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDataSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDataSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDataSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDataSetCommand(input, context);
    };
    GetDataSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDataSetCommand(output, context);
    };
    return GetDataSetCommand;
}($Command));
export { GetDataSetCommand };
//# sourceMappingURL=GetDataSetCommand.js.map