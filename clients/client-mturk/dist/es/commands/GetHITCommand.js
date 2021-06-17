import { __extends } from "tslib";
import { GetHITRequest, GetHITResponse } from "../models/models_0";
import { deserializeAws_json1_1GetHITCommand, serializeAws_json1_1GetHITCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>GetHIT</code> operation retrieves the details of the specified HIT.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHITCommandInput} for command's `input` shape.
 * @see {@link GetHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHITCommand = /** @class */ (function (_super) {
    __extends(GetHITCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHITCommand(input) {
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
    GetHITCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "GetHITCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHITRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHITResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHITCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetHITCommand(input, context);
    };
    GetHITCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetHITCommand(output, context);
    };
    return GetHITCommand;
}($Command));
export { GetHITCommand };
//# sourceMappingURL=GetHITCommand.js.map