import { __extends } from "tslib";
import { RemoveSourceIdentifierFromSubscriptionMessage, RemoveSourceIdentifierFromSubscriptionResult, } from "../models/models_1";
import { deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand, serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a source identifier from an existing RDS event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveSourceIdentifierFromSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveSourceIdentifierFromSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RemoveSourceIdentifierFromSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandInput} for command's `input` shape.
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveSourceIdentifierFromSubscriptionCommand = /** @class */ (function (_super) {
    __extends(RemoveSourceIdentifierFromSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveSourceIdentifierFromSubscriptionCommand(input) {
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
    RemoveSourceIdentifierFromSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RemoveSourceIdentifierFromSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveSourceIdentifierFromSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveSourceIdentifierFromSubscriptionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveSourceIdentifierFromSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(input, context);
    };
    RemoveSourceIdentifierFromSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(output, context);
    };
    return RemoveSourceIdentifierFromSubscriptionCommand;
}($Command));
export { RemoveSourceIdentifierFromSubscriptionCommand };
//# sourceMappingURL=RemoveSourceIdentifierFromSubscriptionCommand.js.map