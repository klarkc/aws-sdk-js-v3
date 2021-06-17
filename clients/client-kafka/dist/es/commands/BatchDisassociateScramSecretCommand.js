import { __extends } from "tslib";
import { BatchDisassociateScramSecretRequest, BatchDisassociateScramSecretResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchDisassociateScramSecretCommand, serializeAws_restJson1BatchDisassociateScramSecretCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates one or more Scram Secrets from an Amazon MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, BatchDisassociateScramSecretCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, BatchDisassociateScramSecretCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new BatchDisassociateScramSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateScramSecretCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateScramSecretCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDisassociateScramSecretCommand = /** @class */ (function (_super) {
    __extends(BatchDisassociateScramSecretCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDisassociateScramSecretCommand(input) {
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
    BatchDisassociateScramSecretCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "BatchDisassociateScramSecretCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDisassociateScramSecretRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDisassociateScramSecretResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDisassociateScramSecretCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDisassociateScramSecretCommand(input, context);
    };
    BatchDisassociateScramSecretCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDisassociateScramSecretCommand(output, context);
    };
    return BatchDisassociateScramSecretCommand;
}($Command));
export { BatchDisassociateScramSecretCommand };
//# sourceMappingURL=BatchDisassociateScramSecretCommand.js.map