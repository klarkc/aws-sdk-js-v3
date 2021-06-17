import { __extends } from "tslib";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDatasetCommand, serializeAws_restJson1CreateDatasetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new dataset  in an Amazon Lookout for Vision project. <code>CreateDataset</code> can create a
 *       training or a test dataset from a valid dataset source (<code>DatasetSource</code>).</p>
 *          <p>If you want a single dataset project, specify <code>train</code> for the value of
 *          <code>DatasetType</code>.</p>
 *         <p>To have a project with separate training and test datasets, call <code>CreateDataset</code> twice.
 *            On the first call, specify <code>train</code> for the value of
 *            <code>DatasetType</code>. On the second call, specify <code>test</code> for the value of
 *            <code>DatasetType</code>. </p>
 *         <p>This operation requires permissions to perform the
 *            <code>lookoutvision:CreateDataset</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, CreateDatasetCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, CreateDatasetCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDatasetCommand = /** @class */ (function (_super) {
    __extends(CreateDatasetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatasetCommand(input) {
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
    CreateDatasetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutVisionClient";
        var commandName = "CreateDatasetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatasetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatasetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDatasetCommand(input, context);
    };
    CreateDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDatasetCommand(output, context);
    };
    return CreateDatasetCommand;
}($Command));
export { CreateDatasetCommand };
//# sourceMappingURL=CreateDatasetCommand.js.map