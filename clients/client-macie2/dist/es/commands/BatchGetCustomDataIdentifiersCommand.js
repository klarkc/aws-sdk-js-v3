import { __extends } from "tslib";
import { BatchGetCustomDataIdentifiersRequest, BatchGetCustomDataIdentifiersResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand, serializeAws_restJson1BatchGetCustomDataIdentifiersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about one or more custom data identifiers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, BatchGetCustomDataIdentifiersCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, BatchGetCustomDataIdentifiersCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new BatchGetCustomDataIdentifiersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetCustomDataIdentifiersCommandInput} for command's `input` shape.
 * @see {@link BatchGetCustomDataIdentifiersCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetCustomDataIdentifiersCommand = /** @class */ (function (_super) {
    __extends(BatchGetCustomDataIdentifiersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetCustomDataIdentifiersCommand(input) {
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
    BatchGetCustomDataIdentifiersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "BatchGetCustomDataIdentifiersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetCustomDataIdentifiersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetCustomDataIdentifiersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetCustomDataIdentifiersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchGetCustomDataIdentifiersCommand(input, context);
    };
    BatchGetCustomDataIdentifiersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand(output, context);
    };
    return BatchGetCustomDataIdentifiersCommand;
}($Command));
export { BatchGetCustomDataIdentifiersCommand };
//# sourceMappingURL=BatchGetCustomDataIdentifiersCommand.js.map