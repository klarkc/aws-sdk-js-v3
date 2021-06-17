import { __extends } from "tslib";
import { UpdateHITTypeOfHITRequest, UpdateHITTypeOfHITResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateHITTypeOfHITCommand, serializeAws_json1_1UpdateHITTypeOfHITCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>UpdateHITTypeOfHIT</code>
 *             operation allows you to change the HITType properties of a HIT. This
 *             operation disassociates the HIT from its old HITType properties and
 *             associates it with the new HITType properties. The HIT takes on the
 *             properties of the new HITType in place of the old ones.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateHITTypeOfHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateHITTypeOfHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateHITTypeOfHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHITTypeOfHITCommandInput} for command's `input` shape.
 * @see {@link UpdateHITTypeOfHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateHITTypeOfHITCommand = /** @class */ (function (_super) {
    __extends(UpdateHITTypeOfHITCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateHITTypeOfHITCommand(input) {
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
    UpdateHITTypeOfHITCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "UpdateHITTypeOfHITCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateHITTypeOfHITRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateHITTypeOfHITResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateHITTypeOfHITCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateHITTypeOfHITCommand(input, context);
    };
    UpdateHITTypeOfHITCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateHITTypeOfHITCommand(output, context);
    };
    return UpdateHITTypeOfHITCommand;
}($Command));
export { UpdateHITTypeOfHITCommand };
//# sourceMappingURL=UpdateHITTypeOfHITCommand.js.map