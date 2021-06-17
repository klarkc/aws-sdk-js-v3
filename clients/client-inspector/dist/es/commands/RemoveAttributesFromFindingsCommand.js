import { __extends } from "tslib";
import { RemoveAttributesFromFindingsRequest, RemoveAttributesFromFindingsResponse } from "../models/models_0";
import { deserializeAws_json1_1RemoveAttributesFromFindingsCommand, serializeAws_json1_1RemoveAttributesFromFindingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes entire attributes (key and value pairs) from the findings that are specified
 *          by the ARNs of the findings where an attribute with the specified key exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, RemoveAttributesFromFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, RemoveAttributesFromFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new RemoveAttributesFromFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAttributesFromFindingsCommandInput} for command's `input` shape.
 * @see {@link RemoveAttributesFromFindingsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveAttributesFromFindingsCommand = /** @class */ (function (_super) {
    __extends(RemoveAttributesFromFindingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveAttributesFromFindingsCommand(input) {
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
    RemoveAttributesFromFindingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "RemoveAttributesFromFindingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveAttributesFromFindingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveAttributesFromFindingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveAttributesFromFindingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveAttributesFromFindingsCommand(input, context);
    };
    RemoveAttributesFromFindingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveAttributesFromFindingsCommand(output, context);
    };
    return RemoveAttributesFromFindingsCommand;
}($Command));
export { RemoveAttributesFromFindingsCommand };
//# sourceMappingURL=RemoveAttributesFromFindingsCommand.js.map