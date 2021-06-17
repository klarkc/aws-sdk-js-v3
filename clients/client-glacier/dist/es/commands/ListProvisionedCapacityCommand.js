import { __extends } from "tslib";
import { ListProvisionedCapacityInput, ListProvisionedCapacityOutput } from "../models/models_0";
import { deserializeAws_restJson1ListProvisionedCapacityCommand, serializeAws_restJson1ListProvisionedCapacityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation lists the provisioned capacity units for the specified AWS
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListProvisionedCapacityCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListProvisionedCapacityCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisionedCapacityCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedCapacityCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProvisionedCapacityCommand = /** @class */ (function (_super) {
    __extends(ListProvisionedCapacityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProvisionedCapacityCommand(input) {
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
    ListProvisionedCapacityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "ListProvisionedCapacityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProvisionedCapacityInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListProvisionedCapacityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProvisionedCapacityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProvisionedCapacityCommand(input, context);
    };
    ListProvisionedCapacityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProvisionedCapacityCommand(output, context);
    };
    return ListProvisionedCapacityCommand;
}($Command));
export { ListProvisionedCapacityCommand };
//# sourceMappingURL=ListProvisionedCapacityCommand.js.map