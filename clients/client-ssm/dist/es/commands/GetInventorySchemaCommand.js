import { __extends } from "tslib";
import { GetInventorySchemaRequest, GetInventorySchemaResult } from "../models/models_1";
import { deserializeAws_json1_1GetInventorySchemaCommand, serializeAws_json1_1GetInventorySchemaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Return a list of inventory type names for the account, or return a list of attribute names
 *    for a specific Inventory item type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventorySchemaCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventorySchemaCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetInventorySchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInventorySchemaCommandInput} for command's `input` shape.
 * @see {@link GetInventorySchemaCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInventorySchemaCommand = /** @class */ (function (_super) {
    __extends(GetInventorySchemaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInventorySchemaCommand(input) {
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
    GetInventorySchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetInventorySchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInventorySchemaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInventorySchemaResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInventorySchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInventorySchemaCommand(input, context);
    };
    GetInventorySchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInventorySchemaCommand(output, context);
    };
    return GetInventorySchemaCommand;
}($Command));
export { GetInventorySchemaCommand };
//# sourceMappingURL=GetInventorySchemaCommand.js.map