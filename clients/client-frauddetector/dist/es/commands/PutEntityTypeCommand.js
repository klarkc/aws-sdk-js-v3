import { __extends } from "tslib";
import { PutEntityTypeRequest, PutEntityTypeResult } from "../models/models_0";
import { deserializeAws_json1_1PutEntityTypeCommand, serializeAws_json1_1PutEntityTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutEntityTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutEntityTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutEntityTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEntityTypeCommandInput} for command's `input` shape.
 * @see {@link PutEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEntityTypeCommand = /** @class */ (function (_super) {
    __extends(PutEntityTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEntityTypeCommand(input) {
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
    PutEntityTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "PutEntityTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEntityTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEntityTypeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEntityTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutEntityTypeCommand(input, context);
    };
    PutEntityTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutEntityTypeCommand(output, context);
    };
    return PutEntityTypeCommand;
}($Command));
export { PutEntityTypeCommand };
//# sourceMappingURL=PutEntityTypeCommand.js.map