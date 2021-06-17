import { __extends } from "tslib";
import { UpdatePartitionRequest, UpdatePartitionResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdatePartitionCommand, serializeAws_json1_1UpdatePartitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdatePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePartitionCommandInput} for command's `input` shape.
 * @see {@link UpdatePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePartitionCommand = /** @class */ (function (_super) {
    __extends(UpdatePartitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePartitionCommand(input) {
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
    UpdatePartitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdatePartitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePartitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePartitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePartitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePartitionCommand(input, context);
    };
    UpdatePartitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePartitionCommand(output, context);
    };
    return UpdatePartitionCommand;
}($Command));
export { UpdatePartitionCommand };
//# sourceMappingURL=UpdatePartitionCommand.js.map