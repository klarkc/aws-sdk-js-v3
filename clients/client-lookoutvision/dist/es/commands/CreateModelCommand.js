import { __extends } from "tslib";
import { CreateModelRequest, CreateModelResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateModelCommand, serializeAws_restJson1CreateModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version of a model within an an Amazon Lookout for Vision project.
 *       <code>CreateModel</code> is an asynchronous operation in which Amazon Lookout for Vision trains, tests,
 *        and evaluates a new version of a model. </p>
 *          <p>To get the current status, check the <code>Status</code> field returned
 *       in the response from <a>DescribeModel</a>.</p>
 *          <p>If the project has a single dataset, Amazon Lookout for Vision internally splits the dataset
 *        to create a training and a test dataset.
 *        If the project has a training and a test dataset, Lookout for Vision uses the respective datasets to train and test
 *        the model. </p>
 *          <p>After training completes, the evaluation metrics are stored at the location specified in
 *         <code>OutputConfig</code>.  </p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:CreateModel</code> operation. If you want to tag your model, you also require
 *          permission to the <code>lookoutvision:TagResource</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, CreateModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, CreateModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateModelCommand = /** @class */ (function (_super) {
    __extends(CreateModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateModelCommand(input) {
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
    CreateModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutVisionClient";
        var commandName = "CreateModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateModelCommand(input, context);
    };
    CreateModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateModelCommand(output, context);
    };
    return CreateModelCommand;
}($Command));
export { CreateModelCommand };
//# sourceMappingURL=CreateModelCommand.js.map