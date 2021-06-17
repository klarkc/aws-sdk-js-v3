import { __extends } from "tslib";
import { ListByoipCidrsRequest, ListByoipCidrsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListByoipCidrsCommand, serializeAws_json1_1ListByoipCidrsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including
 * 			the current state and a history of state changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListByoipCidrsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListByoipCidrsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListByoipCidrsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListByoipCidrsCommandInput} for command's `input` shape.
 * @see {@link ListByoipCidrsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListByoipCidrsCommand = /** @class */ (function (_super) {
    __extends(ListByoipCidrsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListByoipCidrsCommand(input) {
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
    ListByoipCidrsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "ListByoipCidrsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListByoipCidrsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListByoipCidrsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListByoipCidrsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListByoipCidrsCommand(input, context);
    };
    ListByoipCidrsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListByoipCidrsCommand(output, context);
    };
    return ListByoipCidrsCommand;
}($Command));
export { ListByoipCidrsCommand };
//# sourceMappingURL=ListByoipCidrsCommand.js.map