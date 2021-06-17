import { __extends } from "tslib";
import { DeleteDistributionRequest, DeleteDistributionResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDistributionCommand, serializeAws_json1_1DeleteDistributionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes your Amazon Lightsail content delivery network (CDN) distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDistributionCommandInput} for command's `input` shape.
 * @see {@link DeleteDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDistributionCommand = /** @class */ (function (_super) {
    __extends(DeleteDistributionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDistributionCommand(input) {
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
    DeleteDistributionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteDistributionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDistributionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDistributionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDistributionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDistributionCommand(input, context);
    };
    DeleteDistributionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDistributionCommand(output, context);
    };
    return DeleteDistributionCommand;
}($Command));
export { DeleteDistributionCommand };
//# sourceMappingURL=DeleteDistributionCommand.js.map