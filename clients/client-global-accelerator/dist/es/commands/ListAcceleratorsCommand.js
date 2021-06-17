import { __extends } from "tslib";
import { ListAcceleratorsRequest, ListAcceleratorsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAcceleratorsCommand, serializeAws_json1_1ListAcceleratorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the accelerators for an AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListAcceleratorsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListAcceleratorsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListAcceleratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link ListAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAcceleratorsCommand = /** @class */ (function (_super) {
    __extends(ListAcceleratorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAcceleratorsCommand(input) {
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
    ListAcceleratorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "ListAcceleratorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAcceleratorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAcceleratorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAcceleratorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAcceleratorsCommand(input, context);
    };
    ListAcceleratorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAcceleratorsCommand(output, context);
    };
    return ListAcceleratorsCommand;
}($Command));
export { ListAcceleratorsCommand };
//# sourceMappingURL=ListAcceleratorsCommand.js.map