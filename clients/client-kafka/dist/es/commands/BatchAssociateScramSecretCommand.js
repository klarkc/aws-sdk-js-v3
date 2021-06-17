import { __extends } from "tslib";
import { BatchAssociateScramSecretRequest, BatchAssociateScramSecretResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchAssociateScramSecretCommand, serializeAws_restJson1BatchAssociateScramSecretCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates one or more Scram Secrets with an Amazon MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, BatchAssociateScramSecretCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, BatchAssociateScramSecretCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new BatchAssociateScramSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateScramSecretCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateScramSecretCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchAssociateScramSecretCommand = /** @class */ (function (_super) {
    __extends(BatchAssociateScramSecretCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchAssociateScramSecretCommand(input) {
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
    BatchAssociateScramSecretCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "BatchAssociateScramSecretCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchAssociateScramSecretRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchAssociateScramSecretResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchAssociateScramSecretCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchAssociateScramSecretCommand(input, context);
    };
    BatchAssociateScramSecretCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchAssociateScramSecretCommand(output, context);
    };
    return BatchAssociateScramSecretCommand;
}($Command));
export { BatchAssociateScramSecretCommand };
//# sourceMappingURL=BatchAssociateScramSecretCommand.js.map