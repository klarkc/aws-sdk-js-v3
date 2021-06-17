import { __extends } from "tslib";
import { UpdateExpirationForHITRequest, UpdateExpirationForHITResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateExpirationForHITCommand, serializeAws_json1_1UpdateExpirationForHITCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT.
 *             If you update it to a time in the past, the HIT will be immediately expired.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateExpirationForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateExpirationForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateExpirationForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExpirationForHITCommandInput} for command's `input` shape.
 * @see {@link UpdateExpirationForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateExpirationForHITCommand = /** @class */ (function (_super) {
    __extends(UpdateExpirationForHITCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateExpirationForHITCommand(input) {
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
    UpdateExpirationForHITCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "UpdateExpirationForHITCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateExpirationForHITRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateExpirationForHITResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateExpirationForHITCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateExpirationForHITCommand(input, context);
    };
    UpdateExpirationForHITCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateExpirationForHITCommand(output, context);
    };
    return UpdateExpirationForHITCommand;
}($Command));
export { UpdateExpirationForHITCommand };
//# sourceMappingURL=UpdateExpirationForHITCommand.js.map