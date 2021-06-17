import { __extends } from "tslib";
import { GetLensVersionDifferenceInput, GetLensVersionDifferenceOutput } from "../models/models_0";
import { deserializeAws_restJson1GetLensVersionDifferenceCommand, serializeAws_restJson1GetLensVersionDifferenceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get lens version differences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensVersionDifferenceCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensVersionDifferenceCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetLensVersionDifferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLensVersionDifferenceCommandInput} for command's `input` shape.
 * @see {@link GetLensVersionDifferenceCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLensVersionDifferenceCommand = /** @class */ (function (_super) {
    __extends(GetLensVersionDifferenceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLensVersionDifferenceCommand(input) {
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
    GetLensVersionDifferenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "GetLensVersionDifferenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLensVersionDifferenceInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetLensVersionDifferenceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLensVersionDifferenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLensVersionDifferenceCommand(input, context);
    };
    GetLensVersionDifferenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLensVersionDifferenceCommand(output, context);
    };
    return GetLensVersionDifferenceCommand;
}($Command));
export { GetLensVersionDifferenceCommand };
//# sourceMappingURL=GetLensVersionDifferenceCommand.js.map