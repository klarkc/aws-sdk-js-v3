import { __extends } from "tslib";
import { ListResourceInventoryRequest, ListResourceInventoryResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResourceInventoryCommand, serializeAws_json1_1ListResourceInventoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists resources managed using Systems Manager inventory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListResourceInventoryCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListResourceInventoryCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListResourceInventoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceInventoryCommandInput} for command's `input` shape.
 * @see {@link ListResourceInventoryCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceInventoryCommand = /** @class */ (function (_super) {
    __extends(ListResourceInventoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceInventoryCommand(input) {
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
    ListResourceInventoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ListResourceInventoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceInventoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceInventoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceInventoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourceInventoryCommand(input, context);
    };
    ListResourceInventoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourceInventoryCommand(output, context);
    };
    return ListResourceInventoryCommand;
}($Command));
export { ListResourceInventoryCommand };
//# sourceMappingURL=ListResourceInventoryCommand.js.map