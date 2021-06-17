import { __extends } from "tslib";
import { ContainsPiiEntitiesRequest, ContainsPiiEntitiesResponse } from "../models/models_0";
import { deserializeAws_json1_1ContainsPiiEntitiesCommand, serializeAws_json1_1ContainsPiiEntitiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Analyzes input text for the presence of personally identifiable information (PII) and
 *       returns the labels of identified PII entity types such as name, address, bank account number,
 *       or phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ContainsPiiEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ContainsPiiEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ContainsPiiEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ContainsPiiEntitiesCommandInput} for command's `input` shape.
 * @see {@link ContainsPiiEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ContainsPiiEntitiesCommand = /** @class */ (function (_super) {
    __extends(ContainsPiiEntitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ContainsPiiEntitiesCommand(input) {
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
    ContainsPiiEntitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendClient";
        var commandName = "ContainsPiiEntitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ContainsPiiEntitiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ContainsPiiEntitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ContainsPiiEntitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ContainsPiiEntitiesCommand(input, context);
    };
    ContainsPiiEntitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ContainsPiiEntitiesCommand(output, context);
    };
    return ContainsPiiEntitiesCommand;
}($Command));
export { ContainsPiiEntitiesCommand };
//# sourceMappingURL=ContainsPiiEntitiesCommand.js.map