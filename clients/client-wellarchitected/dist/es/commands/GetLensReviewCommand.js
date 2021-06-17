import { __extends } from "tslib";
import { GetLensReviewInput, GetLensReviewOutput } from "../models/models_0";
import { deserializeAws_restJson1GetLensReviewCommand, serializeAws_restJson1GetLensReviewCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get lens review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetLensReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLensReviewCommandInput} for command's `input` shape.
 * @see {@link GetLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLensReviewCommand = /** @class */ (function (_super) {
    __extends(GetLensReviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLensReviewCommand(input) {
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
    GetLensReviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "GetLensReviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLensReviewInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetLensReviewOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLensReviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLensReviewCommand(input, context);
    };
    GetLensReviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLensReviewCommand(output, context);
    };
    return GetLensReviewCommand;
}($Command));
export { GetLensReviewCommand };
//# sourceMappingURL=GetLensReviewCommand.js.map