import { __extends } from "tslib";
import { CreateBatchInferenceJobRequest, CreateBatchInferenceJobResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateBatchInferenceJobCommand, serializeAws_json1_1CreateBatchInferenceJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a batch inference job. The operation can handle up to 50 million records and the
 *       input file must be in JSON format. For more information, see <a>recommendations-batch</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateBatchInferenceJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateBatchInferenceJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateBatchInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBatchInferenceJobCommandInput} for command's `input` shape.
 * @see {@link CreateBatchInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBatchInferenceJobCommand = /** @class */ (function (_super) {
    __extends(CreateBatchInferenceJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBatchInferenceJobCommand(input) {
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
    CreateBatchInferenceJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "CreateBatchInferenceJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBatchInferenceJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBatchInferenceJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBatchInferenceJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateBatchInferenceJobCommand(input, context);
    };
    CreateBatchInferenceJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateBatchInferenceJobCommand(output, context);
    };
    return CreateBatchInferenceJobCommand;
}($Command));
export { CreateBatchInferenceJobCommand };
//# sourceMappingURL=CreateBatchInferenceJobCommand.js.map