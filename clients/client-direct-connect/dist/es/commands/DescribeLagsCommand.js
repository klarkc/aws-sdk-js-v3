import { __extends } from "tslib";
import { DescribeLagsRequest, Lags } from "../models/models_0";
import { deserializeAws_json1_1DescribeLagsCommand, serializeAws_json1_1DescribeLagsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes all your link aggregation groups (LAG) or the specified LAG.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeLagsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeLagsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeLagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLagsCommandInput} for command's `input` shape.
 * @see {@link DescribeLagsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLagsCommand = /** @class */ (function (_super) {
    __extends(DescribeLagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLagsCommand(input) {
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
    DescribeLagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeLagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Lags.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLagsCommand(input, context);
    };
    DescribeLagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLagsCommand(output, context);
    };
    return DescribeLagsCommand;
}($Command));
export { DescribeLagsCommand };
//# sourceMappingURL=DescribeLagsCommand.js.map