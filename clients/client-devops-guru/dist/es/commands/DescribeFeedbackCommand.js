import { __extends } from "tslib";
import { DescribeFeedbackRequest, DescribeFeedbackResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeFeedbackCommand, serializeAws_restJson1DescribeFeedbackCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * 			Returns the most recent feedback submitted in the current AWS account and Region.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeFeedbackCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeFeedbackCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFeedbackCommandInput} for command's `input` shape.
 * @see {@link DescribeFeedbackCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFeedbackCommand = /** @class */ (function (_super) {
    __extends(DescribeFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFeedbackCommand(input) {
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
    DescribeFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "DescribeFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeFeedbackCommand(input, context);
    };
    DescribeFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeFeedbackCommand(output, context);
    };
    return DescribeFeedbackCommand;
}($Command));
export { DescribeFeedbackCommand };
//# sourceMappingURL=DescribeFeedbackCommand.js.map