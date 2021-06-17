import { __extends } from "tslib";
import { PutInventoryRequest, PutInventoryResult } from "../models/models_1";
import { deserializeAws_json1_1PutInventoryCommand, serializeAws_json1_1PutInventoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Bulk update custom inventory items on one more instance. The request adds an inventory item,
 *    if it doesn't already exist, or updates an inventory item, if it does exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new PutInventoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInventoryCommandInput} for command's `input` shape.
 * @see {@link PutInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutInventoryCommand = /** @class */ (function (_super) {
    __extends(PutInventoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutInventoryCommand(input) {
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
    PutInventoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "PutInventoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutInventoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutInventoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutInventoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutInventoryCommand(input, context);
    };
    PutInventoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutInventoryCommand(output, context);
    };
    return PutInventoryCommand;
}($Command));
export { PutInventoryCommand };
//# sourceMappingURL=PutInventoryCommand.js.map