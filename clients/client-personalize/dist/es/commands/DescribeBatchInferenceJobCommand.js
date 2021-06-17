import { __extends } from "tslib";
import { DescribeBatchInferenceJobRequest, DescribeBatchInferenceJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeBatchInferenceJobCommand, serializeAws_json1_1DescribeBatchInferenceJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the properties of a batch inference job including name, Amazon Resource Name (ARN),
 *       status, input and output configurations, and the ARN of the solution version used to generate
 *       the recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeBatchInferenceJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeBatchInferenceJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeBatchInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBatchInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBatchInferenceJobCommand = /** @class */ (function (_super) {
    __extends(DescribeBatchInferenceJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBatchInferenceJobCommand(input) {
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
    DescribeBatchInferenceJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DescribeBatchInferenceJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBatchInferenceJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBatchInferenceJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBatchInferenceJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeBatchInferenceJobCommand(input, context);
    };
    DescribeBatchInferenceJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeBatchInferenceJobCommand(output, context);
    };
    return DescribeBatchInferenceJobCommand;
}($Command));
export { DescribeBatchInferenceJobCommand };
//# sourceMappingURL=DescribeBatchInferenceJobCommand.js.map